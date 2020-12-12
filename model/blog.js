const sequelize = require('./utils/sequelize');
const { DataTypes } = require("sequelize");

var blog = sequelize.define('blog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING(100),
    address: DataTypes.STRING(100)
}, {

});

module.exports = blog;