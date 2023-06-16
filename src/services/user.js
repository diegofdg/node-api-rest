const { userProvider } = require("../providers");

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    // Lógica de negocio
    console.log(user.firstName);
  }
  return user;
};

module.exports = { getUser };