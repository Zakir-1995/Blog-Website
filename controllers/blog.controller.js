const Posts =require('../models/post.model')


// Show all blogs
exports.getBlogs = (req,res,next)=>{
    Posts.find({},(err, posts)=>{
        if(err){
            console.log(err)
        }else{
            res.render('home', {posts})
        }
    })
    
}

// new post
exports.getBlogNew = (req,res)=>{
    res.render('new-post')
}

exports.postBlogs = (req,res)=>{
   const newPost = new Posts({
       title:req.body.title,
       image:req.body.image,
       description:req.body.description,
       tag:req.body.tag
   })
   newPost.save()
   res.redirect('/')
}

// show a single blog 
exports.getBlog = (req,res,next)=>{
    Posts.findById(req.params.id,(err, post)=>{
        if(err){
            console.log(err)
        }else{
           
            res.render('blogpost', {post})
        }
    })
    
}


