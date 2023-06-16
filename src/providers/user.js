const { Op } = require("sequelize");
const { User } = require("../models");

const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId, { include: { all: true } });
    return user;
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};

const validateUser = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        name: options.name,
        password: options.password,
      },
    });
    if (user.length !== 0) {
      return user;
    }
    return false;
  } catch (err) {
    console.error("Error when validating User", err);
    return false;
  }
};


module.exports = { getUser, createUser, validateUser };