const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dascanioproject',{autoIndex: true})
        console.log('Connected to MongoDB')
    } catch (ex) {
        console.error(`MongoDB connection error:\n${ex}`)
        process.exit(1)
    }
}

const blogsModel = mongoose.model('blogs', mongoose.Schema({}, {strict: false}))

module.exports = {
    connect,
    blogsModel
}