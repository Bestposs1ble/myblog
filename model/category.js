module.exports= class Category extends require('./model'){

   

    static getList(){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,name FROM `category` ORDER BY `index` desc'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    static getCategoryById(id){
        return new Promise ((resolve,reject) =>{
            let sql = 'SELECT id,`name`,`index` FROM `category` WHERE id = ?'
            this.query(sql,id).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log(`获取指定编号的类目详情失败：${err.message}`)
                reject(err)
            })
        })
    }
    
}