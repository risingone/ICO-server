const Investors = require('../../models/investor_model');

const getInvestors = async(req, res) => {

    try{
        const listOfAll = await Investors.find({});

        // console.log(listOfAll);

        return res.status(200).json({
            error: false,
            investors: listOfAll,
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
    getInvestors
}