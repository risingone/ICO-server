const Farmers = require('../../models/farmer_model');

const getFarmers = async(req, res) => {

    try{
        const listOfAll = await Farmers.find({});

        // console.log(listOfAll);

        return res.status(200).json({
            error: false,
            farmers: listOfAll,
            code: 200
        })

    }catch(error){
        return res.status(500).json({
            code: 500,
            error: true
        })
    }

}

module.exports = {
    getFarmers
}