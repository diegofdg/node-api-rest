const { authProvider } = require("../providers");

const createUser = async (user) => {
  return await authProvider.createUser(user);
};

const login = async (user) => {
  return await authProvider.login(user);
};

module.exports = { createUser, login };