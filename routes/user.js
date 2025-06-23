const express = require('express');
const User = require('../models/user')

const router = express.Router();

router.get('/signin',(req,res)=>{
    return res.render("signin")
});

router.get('/signup',(req,res)=>{
    return res.render("signup")
});

router.post('/signin',async(req,res)=>
{
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    })
    return res.redirect('/')
})

module.exports = router;