const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Investor = require("../../models/investor_model");

const signin = async (req, res) => {

    try {
      const investor = await Investor.findOne({
         email : req.body.email
      });
      
      if (!investor) {
        res.status(404).json({ message: "Investor not found" });
        return;
      }
  
      if (await bcrypt.compare(req.body.password, investor.password)) {
        const { name, email, id } = investor;
        
        const token = jwt.sign(
          { name, email, id }, process.env.JWT_AUTH_SECRET
        );
  
        res.status(200).json({ message: "Investor signed in successfully", token: token,data:{name,email}});
      
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