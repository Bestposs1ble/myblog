
const express = require('express')
const session = require('cookie-session')

const app = express()


app.set('view engine','html')
app.set('views',`${__dirname}/views`)
app.engine('html',require('ejs').renderFile)



app.use(express.static('static'))

//post请求处理
app.use(express.urlencoded({extended:true}))
//session配置
app.use(session({
    keys:['secret'],
    maxAge:1000 * 60 * 30
}))


//调用首页子应用
app.use(/\/(index)?/,require('./router/index'))
//调用文章子应用
app.use('/article',require('./router/article'))
//调用搜索子应用
app.use('/search',require('./router/search'))
//调用登入子应用
app.use('/login',require('./router/login'))


//进入后台权限验证
app.use('/admin/?*',require('./middleware/auth').allowToAdmin)
//调用后台首页
app.use(/\/admin\/(index)?/,require('./router/admin/index'))
//调用后台文章管理
app.use('/admin/article',require('./router/admin/article'))
//调用后台类目管理
app.use('/admin/category',require('./router/admin/category'))
//调用后台日志管理
app.use('/admin/log',require('./router/admin/log'))
//调用后台账户管理
app.use('/admin/account',require('./router/admin/account'))


//退出
app.get('/user/logout',(req,res) => {
    req.session.user = null
    res.render('login',{msg:'退出成功'})

})

app.listen(3000)