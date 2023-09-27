require('dotenv').config()
const mysql= require('./config/db.config')
const express=require('express');
const bodyParser= require('body-parser')

const app= express()
const PORT= process.env.PORT

app.use (bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.send('Libblio School Library Management System')
})

const userRoutes = require('./routes/User.router')

// create the user

app.use('/api/v1/users', userRoutes)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})