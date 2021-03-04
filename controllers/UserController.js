
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
    
    static async updateUserImage(req, res){
        const { imageURL } = req.body 
        const { id } = req.params

        await User.findByIdAndUpdate(id, imageURL,  {new:true} )
    }

    static async fetchUsers(req,res){
        try{
            const users = await User.find()
            
            res.send(users)
        } catch (err){
            res.status(404).send(err.message)
        }

    }
}



module.exports = UserController