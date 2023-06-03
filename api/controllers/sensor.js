const sensorModel = require("../models/sensor");

exports.create_sensor = async function (req, res) {
  const { location, consumption, user } = req.body;

  try {
    const sensor = await sensorModel.create({
      location,
      consumption,
      user,
    });
    res.status(201).send(sensor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.fetch_sensor = async function (req, res) {
  const id = req.params.id;
  try {
    let sensor = await sensorModel.findById(id);
    return res.send(200, sensor || "sensor inexist");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.fetch_all_sensor = async function (req, res) {
  try {
    let sensors = await sensorModel.find({}).populate({
      path: "user",
    });
    return res.send(200, sensors || "sensor inexist");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.delete_sensor = async function (req, res) {
  const id = req.params.id;
  try {
    const sensor = await sensorModel.findByIdAndDelete(id);
    res.send(200, "sensor deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.update_sensor = async function (req, res) {
  const id = req.params.id;
  //   const { password } = req.body;
  let newPassword;
  //   if (password) {
  //     const salt = await bcrypt.genSalt(10);
  //     newPassword = await bcrypt.hash(password, salt);
  //   }

  try {
    const updatedsensor = await sensorModel.findByIdAndUpdate(
      id,
      { $set: { ...req.body, password: newPassword } },
      { new: true }
    );

    res.status(200).send(updatedsensor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.add_Cons_sensor = async function (req, res) {
  const id = req.params.id;
  //   const { password } = req.body;
  let newPassword;
  //   if (password) {
  //     const salt = await bcrypt.genSalt(10);
  //     newPassword = await bcrypt.hash(password, salt);
  //   }

  try {
    const updatedsensor = await sensorModel.findByIdAndUpdate(
      id,
      { $set: { ...req.body, password: newPassword } },
      { new: true }
    );

    res.status(200).send(updatedsensor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
