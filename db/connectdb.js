const mongoose =  require('mongoose')
const live_url = 'mongodb+srv://pv43209:1234@cluster0.jgtwobe.mongodb.net/BlogProject?retryWrites=true&w=majority'
const url = 'mongodb://127.0.0.1:27017/BlogProject'

const connectDb = ()=>{
    return mongoose.connect(live_url)

    .then(()=>{
        console.log("connected to Database")
    }).catch((error)=>{
        console.log('error')
    })
}

module.exports= connectDb