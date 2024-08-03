const express = require("express");
const { postNewBlog, getAllAricleBlog, getAllAricleBlogById, updateBlogById, deleteBlogById } = require('../controllers/blogController')
const blogRouter = express.Router();

blogRouter.post('/post/:id', postNewBlog)
blogRouter.get('/', getAllAricleBlog)
blogRouter.get('/:id', getAllAricleBlogById)
blogRouter.put('/update/:id', updateBlogById)
blogRouter.delete('/delete/:id', deleteBlogById)

module.exports = blogRouter;