const Posts = require('../models/post.model')

// show home page
exports.getHome = (req,res,next)=>{
    Posts.find({},(err, posts)=>{
        if(err){
            console.log(err)
        }else{
            res.render('home', {posts})
        }
    })
    
}
