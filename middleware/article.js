const Article = require('../model/article')

module.exports = {
    getHot: (req,res,next) => {
         Article.getHot(3).then(results=>{
            req.hots = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    getList: (req,res,next)=>{
        Article.getList().then(results=>{
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    getListByCategoryId: (req,res,next)=>{
        let id = req.params.id
        Article.getListByCategoryId(id).then(results=>{
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    }
}