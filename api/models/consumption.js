const mongoose = require("mongoose");
const { Schema } = mongoose;

const consumptionSchema = new mongoose.Schema(
  {
    position: String,
    data: String,
  },
  {
    timestamps: true,
  }
);
const consumption = mongoose.model("consumption", consumptionSchema);
module.exports = consumption;
