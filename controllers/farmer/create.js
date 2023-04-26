const Farmer = require('../../models/farmer_model');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const createFarmer = async(req,res) => {
    console.log(req.body)

    try{
        const id=uuidv4();
        const name=req.body.name;
        const age=req.body.age;
        const sex=req.body.sex;
        const address=req.body.address;
        const email=req.body.email;
        const phone=req.body.phone;
        const aadhar=req.body.aadhar;
        const pan=req.body.pan;
        const password=req.body.password;
        const accNo=req.body.accNo;
        const ifsc=req.body.ifsc;
    
        const hashedPass = await bcrypt.hash(password, 10);
        const bank_details = {
            ifsc: ifsc,
            accNo: accNo
        }

        const newFarmer = await Farmer.create({
            id: id,
            email: email,
            phone: phone,
            name: name,
            password: hashedPass,
            age: age,
            sex: sex,
            address: address,
            aadhar: aadhar,
            pan: pan,
            status: "pending",
            bank_details: bank_details
        })

        await newFarmer.save();

        const token = jwt.sign( { name, email, id }, process.env.JWT_AUTH_SECRET);
        return res.status(200).json({ message: "user created successfully", token: token,data:{name,email}});


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
    createFarmer
}