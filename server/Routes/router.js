 
 const express = require('express')
 const router = new express.Router()
 const controllers = require('../Controllers/usersControllers')

 // routes

 router.post("/user/register",controllers.userpost)



 module.exports = router;