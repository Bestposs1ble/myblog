const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const auth = require('../middleware/auth')


const articleApp = express()

articleApp.use(category.getList,auth.getUser)


articleApp.get('/list/:id', [article.getListByCategoryId, category.getList, category.getCategoryById],(req,res)=>{
    let{articles, categories, category ,user} = req
    res.render('list',{articles:articles, categories:categories, category:category,user:user})
})


articleApp.get('/:id',[article.getArticleById,article.getTabs,article.getPrev,article.getNext],(req,res)=>{
    let {categories,article,tabs,prev,next,user} = req
    res.render('article',{categories:categories, article:article ,tabs:tabs, prev:prev, next:next,user:user})
})

module.exports = articleApp