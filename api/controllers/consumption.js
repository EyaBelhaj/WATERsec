const consumptionModel = require("../models/consumption");

exports.create_consumption = async function (req, res) {
  console.log("req", req);
  try {
    const consumption = await consumptionModel.create(req.body);
    res.status(201).send(consumption);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
