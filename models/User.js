const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }, name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    imageURL: {
        type: String,
        required: true,
    },
    following: {
        type: Number,
        default: 0
    }
})

mongoose.model('User', userSchema)