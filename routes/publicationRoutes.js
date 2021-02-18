const PublicationController = require('../controllers/PublicationController')
const express = require('express')
const router = express.Router()



router.post('/publications', PublicationController.createPublication )

router.get('/users/:id/publications', PublicationController.fetchPublicationsByUser)

router.get('/communities/:id/publications', PublicationController.fetchPublicationsByCommunity)


module.exports = router