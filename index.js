const { static } = require('express')
const express = require('express')

const app = express()


app.set('view engine','html')
app.set('views',`${__dirname}/views`)
app.engine('html',require('ejs').renderFile)



app.use(express.static('static'))


//调用首页子应用
app.use(/\/(index)?/,require('./router/index'))

app.listen(3000)