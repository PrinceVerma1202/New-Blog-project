const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDb =require('./db/connectdb')
const fileuplaod = require
('express-fileupload')
const session = require('express-session')

const flash = require('connect-flash')
var cloudinary = require('cloudinary');
const cookieParser = require('cookie-parser')
app.use(cookieParser())
connectDb();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(fileuplaod({useTempFiles:true}))
app.use(session({
  secret: 'secret',
  cookie: {maxAge:60000},
  resave: false,
  saveUninitialized:false,
}));

app.use(flash());

app.use('/',web)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})