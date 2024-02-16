const express = require('express');
const FrontController = require('../controllers/FrontController');
const CategoryController = require('../controllers/CategoryController')
const AboutController = require('../controllers/AboutController');
const ContactController = require('../controllers/ContactController');
const AdminController = require('../controllers/AdminController');
const auth = require('../middleware/auth')
const router = express.Router()


router.get('/about',FrontController.about)
router.get('/blogdetails/:id',FrontController.blogdetails)
router.get('/bloglistone',FrontController.bloglist)
router.get('/blog',FrontController.blog)
router.get('/contact',FrontController.contact)


router.get('/dashboard',auth,FrontController.dashboard)
router.get('/',FrontController.home)
router.get('/login',FrontController.login)
router.get('/register',FrontController.Register)

router.post('/insertblog',FrontController.insertBlog)
router.get('/blogview/:id',FrontController.blogview)
router.get('/blogedit/:id',FrontController.blogedit)
router.post('/blogupdate/:id',FrontController.blogupdate)
router.get('/blogdelete/:id',FrontController.blogdelete)

// category controller
router.get('/categorydisplay',CategoryController.CategoryDisplay)
router.post('/insertcategory',CategoryController.insertCategory)
router.get('/categoryview/:id',CategoryController.CategoryView)
router.get('/categoryedit/:id',CategoryController.CategoryEdit)
router.get('/categorydelete/:id',CategoryController.CategoryDelete)
router.post('/categoryupdate/:id',CategoryController.Categoryupdate)

// about Controller 

router.get('/displayabout',AboutController.DisplayAbout)
router.post('/insertAbout',AboutController.insertAbout)
router.get('/aboutview/:id',AboutController.Aboutview)
router.get('/aboutedit/:id',AboutController.Aboutedit)
router.post('/updateabout/:id',AboutController.Aboutupdate)
router.get('/aboutdelete/:id',AboutController.Aboutdelete)
// contact controller

router.get('/contact/contactdisplay',ContactController.Contactdisplay)
router.post('/Contactinsert',ContactController.Contactinsert)

//admin controller
router.post('/adminregister',AdminController.register)
router.post('/vlogin',AdminController.vlogin)
router.get('/logout',AdminController.logout)

module.exports = router;