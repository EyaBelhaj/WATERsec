const consumptionModel = require("../models/consumption");

exports.create_consumption = async function (req, res) {
  try {
    const consumption = await consumptionModel.create(req.body);
    res.status(201).send(consumption);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
