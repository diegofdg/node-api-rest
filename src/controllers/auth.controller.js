const { authService } = require("../services");
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middleware/auth-mdw");

const createUser = async (req, res) => {
  try {
    const newUser = await authService.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ action: "createUser", error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);
    if (!user) {
      res.status(404).json({ action: "login", error: "User Not Found" });
    } else if (user.admin == 1){
      const name = user.name;
      const token = jwt.sign({ name, role: "Admin" }, SERVER_SECRET, {});
      console.log("Es admin");
      res.json({ name, token });
    } else {
      const name = user.name;
      const token = jwt.sign({ name, role: "User" }, SERVER_SECRET, { expiresIn: "1m" });
      console.log("No es admin");
      return res.json({ name, token });   
    }
  } catch (err) {
      res.status(500).json({ action: "login", error: err.message });
  }
};

module.exports = { createUser, login };