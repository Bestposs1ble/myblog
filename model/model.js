const mysql = require('mysql')







module.exports = class Model{

    static conn = null

    static connection(){
        module.conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'hyc18770197709',
            database: 'blog'
        })
        Model.conn.connection(err =>{
            if(err) {
                console.log(`数据库链接失败:${err.message}`)
            }
        })

    }


    static end(){
        if(null != Model.conn){
            Model.conn.end()
        }

    }

    static query(sql,params = []) {
        return new Promise ((resolve, reject) => {
            this.connection()

            Model.conn.query(sql,params,(err,results)=> {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })


            this.end()
        })
    }

    
}