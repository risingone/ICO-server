const Farmer = require('../../models/farmer_model');

const updateFarmer = async(req,res) => {

    try{

        /**
         * req body -> farmer_id, new_status
         */

        const {farmer_id, new_status} = req.body

        const updatedFarmer = await Farmer.findOneAndUpdate({
            id: farmer_id,
        },  {
            status: new_status
        },  {
            new: true
        })

        return res.status(200).json({
            code: 200,
            error: false,
            message: 'status updated',
            updatedFarmer
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            code: 500,
            error: true
        })
    }

}

module.exports = {
    updateFarmer
}