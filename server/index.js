/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require('koa')
const Router = require('koa-router')
const API_LIST = require('./mock/index')

const router = new Router()
const app = new Koa()

const getRes = fn => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn())
    }, 1000)
  })
}

API_LIST.forEach(item => {
  const { url, method } = item
  router[method](url, async ctx => {
    const res = await getRes(item.response)
    ctx.body = res
  })
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
