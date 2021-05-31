const express = require('express')
const User = require('../model/user')

const loginApp = express()


loginApp.get('/',(req,res)=>{
    res.render('login',{msg:''})
})

loginApp.post('/',(req,res,next)=>{
    let {username,password} = req.body
    User.login(username,password).then(result => {
        if(result){
            req.session.user = result
            res.redirect('/')
        }else{
            res.render('/login',{msg:'登入失败！用户名或者密码错误'})
        }
    }).catch(err => {
        next(err)
    })
})


module.exports = loginApp