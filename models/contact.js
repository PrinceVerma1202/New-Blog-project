const mongoose =  require('mongoose')
// DEfine Schema
const ContactSchema= new mongoose.Schema ({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
   
    
},{timestamps:true})
//Create collection
// /blog is the name of Collection 
// BlogSchema is the  field of Collection
const ContactModel =  mongoose.model('Contact',ContactSchema)

module.exports = ContactModel