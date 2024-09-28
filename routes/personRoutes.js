const express=require('express')
const router=express.Router();
const Person=require('./../models/Person')

router.post('/',async(req,res)=>{
    try{
    const data= req.body; 
    const newPerson=new Person(data);
    const response=await newPerson.save();
    console.log("data saved successfully")
    res.status(200).json(response);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:" Internal server error"});
    }
    
})

router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

router.get('/:workType',async(req,res)=>{
    try{
    const workType=req.params.workType;
    if(workType=='chef' || workType=='manager' || workType=='waiter'){
       const response=await Person.find({work:workType})
       res.status(200).json(response);
    }
    else{
        res.status(404).json({error:'invalid work type'})
    }
}
catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"});

}
})

router.put('/:id',async(req,res)=>{
    try{
       const personId=req.params.id;
       const updatePersonData=req.body;
       const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
              new:true,
              runValidators:true
       })
       if(!response){
        res.status(404).json({error:'person not found'})
       }
          res.status(200).json(response)
    }
    catch(err){
        console.log(err);
    res.status(500).json({error:"internal server error"});

    }
})

router.delete('/:id',async(req,res)=>{
   try{
     const personId=req.params.id;
     
     const response=await Person.findByIdAndDelete(personId);
     if(!response){
        return res.status(404).json({error:'person not found'});
     }
          res.status(200).json(response);
   }
   catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"});

   }    
})

//  exports router

module.exports=router;