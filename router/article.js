const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')


const articleApp = express()

articleApp.use(category.getList)


articleApp.get('/list/:id', [article.getListByCategoryId, category.getList, category.getCategoryById],(req,res)=>{
    let{articles, categories, category } = req
    res.render('list',{articles:articles, categories:categories, category:category})
})


articleApp.get('/:id',[article.getArticleById,article.getTabs,article.getPrev,article.getNext],(req,res)=>{
    let {categories,article,tabs,prev,next} = req
    res.render('article',{categories:categories, article:article ,tabs:tabs, prev:prev, next:next})
})

module.exports = articleApp