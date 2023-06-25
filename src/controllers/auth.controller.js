const { authService } = require("../services");

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);
    if (!user) {
      res.status(404).json({ action: "login", error: "User Not Found" });
    } else {
      res.json(user);
    }
  } catch (err) {
      res.status(500).json({ action: "login", error: err.message });
  }
};

const checkAdminUser = async () => {
  try {
    const user = await authService.checkAdminUser();
    if (!user) {
      await authService.createAdminUser();
    } else {
      console.log("admin user already exists");
    }
  } catch (err) {
    console.log({ action: "getAdminUser", error: err.message });
  }
};

module.exports = { login, checkAdminUser };