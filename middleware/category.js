const Category = require('../model/category')

module.exports = {
 
    getList: (req,res,next)=>{
        Category.getList().then(results=>{
            req.categories = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    getCategoryById: (req,res,next)=>{
        let id = req.params.id
        Category.getCategoryById(id).then(results=>{
            req.category = results
            next()
        }).catch(err => {
            next(err)
        })
    }
}