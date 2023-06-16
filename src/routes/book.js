const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
const { jwtValidMDW } = require("../middleware/auth-mdw");

router.get("/", bookController.getBooks);
router.post("/", jwtValidMDW, bookController.createBook);

module.exports = router;