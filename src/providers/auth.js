const { User } = require("../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};

const login = async (user) => {
  try {
    const loginUser = await User.findOne({
      where: {
        name: user.name,
        password: user.password
      }});
    return loginUser;
  } catch (err) {
    console.error("Error when fetching Book", err);
    throw err;
  }
};

module.exports = { createUser, login };