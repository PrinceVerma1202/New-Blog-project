const AboutModel =require ('../models/about')
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dhqlbkhri',
    api_key: '864963865265979',
    api_secret:'5CBjwQTBNUUcqUpPub3W-j5DHV4'
})
class AboutController{

static DisplayAbout = async (req,res)=>{
    try {
        const data = await AboutModel.find()
        // console.log(data)
        res.render('about/display',{a:data})
        // console.log('helo')
    } catch (error) {
        console.log(error)
    }
}
static insertAbout =async (req,res)=>{
    try {
        // const result = await AboutModel.create(req.body)
        // res.redirect('/displayabout')


        // console.log(result)
       console.log(req.files.image)
         const file = req.files.image;
         const myImage = await cloudinary.uploader.upload(file.tempFilePath,{
            folder:'AboutImage'
         })
         console.log(myImage)
         const result = new AboutModel({
            about:req.body.about,
            image:{
                public_id: myImage.public_id,
                url:myImage.secure_url
            }
         }) 
         await result.save()
         res.redirect("/displayabout")
         } catch (error) {
         console.log(myImage)
    //    const result = new AboutModel({
       
    //     discription:req.body.discription,
    //    })
     
        console.log(error)
    }
}
static Aboutview =async (req,res)=>{
    try {
        // console.log(req.params.id)
        const data = await AboutModel.findById(req.params.id)
        // console.log(data)
        res.render('about/aboutview',{aview:data})
    } catch (error) {
        console.log(error)
    }
}
static Aboutedit =async (req,res)=>{
    try {
        // console.log(req.params.id)
        const data = await AboutModel.findById(req.params.id)
        // console.log(data)
        res.render('about/aboutedit',{aedit:data})
    } catch (error) {
        console.log(error)
    }
}
static Aboutupdate =async (req,res)=>{
    try {
        // console.log(req.params.id)
        // console.log(req.body)
        
        // // delete image 
        // const about = await AboutModel.findById(req.params.id)
        // const imageid = about.image.public_id;
        // await cloudinary.uploader.destroy(imageid)
        //update image
        // const file = req.files.image;
        // const myImage = await cloudinary.uploader.upload(file.tempFilePath,{
        //    folder:'AboutImage'
        // })

        const update = await AboutModel.findByIdAndUpdate(req.params.id,{
            
            about:req.body.about,
            // image:{
            //     public_id: myImage.public_id,
            //     url:myImage.secure_url
            // }
        })
        await update.save()
        res.redirect('/displayabout')
        res.render('aboutedit',{aedit:data})
    } catch (error) {
        console.log(error)
    }
}
static Aboutdelete =async (req,res)=>{
    try {
        // const About = await AboutModel.findById(req.params.id)
        // const imageid = About.image.public_id;
        // await cloudinary.uploader.destroy(imageid)
        await AboutModel.findByIdAndDelete(req.params.id)
        res.redirect('/displayabout')
    } catch (error) {
        console.log(error)
    }
}

}

module.exports= AboutController;