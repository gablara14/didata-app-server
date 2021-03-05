
const mongoose = require('mongoose')
const Publication = mongoose.model('Publication')
const mongo = require('mongodb')


class PublicationController {

    static async createPublication(req,res) {
        const { type, userId, communityId, body, user  } = req.body

        let publication
        if (type === 'image'){
            const {  imageURL } = req.body
            publication = new Publication({ imageURL, type, likes: 0, userId, createdAt: new Date() , communityId, body, user })
        } else {
            publication = new Publication({ type, userId, likes: 0, createdAt: new Date(), communityId, body, user })
        }
        await publication.save()
       
        return res.status(200).send(publication)
    }

    static async fetchPublicationsByUser(req,res){
       
        try {
            const { id } = req.params
            const publications = await Publication.find({ userId: id })
            
            return res.status(200).send(publications)
        } catch (err){
            return res.status(404).send(err.message)
        }
    }

    static async fetchPublicationsByCommunity(req,res){
        try {
            const { id } = req.params
            const publications = await Publication.find({ communityId: id })
            return res.status(200).send(publications)
        } catch (err){
            return res.status(404).send(err.message)
        }
    }

}



module.exports = PublicationController