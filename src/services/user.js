const { userProvider } = require("../providers");

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    console.log(user.name);
  }
  return user;
};

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const validateUser = async (name, password) => {
  const userFound = await userProvider.validateUser({ name, password });
  return userFound;
};


module.exports = { getUser, createUser, validateUser };