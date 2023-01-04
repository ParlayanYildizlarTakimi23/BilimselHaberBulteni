var express=require('express');
const app=express();
var mongoose=require('mongoose');

var User=require('./kullanici');
var User=require('./haber');
var User=require('./kategori');
const kullanici = require('./kullanici');

mongoose.connect('mongodb+srv://myData:ynzHxrU4i0dCKsH0@cluster0.qejqhma.mongodb.net/haberSitesi?retryWrites=true&w=majority',
  {useNewUrlParser:true},
  {useUnifiedTopology:true}
).then(()=>{
      console.log('db connection done')
});
User.find({},function(err,data){//veritabanındaki bütün kayıtları getirir
   if(err)
   {
      console.log(err);
   }
   else    
   {
     console.log(data);
   }
})
const info=new kullanici({//yeni kayıt ekler
   _id:new mongoose.Types.ObjectId(),
   kullaniciAdi:'Gamze Nur Karali',
   kullaniciSifre:'123456780',
   email:'gnurkarali@gmail.com',
   hakkinda:'yazılım mühendisi'
})
info.save().then((res)=>{
   console.log(res);
}).catch((err)=>console.log(err))