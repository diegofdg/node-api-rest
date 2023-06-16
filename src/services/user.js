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

module.exports = { getUser, createUser };