const Sequelize = require("sequelize");
const config = require("./config");

// initialize database connection

const sequelize = new Sequelize(
    config.db.name, // database name
    config.db.user, // user
    config.db.password, // password
    {
        host: config.db.host,
        dialect: config.db.dialect,
        operatorsAliases: false,
        timezone: "+00:00" // set time zone to UTC
    }
);

module.exports = sequelize;