const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/:userId", userController.getUser);
router.post("/new", userController.createUser);

module.exports = router;