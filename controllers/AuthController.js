
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecretKey } = require('../config/keys')

class AuthController {


    static async  signUp(req,res) {
        const { email, password, name, username  } = req.body
        const imageURL = 'new_user_image.jpg'
        const bio = ''

        const UserAlreadyExists = await User.findOne({ email })
        if(!UserAlreadyExists  ){
            try {
                var salt = bcrypt.genSaltSync(10)
                var hashedPassword = bcrypt.hashSync(password, salt)
                const user = new User({ email, password: hashedPassword, name, username, bio, imageURL })
                await user.save()
                const token = jwt.sign({ userId: user._id  }, jwtSecretKey )
                return res.status(200).send({ token, profile: user  })
            } catch (err) {
                return res.status(422).send(err.message)
            }
        } else {
            return res.status(400).send({ error: 'This email address is already being used' })
        }
    }


    static async signIn(req, res){
        const { email, password } = req.body
        
        if(!email || !password){
            return res.status(422).send({error: 'Must provide email and password'})
        }

        const user = await User.findOne({ email })

        if (!user){
            return res.status(422).send({ error: 'Invalid password or email'})
        }

        try {
            var correct = bcrypt.compareSync(password, user.password)
            if (correct){
                const token = jwt.sign({  userId: user._id },  jwtSecretKey)
                res.send({ token, profile  })
            } 
        } catch (err) {
            return res.status(422).send({ error: 'Invalid password or email'})
        }
    } 


}



module.exports = AuthController