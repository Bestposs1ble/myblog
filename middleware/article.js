const Article = require('../model/article')
const Tab = require('../model/tab')

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
    },
    getListBykeywrod: (req,res,next)=>{
        let keyword = req.query.keyword
        Article.getListBykeywrod(keyword).then(results=>{
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    getArticleById: (req,res,next) =>{
        let id = req.params.id 
        Article.getArticleById(id).then(result =>{
            req.article = result
            next()
        }).catch(err=>{
            next(err)
        })
    },
    getTabs:(req,res,next)=>{
        let id = req.params.id 
        Tab.getListByArticleId(id).then(results =>{
            req.tabs = results
            next()
        }).catch(err=>{
            next(err)
        })
    },
    getPrev:(req,res,next)=>{
        let id = req.params.id 
        Article.getPrevArticle(id).then(results =>{
            req.prev = results
            next()
        }).catch(err=>{
            next(err)
        })
    },
    getNext:(req,res,next)=>{
        let id = req.params.id 
        Article.getNextArticle(id).then(results =>{
            req.next = results
            next()
        }).catch(err=>{
            next(err)
        })
    },
    getCount:(req,res,next)=>{
        Article.getCount().then(results =>{
            req.articleCount = results
            next()
        }).catch(err=>{
            next(err)
        })
    },
    getPage: (req,res,next)=>{
        Article.getPage().then(results=>{
            req.pageList = results
            next()
        }).catch(err => {
            next(err)
        })
    }

}