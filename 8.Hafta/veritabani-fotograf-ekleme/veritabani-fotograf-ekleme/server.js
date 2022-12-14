const express = require("express")
const app = express()
const http = require("http").createServer(app)

const mongoClient = require("mongodb").MongoClient

const formidable = require("express-formidable")
app.use(formidable({
    multiples: true, // request.files to be arrays of files
}))

const fileSystem = require("fs")

app.use("/uploads", express.static(__dirname + "/uploads"))
app.set("view engine", "ejs")

function callbackFileUpload(images, index, savedPaths = [], success = null) {
	const self = this

	if (images.length > index) {

		fileSystem.readFile(images[index].path, function (error, data) {
			if (error) {
				console.error(error)
				return
			}

			const filePath = "uploads/" + new Date().getTime() + "-" + images[index].name
			
			fileSystem.writeFile(filePath, data, async function (error) {
				if (error) {
					console.error(error)
					return
				}

				savedPaths.push(filePath)

				if (index == (images.length - 1)) {
					success(savedPaths)
				} else {
					index++
					callbackFileUpload(images, index, savedPaths, success)
				}
			})

			fileSystem.unlink(images[index].path, function (error) {
				if (error) {
					console.error(error)
					return
				}
			})
		})
	} else {
		success(savedPaths)
	}
}

const port = process.env.PORT || 3000
http.listen(port, function () {
    console.log("Server started running at port: " + port)

    mongoClient.connect("mongodb://localhost:27017", async function (error, client) {
        if (error) {
            console.error(error)
            return
        }

        const db = client.db("multiple_images_upload")
        console.log("Database connected")

        app.get("/", async function (request, result) {
        	const images = await db.collection("images").find({}).toArray()
        	result.render("home", {
        		images: images.length > 0 ? images[0].images : []
        	})
        })

        app.post("/uploadImages", async function (request, result) {
        	const images = []
			if (Array.isArray(request.files.images)) {
				for (let a = 0; a < request.files.images.length; a++) {
					images.push(request.files.images[a])
				}
			} else {
				images.push(request.files.images)
			}

			callbackFileUpload(images, 0, [], async function (savedPaths) {
				await db.collection("images").insertOne({
					images: savedPaths
				})

				result.send("Images has been uploaded.")
			})
        })
    })
})