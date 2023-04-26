const Admin = require('../../models/admin_model');
// const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const createAdmin = async(req,res) => {
    console.log(req.body)
    console.log("not possible")
    res.status(200).json({
        message: "action is not permitted"
    })
    return;

    try{
        // const id=uuidv4();
        const username=req.body.username;

        const password=req.body.password;
    
        const hashedPass = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({
            username: username,
            password: hashedPass,
        })

        await newAdmin.save();

        const token = jwt.sign( { username }, process.env.JWT_AUTH_SECRET);
        return res.status(200).json({ message: "admin created successfully", token: token,data:{username}});


    }catch(error){
        console.log(error);
        res.status(500).json({
            code: 500,
            error: true
        })
    }

    res.send('yo')
}


module.exports = {
    createAdmin
}