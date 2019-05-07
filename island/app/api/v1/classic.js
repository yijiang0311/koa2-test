const Router = require('koa-router')
const router = new Router()

const {PositiveIntegerValidator} = require('../../validators/validator')

// abc
router.post('/v1/:id/classic/latest', async (ctx, next) => {
    // User
    // 2部分 通用型 针对小程序 
    // 账号 密码 附属信息：昵称、email 手机

    // 注册 登录 
    // Sequelize 连接数据库 配置一些数据库的参数

    const path = ctx.params
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    require('../../models/user')
    const v = await new PositiveIntegerValidator().validate(ctx)
    const id = v.get('body.b.e.x',parsed=false)
    ctx.body = 'success'
})

module.exports = router