const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category') 


const searchApp = express()


searchApp.get('/',[article.getListBykeywrod,category.getList],(req,res)=>{
    let {articles,categories,} = req
    res.render('search',{articles:articles, categories:categories, keyword:req.query.keyword})
})

module.exports = searchApp