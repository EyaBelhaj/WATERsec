const express = require("express");
const consumption = require("../controllers/consumption");
const router = express.Router();

router.post("/consumption_create", consumption.create_consumption);

module.exports = router;
