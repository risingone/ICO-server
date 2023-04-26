const Ico = require('../../models/ico_model');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const createIco = async(req,res) => {
    console.log(req.body)

    try{
        const id=uuidv4();
        const area=req.body.area;
        const total_ico=req.body.total_ico;
        const price=req.body.price;
        const farmer_id=req.body.farmer_id;
    

        const newIco = await Ico.create({
            id: id,
            area: area,
            total_ico: total_ico,
            price: price,
            farmer_id: farmer_id,
            status: "pending",
            sold_ico: 0
        })

        await newIco.save();

        // const token = jwt.sign( { name, email, id }, process.env.JWT_AUTH_SECRET);
        return res.status(200).json({ message: "ico created successfully", newIco});


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
    createIco
}