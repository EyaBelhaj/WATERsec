const consumptionModel = require("../models/consumption");

exports.create_consumption = async function (req, res) {
  console.log("req", req);
  const c = req.split(":")[2];
  const data = c.split("}")[0];
  const write = "true";

  console.log("y", y);
  try {
    const consumption = await consumptionModel.create({ write, data });
    console.log(consumption);
  } catch (error) {
    console.error(error);
  }
};
