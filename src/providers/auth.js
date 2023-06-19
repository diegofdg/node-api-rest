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

module.exports = { login };