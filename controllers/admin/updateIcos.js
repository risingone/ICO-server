const Ico = require('../../models/ico_model');

const updateIco = async(req,res) => {

    try{

        const {ico_id, new_status} = req.body

        const updatedIco = await Ico.findOneAndUpdate({
            id: ico_id,
        },  {
            status: new_status
        },  {
            new: true
        })

        return res.status(200).json({
            code: 200,
            error: false,
            message: 'status updated',
            updatedIco
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
    updateIco
}