const UserController = require('../controllers/UserController')
const express = require('express')
const router = express.Router()

router.patch('/users/:id', UserController.updateUser)


module.exports = router