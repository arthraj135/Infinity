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
    res.json({username:user.username,email:user.email,phone:user.phone})
  }
  else{
   
    res.json({msg:"Login failed"})
  }
  }

 catch(error){
  res.send(error)
 }

});

module.exports = router; 