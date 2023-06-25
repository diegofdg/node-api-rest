const { User } = require("../models");

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

const checkAdminUser = async () => {
  try {
    const adminUser = await User.findOne({
      where: {
        name: "admin"
      }
    });
    return adminUser;
  } catch (err) {
    console.error("Error when fetching Books", err);
    throw err;
  }
};

const createAdminUser = async () => {
  try {
    await User.create({
      name: "admin",
      password: "admin",
      admin: true
    });
  } catch (err) {
    console.error("Error when creating admin user", err);
    throw err;
  }
};

module.exports = { login, checkAdminUser, createAdminUser };