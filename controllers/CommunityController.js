
const mongoose = require('mongoose')
const Community = mongoose.model('Community')



class CommunityController {

    static async createCommunity(req,res) {
        const { name, description, imageURL, userId, categories  } = req.body

        const categoriesArr = Object.values(categories).map(cat =>{
            return cat.name
        })

        const community = new Community({ name, description, imageURL, userId, categories: categoriesArr })
        await community.save()
        return res.status(200).send(community)
    }




    static async fetchCommunity(req,res){
        const { id } = req.body
        //const user = await User.findOne({ email })

        try {
            const community = await Community.findById(id)
            return res.status(200).send(community)
        } catch (err){
            return res.status(404).send({ error: 'Community not Found'})
        }
       

    }



}



module.exports = CommunityController