const Router = require('koa-router')
const router = new Router()

const {HotBook} = require('@models/hot-book')

router.get('/v1/book/hot_list', async (ctx, next) => {
    
    const books = await HotBook.getAll()
    ctx.body = {
       books
    }
})

// 图书基础数据 服务
// 旧岛 API/项目
// 公用性 API 公开

// book 数据库表
// 业务 图书业务数据 

// node.js 中间层
// 微服务
// 雏形

module.exports = router