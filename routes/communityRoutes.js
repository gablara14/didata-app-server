const CommunityController = require('../controllers/CommunityController')
const express = require('express')
const router = express.Router()



router.post('/communities', CommunityController.createCommunity)

router.get('/users/:id/communities', CommunityController.fetchCommunities)

router.get('/communities', CommunityController.fetchCommunities)

module.exports = router