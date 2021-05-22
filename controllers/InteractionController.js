
const mongoose = require('mongoose')
const Publication = mongoose.model('Publication')
const Interaction = mongoose.model('Interaction')



class InteractionController {

    static async createInteraction(req,res) {
        const { userId } = req.body
        const { publicationId } = req.params

        try{
            const interaction = new Interaction({userId, publicationId})
            interaction.save()
            const publication = await Publication.findOneAndUpdate({ _id: id },{ $inc: { 'likes': 1 }},{ new:true })
            return res.status(200).send(publication)
        }catch(err){
            return res.status(422).send(err.message)
        }
    }
    
    static async deleteInteraction(req,res) {
        const { userId } = req.body
        const { publicationId } = req.params
        try{
            await Interaction.findOneAndDelete({userId, publicationId})
            const publication = await Publication.findOneAndUpdate({ _id: id },{ $inc: { 'likes': -1 }},{ new:true })
            return res.status(200).send(publication)
        }catch(err){
            return res.status(422).send(err.message)
        }
    }
}



module.exports = InteractionController