const express = require("express");
const { bookController } = require("../controllers");
const { validateAuthMDW } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", validateAuthMDW, bookController.createBook);

router.get("/", bookController.getBooksByCriteria);
router.put("/update/:id", validateAuthMDW, bookController.updateBookById);
router.delete("/delete/:id", validateAuthMDW, bookController.deleteBookById);

module.exports = router;
