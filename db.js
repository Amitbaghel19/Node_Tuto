const mongoose=require('mongoose');
const mongoUrl= "mongodb://127.0.0.1:27017/hotels";
mongoose.connect(mongoUrl,{
})
const db=mongoose.connection
db.on('connected',()=>{
    console.log("mongodb connection established");
})
db.on('error',(err)=>{
    console.log("connection error")
})
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
})
module.exports=db;