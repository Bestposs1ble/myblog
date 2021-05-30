//首页相关路由


const express = require('express')
const article = require('../middleware/article')

const indexApp = express()


indexApp.get('/',[article.getHot, article.getList],(req,res)=>{
    let {hots,articles} = req
    res.render('index',{hots: hots, articles: articles })
})

module.exports = indexApp