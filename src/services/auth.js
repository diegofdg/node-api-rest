const { authProvider } = require("../providers");
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middleware/auth-mdw");

const login = async (user) => {
  const loginUser = await authProvider.login(user);

  if (!loginUser) {
    return null;
  } else if (user.admin == 1){
    const name = user.name;
    const token = jwt.sign({ name, role: "Admin" }, SERVER_SECRET, {});
    return { name, token }
  } else {
    const name = user.name;
    const token = jwt.sign({ name, role: "User" }, SERVER_SECRET, { expiresIn: "1m" });
    return { name, token }
  }
};

const checkAdminUser = async () => {
  return await authProvider.checkAdminUser();
};

const createAdminUser = async () => {
  return await authProvider.createAdminUser();
};

module.exports = { login, checkAdminUser, createAdminUser };