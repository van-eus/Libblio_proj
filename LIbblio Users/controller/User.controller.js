
const UserModel= require('../model/User.model')
const { use } = require('../routes/User.router')

//get All Users list 
exports.getUserList= (req,res) =>{
   UserModel.getAllUsers((err, users) => {
    console.log("Libblio users list")
    if (err)
    res.send(err)
    console.log('Users', users)
    res.send(users)
   }
   )
}



exports.getUserByID = (req, res) => {
   UserModel.getUserByID(req.params.id, (err , user) =>{
    if(err)
    res.send(err)
    console.log("Single user date: ",user)
    res.send(user)
   })
}
exports.createUser = (req,res) =>{
    const userReqData= new UserModel(req.body);
    console.log('userReqData', userReqData);
     //check null
     if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'})
     } else {
        
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: "User created sucessfully", data: user})   
        })
     }
}


// update user
exports.updateUser = (req,res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.key(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully', data: user.insertId})
        }) 
    }
}

// delete user

exports.deleteUser = (req, res) => {
    UserModel.deleteUser(req.params.id , (err, user) => {
        if(err)
        res.send(err)
        res.json({success: true , message: 'User deleted successfully'})
    })
}

exports.deleteUser = (req,res) => {
 UserModel.deleteUser(req.params.id, (err, user)=> {
 if(err)
 res.send(err)
 res.json({success: true, message: "User deleted successfully"})
 })
}