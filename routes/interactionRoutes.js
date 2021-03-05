const InteractionController = require('../controllers/InteractionController')
const express = require('express')
const router = express.Router()

router.patch('/publications/:id/interactions', InteractionController.patchInteraction)


module.exports = router