//首页相关路由


const express = require('express')

const indexApp = express()


indexApp.get('/',(req,res)=>{
    res.render('index')
})

module.exports = indexApp