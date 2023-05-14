const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    country: String,
    city: String,
    addresslieu: String,
    picture: String,
    isAdmin: Boolean,
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userSchema);
module.exports = user;
