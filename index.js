require('./models/User')
require('./models/Community')
const express = require('express')
const app = express()
const authRoutes = require('./routes/authRoutes')
const communityRoutes = require('./routes/communityRoutes')
// const uploadRoutes = require('./routes/uploadRoutes')
const userRoutes  = require('./routes/userRoutes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { mongoUri } = require('./config/keys')
const authMiddleware = require('./middlewares/requireAuth')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(authRoutes)
app.use(communityRoutes)
app.use(userRoutes)

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.error('Error Connecting to mongo', err)
})

app.get('/', authMiddleware, (req,res) => res.send(''))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}` )
})