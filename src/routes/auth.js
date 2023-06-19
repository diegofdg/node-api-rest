const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");

router.post("/", authController.login);
router.post("/new", authController.createUser);

module.exports = router;