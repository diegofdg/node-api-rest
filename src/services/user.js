const { userProvider } = require("../providers");

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const validateUser = async (name, password) => {
  console.log(name,password)
  const userFound = await userProvider.validateUser({ name, password });
  return userFound;
};


module.exports = { createUser, validateUser };