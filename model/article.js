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

}