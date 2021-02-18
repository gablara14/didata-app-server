const mongoose = require('mongoose')

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageURL: {
        type: String,
        required: true,
    },
    categories: [
        {
            type: String,
        }
    ],
    closedCommunity:{
        type: Boolean,
        required: true,
        default: false
    },
    anyoneCanPost:{
        type: Boolean,
        required: true,
        default: false
    },
    hiddenCommunity:{
        type: Boolean,
        required: true,
        default: false
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

mongoose.model('Community', communitySchema)

