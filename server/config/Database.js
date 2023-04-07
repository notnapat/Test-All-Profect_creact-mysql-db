// const Sequelize = require("sequelize");
// // const mysql2 = require("mysql2");

// const db = new Sequelize("shop_with_figma", "root", "", {
//     host: "localhost",
//     dialect: "mysql",
//     timezone: "+07:00",
//     // dialectModule: mysql2
// });

// module.exports = db;

const Sequelize = require("sequelize");
// const mysql2 = require("mysql2");

const db = new Sequelize("shop_with_figma", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    timezone: "+07:00",
    // dialectModule: mysql2
});

module.exports = db;