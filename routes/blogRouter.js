const mongoose = require('mongoose')
const express = require('express')

const db = require('../db')

const blogRouter = express.Router()

blogRouter.get('/', async (req, res) => {
    const blog = await db.getBlogById(req.query.id)
    if (blog == null) res.status(404).redirect('/')
    else res.render('blog', { blog: Buffer.from(JSON.stringify(blog)).toString('base64') })
})

module.exports = blogRouter