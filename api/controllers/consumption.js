const consumptionModel = require("../models/consumption");

exports.create_consumption = async function (req, res) {
  console.log("req", req);
  const c = req.split(':')[2];
  const y = c.split('}')[0];
  console.log("y",y);
  try {
    const consumption = await consumptionModel.create({data:y,write:'true'});
    res.status(201).send(consumption);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
