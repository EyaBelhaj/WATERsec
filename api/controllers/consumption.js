const consumptionModel = require("../models/consumption");

exports.create_consumption = async function (req, res) {
  const c = req.split(":")[2];
  const data = c.split("}")[0];
  const write = "true";

  try {
    const consumption = await consumptionModel.create({ write, data });
    console.log(consumption);
  } catch (error) {
    console.error(error);
  }
};
exports.fetch_all_consumption = async function (req, res) {
  try {
    let consumptions = await consumptionModel.find({});
    return res.send(200, consumptions || "consumption inexist");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
