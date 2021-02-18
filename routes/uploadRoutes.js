const AWS = require('aws-sdk')
const keys = require('../config/keys')
const { v4: uuidv4 } = require('uuid')
const express = require('express')
const router = express.Router()

const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: 'us-east-2'
})



router.get('/api/upload/:id', (req,res) => {

    const key = `${req.params.id}/${uuidv4()}.jpeg`

    s3.getSignedUrl('putObject', {
        Bucket: 'didata-bucket',
        ContentType: 'image/jpeg',
        Key: key
    }, (err, url) => res.send({ key, url}) )
})

    



module.exports = router