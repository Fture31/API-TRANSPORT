// const express = require("express");
// const router = express.Router();
// const enginController = require("../Controller/enginsController");
// // const authMiddleware = require("../middleware/authMiddleware");
// const authenticateToken = require("../middleware/authMiddleware");
// router.get("/",authenticateToken,enginController.getAll);
// router.get("/:id",authenticateToken,enginController.getOne);
// router.post("/", authenticateToken, enginController.create);
// router.put("/:id", authenticateToken, enginController.update);
// router.delete("/:id", authenticateToken, enginController.delete);

// module.exports = router;
const express = require("express");
const router = express.Router();
const enginController = require("../Controller/enginsController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/", authenticateToken, enginController.getAll);  // Cette route est protégée
router.get("/:id", authenticateToken, enginController.getOne);  // Cette route est protégée
router.post("/", authenticateToken, enginController.create);  // Cette route est protégée
router.put("/:id", authenticateToken, enginController.update);  // Cette route est protégée
router.delete("/:id", authenticateToken, enginController.delete);  // Cette route est protégée

module.exports = router;
