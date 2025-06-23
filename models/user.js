const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    salt:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    profileImageURL:{
        type:String,
        default:"../public/default.png"
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    }
},
{timestamps:true});

userSchema.pre("save", function(next){
    const user = this;

    if(!user.isModified("password")) return;
})

const User = mongoose.model("user",userSchema);

module.exports = User;