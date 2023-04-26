const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin_model");

const signin = async (req, res) => {

    try {
      const admin = await Admin.findOne({
         username : req.body.username
      });
      
      if (!admin) {
        res.status(404).json({ message: "Admin not found" });
        return;
      }
  
      if (await bcrypt.compare(req.body.password, admin.password)) {
        const { username } = admin;
        
        const token = jwt.sign(
          { username }, process.env.JWT_AUTH_SECRET
        );
  
        res.status(200).json({ message: "Admin signed in successfully", token: token,data:{username}});
      
      } else {
        res.status(400).json({ message: "incorrect password" });
      }
    } catch (err) {
      console.log(err);
      res.json({ message: err });
    }
  };
  
module.exports = { 
    signin 
};