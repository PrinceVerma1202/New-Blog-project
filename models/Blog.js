const mongoose =  require('mongoose')
// DEfine Schema
const BlogSchema= new mongoose.Schema ({
    title:{
        type:String,
        require:true,
    },
    discripton:{
        type:String,
        require:true,
    },
    image:{
        public_id:{
        type:String,

        },
        url:{
        type:String,

        }
    }
},{timestamps:true})
//Create collection
// /blog is the name of Collection 
// BlogSchema is the  field of Collection
const BlogModel =  mongoose.model('blog',BlogSchema)

module.exports = BlogModel