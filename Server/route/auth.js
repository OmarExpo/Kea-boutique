const { Router } = require('express')
const passport = require('passport')
const User  = require('../model/User')

const router = Router();

router.get('/', (req,res) => {
  if(req.user){
    res.json({user: req.user.username })
  }else{
    res.status(400).json({user : null})
  }
})

module.exports = router;