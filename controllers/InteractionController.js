
const mongoose = require('mongoose')
const Publication = mongoose.model('Publication')



class InteractionController {

    static async patchInteraction(req,res) {
        const { like } = req.body
        const { id } = req.params
        try{
            const publication = await Publication.findOneAndUpdate({ _id: id },{ $inc: { 'likes': like }},{ new:true })
            return res.status(200).send(publication)
        }catch(err){
            return res.status(422).send(err.message)
        }
    }
}



module.exports = InteractionController