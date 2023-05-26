const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login_user = async function (req, res) {
  const { email, password } = req.body;
  let token;

  try {
    let user = await userModel.findOne({ email: email }).exec();
    if (!user) throw new Error("credentials non valid");

    token = jwt.sign(
      {
        id: user.id,
        name: user.firstName + " " + user.lastName,
        email: user.email,
        phone: user.phone,
        country: user.country,
        addresslieu: user.addresslieu,
        picture: user.picture,
        isAdmin: user.isAdmin,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.status(201).send({ auth_token: token });
  } catch (error) {
    console.error(error);
    res.status(403).send(error);
  }
};
exports.create_user = async function (req, res) {
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    country,
    city,
    addresslieu,
    picture,
    isAdmin,
  } = req.body;

  try {
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password,
      phone,
      country,
      city,
      addresslieu,
      picture,
      isAdmin,
    });
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.fetch_user = async function (req, res) {
  const id = req.params.id;
  try {
    let user = await userModel.findById(id);
    return res.send(200, user || "User inexist");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.fetch_all_user = async function (req, res) {
  try {
    let users = await userModel.find({});
    return res.send(200, users || "User inexist");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.delete_user = async function (req, res) {
  const id = req.params.id;
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.send(200, "user deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.update_user = async function (req, res) {
  const id = req.params.id;
  //   const { password } = req.body;
  let newPassword;
  //   if (password) {
  //     const salt = await bcrypt.genSalt(10);
  //     newPassword = await bcrypt.hash(password, salt);
  //   }

  try {
    const updateduser = await userModel.findByIdAndUpdate(
      id,
      { $set: { ...req.body, password: newPassword } },
      { new: true }
    );

    res.status(200).send(updateduser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
