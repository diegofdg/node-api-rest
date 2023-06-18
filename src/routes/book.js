const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
const { jwtValidMDW } = require("../middleware/auth-mdw");

router.get("/", bookController.getBooks);
router.post("/", jwtValidMDW, bookController.createBook);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", jwtValidMDW, bookController.updateBook);  
router.delete("/:bookId", jwtValidMDW, bookController.deleteBook);  

module.exports = router;