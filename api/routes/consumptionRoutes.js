const express = require("express");
const consumption = require("../controllers/consumption");
const router = express.Router();

router.post("/consumption_create", consumption.create_consumption);
router.get("/fetch_all_consumption", consumption.fetch_all_consumption);

module.exports = router;
