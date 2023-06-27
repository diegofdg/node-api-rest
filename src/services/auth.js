const { authProvider } = require("../providers");

const login = async (user) => {
  return await authProvider.login(user);
};

const checkAdminUser = async () => {
  return await authProvider.checkAdminUser();
};

const createAdminUser = async () => {
  return await authProvider.createAdminUser();
};

module.exports = { login, checkAdminUser, createAdminUser };