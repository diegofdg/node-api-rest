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
    console.log("Es admin");
    return { name, token }
  } else {
    const name = user.name;
    const token = jwt.sign({ name, role: "User" }, SERVER_SECRET, { expiresIn: "1m" });
    console.log("No es admin");
    return { name, token }
  }
};

module.exports = { login };