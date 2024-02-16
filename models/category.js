const mongoose =  require('mongoose')
// DEfine Schema
const CategorySchema= new mongoose.Schema ({
    cat_name:{
        type:String,
        require:true,
    },
    // image:{
    //     public_id:{
    //     type:String,

    //     },
    //     url:{
    //     type:String,

    //     }
    // }
},{timestamps:true})
//Create collection
// /blog is the name of Collection 
// BlogSchema is the  field of Collection
const CategoryModel =  mongoose.model('Category',CategorySchema)

module.exports = CategoryModel