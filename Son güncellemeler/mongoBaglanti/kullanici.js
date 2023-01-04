/**const mongoose=require('mongoose');
let kullaniciSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    email:String,
})
module.exports=mongoose.model('users',userSchema);**/
const mongoose = require('mongoose');

const kullaniciSchema = new mongoose.Schema(
  {
    kullaniciAdi: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true
    },
    kullaniciSifre: {
      type: String,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      lowercase: true
    },
    hakkinda: {
      type: String
    },
    kullaniciFotograf: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model('kullanici', kullaniciSchema);
