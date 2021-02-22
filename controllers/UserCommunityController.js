
const mongoose = require('mongoose')
const Community = mongoose.model('Community')
const UserCommunity = mongoose.model('UserCommunity')
const User = mongoose.model('User')


class UserCommunityController {

    static async followCommunity(req,res) {
        console.log("REQ.BODY: ", req.body)
        const { userId, communityId } = req.body
        const userCommunity = new UserCommunity({ userId, communityId})
        await userCommunity.save()
        await User.findOneAndUpdate(
            { _id: userId },{ $inc: { 'following': 1 }},
            { new:true }, async (err, user) => {
                if (err) return res.status(500).send(err)
                await Community.findOneAndUpdate(
                    { _id: communityId },{ $inc: { 'members': 1 }},
                    { new:true }, (err2, community ) => {
                        if (err2) return res.status(500).send(err2)
                        return res.send({ user, community })
                    } )
            })
    }

    static async unfollowCommunity(req,res) {
        const { userId, communityId } = req.body
        await UserCommunity.deleteOne({
            userId,
            communityId
        }, async (err) => {
            if (err) return res.status(500).send(err)
            await User.findOneAndUpdate(
                { _id: userId },{ $inc: { 'following': -1 }},
                { new:true }, async (err, user) => {
                    if (err) return res.status(500).send(err)
                    await Community.findOneAndUpdate(
                        { _id: communityId },{ $inc: { 'members': -1 }},
                        { new:true }, (err2, community ) => {
                            if (err2) return res.status(500).send(err2)
                            return res.send({ user, community })
                        } )
                })
        })


    }
 
}



module.exports = UserCommunityController