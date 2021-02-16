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
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

mongoose.model('Community', communitySchema)

