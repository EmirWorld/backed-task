/*
* Require database config file
* */
const dbConfig = require('../config/db.config');

/*
* Require Sequelize
* */
const Sequelize = require("sequelize");

/*
* Create new model of sequelize
* */
const newSequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

/*
* Create database model
* */
const db = {};

/*
* Push sequelize and newSequelize to db model
* */
db.Sequelize = Sequelize;
db.newSequelize = newSequelize;

/*
* Push new users Model to db Model
* */
db.users = require("./user.model.js")(newSequelize,Sequelize);

/*
* Export db module
* */
module.exports = db;
