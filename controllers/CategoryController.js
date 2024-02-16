const CategoryModel = require("../models/category");

class CategoryController{
    
static CategoryDisplay= async (req,res)=>{
    try {
        const data = await CategoryModel.find()
        // console.log(data)
       res.render('category/categorydisplay',{e:data}) 
    } catch (error) {
        console.log(error)
    }
}
static insertCategory= async (req,res)=>{
    try {
       
    const result2 = new CategoryModel({
        cat_name: req.body.cn
    
     }) 
     
     await result2.save()
     res.redirect('/categorydisplay')
console.log(result2)
    } catch (error) {
        console.log(error)
    }
}
static CategoryView= async (req,res)=>{
    try {
        // const data = await CategoryModel.find()
        // // console.log(data)
        const data = await CategoryModel.findById(req.params.id)
       res.render('category/categoryview',{cview:data}) 

    //    console.log(data)
    } catch (error) {
        console.log(error)
    }
}
static CategoryEdit= async (req,res)=>{
    try {
        // const data = await CategoryModel.find()
        // // console.log(data)
        const data = await CategoryModel.findById(req.params.id)
       res.render('category/categoryedit',{cedit:data}) 

    //    console.log(data)
    } catch (error) {
        console.log(error)
    }
}
static Categoryupdate= async (req,res)=>{
    try {
        const update = await CategoryModel.findByIdAndUpdate(req.params.id,{
            cat_name:req.body.cn,
            
        })
// console.log(req.body)
        await update.save()
        res.redirect('/categorydisplay')
    } catch (error) {
        console.log(error)
    }
}
static CategoryDelete= async (req,res)=>{
    try {
         await CategoryModel.findByIdAndDelete(req.params.id)
// console.log(req.body)
        res.redirect('/categorydisplay')
    } catch (error) {
        console.log(error)
    }
}

}
module.exports= CategoryController;