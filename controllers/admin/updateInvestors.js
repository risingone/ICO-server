const Investor = require('../../models/investor_model');

const updateInvestor = async(req,res) => {

    try{

        const {investor_id, new_status} = req.body

        const updatedInvestor = await Investor.findOneAndUpdate({
            id: investor_id,
        },  {
            status: new_status
        },  {
            new: true
        })

        return res.status(200).json({
            code: 200,
            error: false,
            message: 'status updated',
            updatedInvestor
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
    updateInvestor
}