const mongoose = require("mongoose");
const { Schema } = mongoose;

const sensorSchema = new mongoose.Schema(
  {
    location: String,
    consumption: String,
    user: { type: Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);
const sensor = mongoose.model("sensor", sensorSchema);
module.exports = sensor;
