
const mongoose = require('mongoose')
const Publication = mongoose.model('Publication')



class PublicationController {

    static async createPublication(req,res) {
        const { type, userId, communityId, body } = req.body
        let publication
        if (type === 'image'){
            const {  imageURL } = req.body
            publication = new Publication({ imageURL, type, userId, communityId, body })
        } else {
            publication = new Publication({ type, userId, communityId, body })
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