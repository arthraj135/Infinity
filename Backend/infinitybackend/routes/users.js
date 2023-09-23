var express = require('express');
var router = express.Router();
var Users=require('../models/users')

/* GET users listing. */
router.post('/signup', async(req, res, next)=> {
  
  try {
     const {username,email,password,phone}=req.body
  const exist= await Users.findOne({email}).exec()
  if(exist){
    res.json({msg:"email already exists"})
  }
  else{
    const user=new Users({email,phone,password,username})
    await user.save()
    res.json({msg:"signup successful!"})
  }
  }

 catch(error){
  res.send(error)
 }

});
router.post('/login', async(req, res, next)=> {
  
  try {
     const {email,password}=req.body
  const user= await Users.findOne({email,password}).exec()
  if(user){
    res.json({username:user.username,email:user.email,phone:user.phone,password:user.password,booking:user.booking})
  }
  else{
   
    res.json({msg:"Login failed"})
  }
  }

 catch(error){
  res.send(error)
 }

});

router.post('/book',async (req,res,next)=>{
  try{
    const {email,password,booking}=req.body
    const exs=await Users.findOne({email,password}).exec()
    if(exs){
      const book=await Users.findOneAndUpdate({email,password},{$set:{booking:booking}})
      if(book){
        res.send(book)
      }
      else{
        res.send('failure')
      }
    }
    
  }
  catch(err){
    res.send(err)
  }
})

module.exports = router; 