const UserController = require('../controllers/UserController')
const express = require('express')
const router = express.Router()

router.patch('/users/:id', UserController.updateUser)
router.get('/users', UserController.fetchUsers)



module.exports = router