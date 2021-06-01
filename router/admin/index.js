const express = require('express')

const user = require('../../middleware/user')



const indexApp = express()

indexApp.get('/',user.lastLoginTime,(req,res)=>{
    let {user,lastLoginTime} = req
    res.render('admin/index',{user:user,lastLoginTime:lastLoginTime})
})

module.exports = indexApp