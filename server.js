// var fs=require('fs');
// var os=require('os');
// const user=os.userInfo();
// console.log(user);
// fs.appendFile('greeting.txt','hi'+ user.username+'!',()=>{
//     console.log('file is created');
// })


// var notes=require('./notes.js');
// console.log("hello");
// console.log(notes.add(1,2));
// console.log(notes.a);


//    json data convert to object**************

// const jsonString='{"name":"Amit","Age":21,"city":"indore"}';
// const ob=JSON.parse(jsonString);
// console.log(ob.city)

const express = require('express')
const app = express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json());
const Person=require('./models/Person')

app.get('/', (req,res)=>{
  res.send('Hello Worldddd')
})

app.get('/admin',function(req,res){
    res.send('this is admin pannel');
})
//            Database me store   ***************



app.get('/amit',(req,res)=>{
    const details={
        name:"Amit",
        age:12
    }
    res.send(details);
})

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes)

app.listen(4000,()=>{
    console.log("server running");
})
