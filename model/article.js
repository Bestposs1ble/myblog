module.exports= class Article extends require('./model'){

    static getHot(num){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title,content,`time` FROM article WHERE hot = 1 LIMIT ?'
            this.query(sql,num).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取热门文章推荐失败：${err.message}`)
                reject(err)
            })
        })
    }


    static getList(){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title,content,`time` FROM article ORDER BY time DESC'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }


    static getListByCategoryId(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title,content,`time` FROM `article` WHERE category_id = ? ORDER BY time DESC'
            this.query(sql,id).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取指定类目下的文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }


    static getListBykeywrod(keyword){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title,content,`time`  FROM `article` WHERE title LIKE ? ORDER BY time DESC'
            this.query(sql,`%${keyword}%`).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取指定类目下的文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    static getArticleById(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT a.id,a.title,a.content,a.time,a.hits,a.category_id,c.`name` FROM `article` a,category c WHERE a.id = ? AND a.category_id = c.id'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log(`获取文章详情失败：${err.message}`)
                reject(err)
            })
        })

    }

    static getPrevArticle(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title FROM `article` WHERE id < ? ORDER BY id DESC LIMIT 1'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log(`上一篇文章失败：${err.message}`)
                reject(err)
            })
        })

    }

    static getNextArticle(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title FROM `article` WHERE id > ? ORDER BY id ASC LIMIT 1'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log(`下一篇文章失败：${err.message}`)
                reject(err)
            })
        })

    }

    static getCount(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT COUNT(1) AS count FROM `article`'
            this.query(sql).then(results=>{
                resolve(results[0].count)
            }).catch(err=>{
                console.log(`获取总博文数失败：${err.message}`)
                reject(err)
            })
        })

    }

    static getPage(start, size){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,title,`thumbnail`,hot FROM `article` ORDER BY `time` DESC LIMIT ?,?'
            this.query(sql,[start,size]).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取指定页文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }
}