const express =require('express')

const router= express.Router();

const userController = require('../controller/User.controller')
// Get all users
router.get('/',userController.getUserList)

//get all users
router.get('/:id',userController.getUserByID)

//create new user 
router.post('/', userController.createUser)


// update  user 


router.put('/:id',userController.updateUser)

// delete the user

router.delete('/:id',userController.deleteUser)


module.exports=router