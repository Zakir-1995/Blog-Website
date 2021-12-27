const express = require('express')
const { getBlogs, getBlog, getBlogNew, postBlogs } = require('../controllers/blog.controller')
const router = express.Router()

router.get('/blogs', getBlogs)
router.post('/blogs',postBlogs)
router.get('/blogs/new',getBlogNew)
router.get('/blogs/:id', getBlog)


module.exports =router