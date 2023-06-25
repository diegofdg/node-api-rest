const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to sqlite!");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("connection error", error);
  }
};

module.exports = { sequelize, initializeDB };