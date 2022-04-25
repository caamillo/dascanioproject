const express = require("express");
const morgan = require("morgan");
const db = require('./db');

;(async () => {
    await db.connect()

    const app = express()
    app.use(morgan('tiny'))

    app.use(express.static('public'))
    app.use(express.urlencoded({extended: true}))

    app.set('view engine', 'ejs')

    app.get('/', async (req, res) => {
        const blog = await db.blogsModel.find({})
        res.render('index', { blog: Buffer.from(JSON.stringify(blog)).toString('base64') })
    })

    app.get('/test', async (req, res) => {
        await db.blogsModel.create({
            title: 'Test Blog',
            content: 'This is a test blog',
            date: new Date()
        })
    })

    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000")
    })
})()