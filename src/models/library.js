const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");

const Library = sequelize.define("Library", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'name cannot be empty.'
			}
		}
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'location cannot be empty.'
			}
		}
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'phone cannot be empty.'
			}
		}
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1
  }
});

Library.hasMany(Book,{foreignKey:'library'});
Book.belongsTo(Library,{foreignKey:'library'});

module.exports = Library;