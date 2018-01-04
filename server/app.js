const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router')

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3006, () => {
    console.log('Server open at port 3006')
})