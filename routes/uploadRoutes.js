const AWS = require('aws-sdk')
const express = require('express')
const router = express.Router()

const keys = require('../config/keys')
const { v4: uuidv4 } = require('uuid')

const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: 'us-east-2'
})

module.exports = (app) => {

    app.get('/api/upload', (req,res) => {
        
        const key = `${req.user._id}/${uuidv4()}.jpeg`

        s3.getSignedUrl('putObject', {
            Bucket: 'didata-app',
            ContentType: 'image/jpeg',
            Key: key
        }, (err, url) => res.send({ key, url}) )
    })

     

}


