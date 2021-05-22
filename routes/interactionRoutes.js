const InteractionController = require('../controllers/InteractionController')
const express = require('express')
const router = express.Router()

router.post('/publications/:id/interactions', InteractionController.createInteraction)

router.delete('/publications/:id/interactions', InteractionController.deleteInteraction)



module.exports = router