const Ico = require('../../models/ico_model');
const Investor = require('../../models/investor_model');
const Txn = require('../../models/transaction_model');
const { v4: uuidv4 } = require('uuid');

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
                console.log(ifIco[0].investors.length);

                let flag_investor = 0
                
                for(let k=0; k<ifIco[0].investors.length ; k++){
                    if( investor_arr[k].investor_id === investor_id){
                        console.log('hai');
                        flag_investor = 1;
                        break;
                    }
                }

                if(flag_investor === 0){
                    console.log('inside if');
                    const updatedIco = await Ico.updateOne({
                        id: ico_id
                    },{
                        $push: {
                            investors: {
                                investor_id: investor_id,
                                qty: qty
                            }
                        }
                    },
                        {new: true}
                    )

                    const updateInvestor = await Investor.updateOne({
                        id: investor_id
                    },{
                        $push: {
                            icos: {
                                ico_id: ico_id,
                                qty: qty
                            }
                        }
                    },
                    {new: true})

                    const totalAmount = ((ifIco[0].price)/ifIco[0].total_ico) * qty;

                    const transaction = await Txn.create({
                        txn_id:  uuidv4(),
                        farmer_id: ifIco[0].farmer_id,
                        investor_id: investor_id,
                        ico_id: ico_id,
                        amount: totalAmount,
                        status: "Paid"
                    })

                    return res.status(200).json({
                        code: 200,
                        message: "new investor added",
                        Txn: transaction.txn_id,
                        error: false
                    })

                }else if(flag_investor === 1){
                    // const updateIco = await Ico.updateOne({
                    //     id :ico_id
                    // },{
                    //     sold_ico: sold_ico + qty,
                    //     // ifIco[0].investors[k].qty: ifIco[0].investors[k].qty+qty
                    // })
                    console.log('inside else if');                    
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

        return res.send('yo')

    }catch(error){
        console.log(error);
        res.status(500).json({
            code: 500,
            error: true
        })
    }
}

module.exports = {buyIco};