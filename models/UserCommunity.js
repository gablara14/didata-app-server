const mongoose = require('mongoose')

const userRelationSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    communityId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    },
})

mongoose.model('UserCommunity', userRelationSchema)