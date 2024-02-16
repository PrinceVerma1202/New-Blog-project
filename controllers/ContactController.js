const ContactModel = require('../models/contact')

class ContactController{

    static Contactinsert=async (req,res)=>{
        try {
            // console.log(req.body)
            const insert = await new ContactModel({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                message:req.body.message,
            })
            await insert.save()
            res.redirect('/contact')
        } catch (error) {
            console.log(error)
        }
    }
    static Contactdisplay=async (req,res)=>{
        try {
            const display = await ContactModel .find()
            res.render('contact/contactdisplay',{d:display})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ContactController;