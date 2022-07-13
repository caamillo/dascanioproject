const express = require("express");
const morgan = require("morgan");

const db = require('./db');

const blogRouter = require('./routes/blogRouter');

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

    app.use('/blog', blogRouter)

    app.listen(process.env.PORT || 3000, () => {
        console.log("Server is running on http://localhost:3000")
    })
})()