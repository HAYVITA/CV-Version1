const bodyParser=require("body-parser");
const request=require("request");
const express=require("express");
const app=express();
app.get("/",function(request,response){
response.sendFile(__dirname+"/index.html");
});
app.listen(3000,function(req,res){
  console.log("yaaahooooo!!!!its working!!!!");
});
