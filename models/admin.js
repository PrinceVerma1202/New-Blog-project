const mongoose =  require('mongoose')
// DEfine Schema
const AdminSchema= new mongoose.Schema ({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cp:{
        type:String,
        require:true,
    },
   
},{timestamps:true})
//Create collection
// /blog is the name of Collection 
// BlogSchema is the  field of Collection
const AdminModel =  mongoose.model('Admin',AdminSchema)

module.exports = AdminModel