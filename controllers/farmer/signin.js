const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Farmer = require("../../models/farmer_model");

const signin = async (req, res) => {

    try {
      const farmer = await Farmer.findOne({
         email : req.body.email
      });
      
      if (!farmer) {
        res.status(404).json({ message: "Farmer not found" });
        return;
      }
  
      if (await bcrypt.compare(req.body.password, farmer.password)) {
        const { name, email, id } = farmer;
        
        const token = jwt.sign(
          { name, email, id }, process.env.JWT_AUTH_SECRET
        );
  
        res.status(200).json({ message: "Farmer signed in successfully", token: token,data:{name,email}});
      
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