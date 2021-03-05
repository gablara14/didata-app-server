const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    publicationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publication'
    },
    type: {
        type: String
    }
})

mongoose.model('Interaction', interactionSchema)