const AdminModel = require("../models/admin");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AdminController {
  static register = async (req, res) => {
    try {
      const { name, email, password, cp } = req.body;
      const admin = await AdminModel.findOne({ email: email });
      if (admin) {
        req.flash("error", "Email already exists");
        res.redirect("/register");
      } else {
        if (name && email && password && cp) {
          if (password && cp) {
            const hashpassword = await bcrypt.hash(password,10)
            const register = await new AdminModel({
              name: name,
              email: email,
              password: hashpassword,
        
            }); 
            await register.save();
            res.redirect("/login");
          } else {
            req.flash("error", "Password and conferm password does not match");
            res.redirect("/register");
          }
        } else {
          req.flash("error", "All Fields Are Required");
          res.redirect("/register");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  static vlogin =async (req,res)=>{
    try {
        // console.log(req.body)
        const {email,password}= req.body;
        if(email && password){
            const admin = await AdminModel.findOne({email:email})
            if(admin!= null){
                const ismatched = await bcrypt.compare(password,admin.password)
                if(ismatched){
                  //generate jwt token
                  const token = jwt.sign({id:admin._id},'ajvscjasvcjsvacj123')
                  // console.log(token)
                  res.cookie('token',token)
                    res.redirect('/dashboard')
                }else{
                    req.flash("error", "Email or password is incorrect");
                    res.redirect("/login");
                }
            }else{
                req.flash("error", "You are not registered user");
                res.redirect("/login");
            }
        } else {
          req.flash("error", "All Fields Are Required");
          res.redirect("/login");
        }
    } catch (error) {
        console.log('error')
    }
  }
  static logout = async (req,res)=>{
    try {
      res.clearCookie('token')
        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
  }
}

module.exports = AdminController;
