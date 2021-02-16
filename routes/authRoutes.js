
const AuthController = require('../controllers/AuthController')
const express = require('express')
const router = express.Router()


router.post('/signup', AuthController.signUp)
router.post('/signin', AuthController.signIn)


module.exports = router