const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

// body-parser middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')
app.set('views', 'views')

// routes
const homeRouter = require('./routes/home.route')
const blogRouter = require('./routes/blog.route')

app.use(homeRouter)
app.use(blogRouter)


// const Post = require('./models/post.model')
const title = 'How I Handled My first Client?'
const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ab natus repellendus accusamus, dicta eveniet molestias ratione voluptas illum adipisci maxime repellat fugit quas ad consequatur eligendi totam deleniti laudantium.'
const image = 'https://images.pexels.com/photos/4458411/pexels-photo-4458411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
const tag = 'developer'

// const newPost = new Post({
//     title:title,
//     description: description,
//     image : image,
//     tag :tag
// })
// newPost.save()

const PORT = process.env.PORT || 3000
const URI = process.env.DB
mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(result =>{
    console.log('Mongodb Connected')
}).catch(err=>console.log(err))

app.listen(PORT,()=>console.log(`Server is running at http://localhost:${PORT}`))