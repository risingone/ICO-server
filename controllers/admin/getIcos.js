const Icos = require('../../models/ico_model');

const getIcos = async(req, res) => {

    try{
        const listOfAll = await Icos.find({});

        // console.log(listOfAll);

        return res.status(200).json({
            error: false,
            icos: listOfAll,
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
    getIcos
}