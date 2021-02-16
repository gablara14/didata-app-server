const CommunityController = require('../controllers/CommunityController')
const express = require('express')
const router = express.Router()



router.post('/communities', CommunityController.createCommunity)



module.exports = router