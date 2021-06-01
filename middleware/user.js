

const User = require('../model/user')


module.exports = {
    lastLoginTime: (req,res,next) => {
        User.lastLoginTime().then(results=>{
            req.lastLoginTime = results
            next()
        }).catch(err=>{
            next(err)
        })
    }


}