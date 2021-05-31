module.exports= class Tab extends require('./model'){

   

    static getListByArticleId(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,`name` FROM `tabs` WHERE article_id = ?'
            this.query(sql,id).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取指定文章的标签列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    
    
}