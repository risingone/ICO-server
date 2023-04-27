const Ico = require('../../models/ico_model');
const Investor = require('../../models/investor_model');
const Txn = require('../../models/transaction_model');

/**
 * Buy ico
 *   -> get investor id, quantity, transaction_id, , ico_id, 
 *  
 * -> check if ico availbale
 *  -> update ico details
 *  -> update investor
 *  -> save transaction details
 */

const buyIco = async(req,res) => {
    const {ico_id, qty, investor_id, txn_id} = req.body;
    try{
        const ifIco=await Ico.find({id: ico_id});

        console.log(ifIco);
        console.log(ifIco[0].total_ico, ifIco[0].sold_ico)
        const ico_left=ifIco[0].total_ico-ifIco[0].sold_ico;
        // return  res.send('hello beta')
        if(ifIco){
            if(qty<=ico_left){
                
                /**
                 * -> update ico, uodate investor, create txn
                 */

                // const updateIco = await Ico.updateOne({
                //     id :ico_id
                // },{
                //     sold_ico: sold_ico + qty,

                // })

                let investor_arr = ifIco[0].investors;
                let k = 0;
                let flag_investor = 0
                for(k=0; k<2; k++){
                    if( investor_arr[k].investor_id === investor_id){
                        console.log('hai');
                        flag_investor = 1;
                        break;
                    }
                }

                if(flag_investor === 0){

                }else if(flag_investor === 1){
                    const updateIco = await Ico.updateOne({
                        id :ico_id
                    },{
                        sold_ico: sold_ico + qty,

                    })                    
                }


            } else{
                return res.status(402).json({
                    code: 402,
                    message: "enough ico's doesn't exists!",
                    error: true
                })
            }
        } else{
            return res.status(401).json({
                code: 401,
                message: "ico doesn't exists!",
                error: true
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            code: 500,
            error: true
        })
    }
}

module.exports = {buyIco};