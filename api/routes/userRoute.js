const express = require("express");
const user = require("../controllers/user");
const router = express.Router();

router.post("/user_create", user.create_user);
router.get("/fetch_user", user.fetch_user);
router.post("/login_user", user.login_user);
router.get("/fetch_all_user", user.fetch_all_user);
router.delete("/delete_user/:id", user.delete_user);
router.put("/update_user/:id", user.update_user);

module.exports = router;
