const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { userService } = require("../services");

const { SERVER_SECRET } = require("../middleware/auth-mdw");

router.post("/", async (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
    const token = jwt.sign({ name, role: "Admin" }, SERVER_SECRET, {});
    console.log("Es admin");
    res.json({ token });
  } else {
    const userFound = await userService.validateUser(name, password);
    if (userFound) {
      const token = jwt.sign({ name, role: "User" }, SERVER_SECRET, {
        expiresIn: "1m",
      });
      console.log("No es admin");
      return res.json({ token });      
    }
    res.status(401).json({ error: "Invalid User" });
  }
});

module.exports = router;