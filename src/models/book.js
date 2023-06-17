const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  library: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1
  }
});

module.exports = Book;