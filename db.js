const blogsModel = require('./blogs.json')

const getBlogById = async (id) => {
    return blogsModel.find(blog => blog.id === id)
}

module.exports = {
    getBlogById,
    blogsModel
}