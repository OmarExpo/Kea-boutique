const { Router } = require('express')
const passport = require('passport')
const User  = require('../model/User')

const router = Router();

router.get('/', (req,res) => {
  if(req.user){
    res.json({user: {username: req.user.username} })
  }else{
    res.status(400).json({user : null})
  }
})

router.post('/sign-up', async(req,res,next) => {
  const {username, password} = req.body
  try {
    await User.register({username}, password)
  } catch (error) {
    if(error.name === 'UserExistsError'){
     return res.status(400).json({message: 'UserExistsError'})
    }
    return res.status(500).json({message: 'There was an error when signing up the user'})
  }
  next()
}, passport.authenticate('local'), (req,res) => {
  res.json({user: {username: req.user.username}})
})

module.exports = router;