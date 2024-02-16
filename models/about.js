const mongoose =  require('mongoose')
// DEfine Schema
const AboutSchema= new mongoose.Schema ({
   
    about:{
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
const AboutModel =  mongoose.model('about',AboutSchema)

module.exports = AboutModel