module.exports= class PV extends require('./model'){

   

    static getTotal() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT SUM(hits) AS total FROM pv'
            this.query(sql).then(results => {
                resolve(results[0].total)
            }).catch(err => {
                console.log(`获取总访问量失败：${err.message}`)
                reject(err)
            })
        })
    }

}