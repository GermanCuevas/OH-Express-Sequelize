const Sequelize = require("sequelize");

module.exports = new Sequelize("test-oh", null, null, {
    dialect: "postgres",
    host: "localhost",
    logging: false
});
