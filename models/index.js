const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.demo = require("./demo.model.js")(sequelize, Sequelize);

module.exports = db;