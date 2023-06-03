const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const sensorRoute = require("./routes/sensorRoute");
const consumptionRoutes = require("./routes/consumptionRoutes");

app.use(cors());
app.use(express.json());
app.use("/", userRoute);
app.use("/", sensorRoute);
app.use("/", consumptionRoutes);

mongoose
  .connect(
    "mongodb+srv://eya:eya@cluster0.7y81eeq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.listen(port, () => {
  console.log(`Your Server listening on port ${port}`);
});
