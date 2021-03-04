const CommunityController = require('../controllers/CommunityController')
const express = require('express')
const router = express.Router()
const UserCommunityController = require('../controllers/UserCommunityController')


router.post('/communities', CommunityController.createCommunity)

router.get('/users/:id/communities', CommunityController.fetchCommunitiesByUser)

router.get('/communities', CommunityController.fetchAllCommunities)

// CRIAR NOVA ROTA DEPOIS!
router.post('/follow', UserCommunityController.followCommunity )
router.post('/unfollow', UserCommunityController.unfollowCommunity )
router.get('/follow/:id', UserCommunityController.fetchFollowingList)

module.exports = router