const { Model } = require("sequelize/types")

var config={
    database: 'geelong', // 使用哪个数据库
    username: 'geelong', // 用户名
    password: '{password}', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
}

module.exports = config;