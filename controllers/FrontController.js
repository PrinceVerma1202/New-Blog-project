const BlogModel = require('../models/Blog');
const AboutModel = require('../models/about');
const CategoryModel = require('../models/category')

var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dhqlbkhri',
    api_key: '864963865265979',
    api_secret:'5CBjwQTBNUUcqUpPub3W-j5DHV4'
})
class FrontController{
    static about =async (req,res)=>{
        try {
            const about = await AboutModel.findOne()
            res.render('about',{a:about})
        } catch (error) {
            console.log(error)
        }
    }
    static blogdetails =async (req,res)=>{
        try {
            const detail = await BlogModel.findById(req.params.id)
            const recentblogs =  await BlogModel.find().limit(6)
            const category = await CategoryModel.find()
            res.render('blog-details',{d:detail, r:recentblogs, c:category})
        } catch (error) {
            console.log(error)
        }
    }
    static bloglist =async (req,res)=>{
        try {
            
            const data =await BlogModel.find();
            // console.log(data)
            res.render('blog-list',{d:data})
        } catch (error) {
            console.log(error)
        }
    }
    
    static blog =async (req,res)=>{
        try {
            const blogs = await BlogModel.find().sort({_id: -1})
            res.render('blog',{b:blogs})
        } catch (error) {
            console.log(error)
        }
    }
    static contact = (req,res)=>{
        try {
            res.render('contact')
        } catch (error) {
            console.log(error)
        }
    }
    static dashboard =async (req,res)=>{
        try {
            const {name,email} =req.admin
            res.render('dashboard',{n:name,e:email})
        } catch (error) {
            console.log(error)
        }
    }
    
static home =async (req,res)=>{
    try {
        const blogs = await BlogModel.find().sort({_id:-1}).limit(6)
        // console.log(blogs)

        res.render('home',{b:blogs})

    } catch (error) {
        console.log(error)
    }
}



static login = async (req,res)=>{
    try {
        res.render('login',{msg:req.flash('error')})
    } catch (error) {
        console.log(error)
    }
}
static Register = (req,res)=>{
    try {
        res.render('register',{msg:req.flash('error')})
    } catch (error) {
        console.log(error)
    }
}
static insertBlog =async (req,res)=>{
    try {
    //    console.log(req.files.image)
         const file = req.files.image;
         const myImage = await cloudinary.uploader.upload(file.tempFilePath,{
            folder:'BlogImage'
         })
         const result = new BlogModel({
            title:req.body.title,
            discripton:req.body.discripton,
            image:{
                public_id: myImage.public_id,
                url:myImage.secure_url
            }
         }) 
         await result.save()
         res.redirect("/bloglistone")
         } catch (error) {
        //  console.log(myImage)
    //    const result = new BlogModel({
    //     title:req.body.title,
    //     discripton:req.body.discripton,
    //    })
    //  
        console.log(error)
    }
}
static blogview =async (req,res)=>{
    try {
        // console.log(req.params.id)
        const data = await BlogModel.findById(req.params.id)
        // console.log(data)
        res.render('displayView',{View:data})
    } catch (error) {
        console.log(error)
    }
}
static blogedit =async (req,res)=>{
    try {
        // console.log(req.params.id)
        const data = await BlogModel.findById(req.params.id)
        // console.log(data)
        res.render('displayedit',{edit:data})
    } catch (error) {
        console.log(error)
    }
}
static blogupdate =async (req,res)=>{
    try {
        // console.log(req.params.id)
        // console.log(req.body)
        
        // delete image 
        const blog = await BlogModel.findById(req.params.id)
        const imageid = blog.image.public_id;
        await cloudinary.uploader.destroy(imageid)

        //update image
        const file = req.files.image;
        const myImage = await cloudinary.uploader.upload(file.tempFilePath,{
           folder:'BlogImage'
        })

        const update = await BlogModel.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            discripton:req.body.discripton,
            image:{
                public_id: myImage.public_id,
                url:myImage.secure_url
            }
        })
        await update.save()
        res.redirect('/bloglistone')
        // res.render('displayedit',{edit:data})
    } catch (error) {
        console.log(error)
    }
}
static blogdelete =async (req,res)=>{
    try {
        const blog = await BlogModel.findById(req.params.id)
        const imageid = blog.image.public_id;
        await cloudinary.uploader.destroy(imageid)
        await BlogModel.findByIdAndDelete(req.params.id)
        res.redirect('/bloglistone')
    } catch (error) {
        console.log(error)
    }
}


}

module.exports = FrontController