const express = require("express");
const sensor = require("../controllers/sensor");
const router = express.Router();

router.post("/sensor_create", sensor.create_sensor);
router.get("/fetch_sensor", sensor.fetch_sensor);
router.get("/fetch_all_sensor", sensor.fetch_all_sensor);
router.delete("/delete_sensor/:id", sensor.delete_sensor);
router.put("/update_sensor/:id", sensor.update_sensor);

module.exports = router;
