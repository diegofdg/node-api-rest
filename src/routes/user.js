const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/:userId", userController.getUser);

module.exports = router;