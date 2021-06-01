
const Pv = require('../model/pv')
module.exports = {
   
    getTotal:(req,res,next)=>{
        Pv.getTotal().then(results=>{
            req.pvTotal = results
            next()
        }).catch(err=>{
            next(err)
        })
    }
}