//首页相关路由


const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')

const indexApp = express()


indexApp.get('/',[article.getHot, article.getList,category.getList],(req,res)=>{
    let {hots,articles,categories} = req
    res.render('index',{hots: hots, articles: articles, categories:categories })
})

module.exports = indexApp