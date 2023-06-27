const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middleware/auth-mdw");
const { User } = require("../models");

const login = async (user) => {
  try {
    const loginUser = await User.findOne({
      where: {
        name: user.name,
        password: user.password
      }});

    if (!loginUser) {
    return null;
    } else if (loginUser.admin == true){
      const name = loginUser.name;
      const token = jwt.sign({ name, role: "Admin" }, SERVER_SECRET, {});
      return { name, token }
    } else {
      const name = loginUser.name;
      const token = jwt.sign({ name, role: "User" }, SERVER_SECRET, { expiresIn: "1m" });
      return { name, token }
    }
  } catch (err) {
    console.error("Error when fetching admin user", err);
    throw err;
  }
};

const checkAdminUser = async () => {
  try {
    const adminUser = await User.findOne({
      where: {
        name: "admin"
      }
    });
    return adminUser;
  } catch (err) {
    console.error("Error when checking admin user", err);
    throw err;
  }
};

const createAdminUser = async () => {
  try {
    await User.create({
      name: "admin",
      password: "admin",
      admin: 1
    });
  } catch (err) {
    console.error("Error when creating admin user", err);
    throw err;
  }
};

module.exports = { login, checkAdminUser, createAdminUser };