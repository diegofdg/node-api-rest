const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");
const { jwtValidMDW } = require("../middleware/auth-mdw");

router.get("/", libraryController.getLibraries);
router.post("/", jwtValidMDW, libraryController.createLibrary);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", jwtValidMDW, libraryController.updateLibrary);  
router.delete("/:libraryId", jwtValidMDW, libraryController.deleteLibrary);  

module.exports = router;