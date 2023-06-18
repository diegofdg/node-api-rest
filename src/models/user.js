const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const User = sequelize.define("Users", {
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
			notEmpty:{
				msg: 'password cannot be empty.'
			}
		}
  }
});

module.exports = User;