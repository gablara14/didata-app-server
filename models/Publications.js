const mongoose = require('mongoose')
const userSchema = require('./User')

const publicationsSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    body:{
        type: String,
    },
    imageURL:{
        type: String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: Date
    },
    communityId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    }
})


mongoose.model('Publication', publicationsSchema)