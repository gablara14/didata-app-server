const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { jwtSecretKey } = require('../config/keys')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    // authorization === 'Bearer dflkashjdlamksn'

    if (!authorization){
        return res.status(401).send({ error: 'You must be logged in.'})
    }

    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, jwtSecretKey , async (err, payload) => {
        if (err){
            return res.status(401).send({ error: 'You must be logged in.'})
        }

        const { userId } = payload

        const user = await User.findById(userId)
        req.user = user
        next()
    })
}