module.exports = class User extends require('./model'){
    static login(username,password){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,username FROM `user` WHERE username = ? AND password = ?'
            this.query(sql,[username,password]).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log('登入失败：'+err.message)
                reject(err)
            })
        })
    }

    static lastLoginTime(){
        return new Promise((resolve,reject)=>{
            let sql = "SELECT `time` FROM `log` WHERE handle = '登录' ORDER BY `time` DESC LIMIT 1"
            this.query(sql).then(results=>{
                resolve(results[0].time)
            }).catch(err=>{
                console.log('登入失败：'+err.message)
                reject(err)
            })
        })
    }
}
