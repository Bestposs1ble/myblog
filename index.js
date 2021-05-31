
const express = require('express')

const app = express()


app.set('view engine','html')
app.set('views',`${__dirname}/views`)
app.engine('html',require('ejs').renderFile)



app.use(express.static('static'))

//post请求处理
app.use(express.urlencoded({extended:true}))


//调用首页子应用
app.use(/\/(index)?/,require('./router/index'))
//调用文章子应用
app.use('/article',require('./router/article'))
//调用搜索子应用
app.use('/search',require('./router/search'))
//调用登入子应用
app.use('/login',require('./router/login'))

app.listen(3000)