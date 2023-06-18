const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.post("/new", userController.createUser);

module.exports = router;