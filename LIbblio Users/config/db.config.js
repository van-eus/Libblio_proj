const mysql= require('mysql2')

const dbConn= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "libblio"
})

dbConn.connect(function(error){
    if (error) throw error
    else console.log("Database Successfully connected")
})

module.exports=dbConn