const express = require("express");
const path = require('path');
const { MongoDB } = require('./connection');
const userRoute = require('./routes/user')

const app = express();
const PORT = 8000;

MongoDB('mongodb://localhost:27017/blog')
.then(()=>{console.log("MonogoDB Connected")})

app.use(express.urlencoded({extended:false}));

app.set("view engine", 'ejs');
app.set("views", path.resolve('./views'));

app.use('/',userRoute);

// app.get("/",(req,res)=>{
//     res.render("home")
// })

app.listen(PORT,()=>{console.log("Server Started")})