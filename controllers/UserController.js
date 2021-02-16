
const mongoose = require('mongoose')
const User = mongoose.model('User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {


    static async updateUser(req,res){
        await User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, user) =>{
            if (err) return res.status(500).send(err)
            return res.send(user)
        })
    }    
    

}



module.exports = UserController