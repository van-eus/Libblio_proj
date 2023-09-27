var dbConn =require('../config/db.config')

var User = function(user){
    this.fullNames = user.fullNames;
    this.role = user.role;
    this.contact = user.contact;
    //this.user_id = user.user_id;
  }
  
  User.getAllUsers = (result) => {
    dbConn.query('SELECT * FROM users', (err,res) =>{
      if(err){
        console.log('Error while fetching users.', err)
        result(null,err);
  
      }else{
        console.log('Employees fetched sucessfully');
        result(null,res);
           }
    })
  }

  // get employee by id from db

User.getUserByID=(id, result) => {

    dbConn.query('SELECT * FROM users WHERE id=?', id,(err,res)=> {
      if (err){
      console.log("Error While fetching user by id",err)
      result(null, err)
      }else{
        result(null,res)
      }
    })
  } 

  // create new user

  User.createUser = (userReqData, result) => {
    dbConn.query('INSERT INTO users SET ? ', userReqData, (err, res)=>{
        if (err){
            console.log("Error while inserting data");
          result(null, {status: false, message: err})
        }else{
            console.log("User Created sucessfully ")
            result(null, {status: true, message: 'User created successfully', insertId: res.id})
        }
    }) 
  }


  User.updateUser = (id, userReqData, result) => {
    dbConn.query(
      'UPDATE users SET fullNames=?, role=?, contact=? WHERE id=?',
      [userReqData.fullNames, userReqData.role, userReqData.contact, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating the user", err);
          result(null, err);
        } else {
          console.log("User updated successfully");
          result(null, res);
        }
      }
    );
  };
  
//delete the user

User.deleteUser = (id, result) => {
    dbConn.query('DELETE FROM users WHERE id = ?', [id], (err, res) => {
      if (err) {
        console.log("Error while deleting user:", err);
        result(err, null);
      } else {
        console.log("User deleted successfully");
        result(null, res);
      }
    });
  };
  

  module.exports=User