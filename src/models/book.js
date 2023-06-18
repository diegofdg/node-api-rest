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
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'isbn cannot be empty.'
			},
			isNumeric: {
				msg: 'isbn contains invalid characters (numbers only!)'
			},
		}
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'titulo cannot be empty.'
			}
		}
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'autor cannot be empty.'
			}
		}
  },
  year: {
    type: DataTypes.STRING(4),
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'year cannot be empty.'
			},
      len: [1,4]
		}
  },
  library: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'library cannot be empty.'
			},
			isNumeric: {
				msg: 'library contains invalid characters (numbers only!)'
			}
		}
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1
  }
});

module.exports = Book;