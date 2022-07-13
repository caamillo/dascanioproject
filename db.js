const mongoose = require('mongoose')

require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASS}@cluster0.gpwve.mongodb.net/dascanioproject`,{autoIndex: true})
        console.log('Connected to MongoDB')
    } catch (ex) {
        console.error(`MongoDB connection error:\n${ex}`)
        process.exit(1)
    }
}

const blogsModel = mongoose.model('blogs', mongoose.Schema({}, {strict: false}))

async function getBlogById(id){
    try{
        return await blogsModel.findOne({_id: mongoose.Types.ObjectId(id)})
    }catch(ex){
        console.error(`Error getting blog by id:\n${ex}`)
        return null
    }
}

module.exports = {
    connect,
    getBlogById,
    blogsModel
}