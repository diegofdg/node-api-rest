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

module.exports = { login };