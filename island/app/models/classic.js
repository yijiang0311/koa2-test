const {sequelize} = require('../../core/db')
const {
    Sequelize,
    Model
} = require('sequelize')

// 静态资源 图片 消耗流量
// 1 网站目录
// 2 静态资源服务器 微服务 带宽足够
// 3 云服务 OSS 贵 ECS、RDS、OSS， CDN
// 4 github gitpage 300mb

// js、css、html
// vue\react 前端单页面 nuxt ssr
// ajax
// 服务端模板渲染 PHP、Java
// vue react 网站，SEO To C
// CMS 内部SEO
// WebApp H5


const classicFields = {
    image: {
        type:Sequelize.STRING,
    },
    content: Sequelize.STRING,
    pubdate: Sequelize.DATEONLY,
    fav_nums: {
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    title: Sequelize.STRING,
    type: Sequelize.TINYINT,
}

class Movie extends Model {
}

Movie.init(classicFields, {
    sequelize,
    tableName: 'movie'
})

class Sentence extends Model {
}

Sentence.init(classicFields, {
    sequelize,
    tableName: 'sentence'
})


class Music extends Model {
}

const musicFields = Object.assign({
    url:Sequelize.STRING
}, classicFields)

Music.init(musicFields,{
    sequelize,
    tableName: 'music'
})


module.exports = {
    Movie,
    Sentence,
    Music
}