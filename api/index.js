const express = require("express");
const mongoose = require("mongoose");
const mqtt = require('mqtt');
const app = express();
const port = 8000;
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const sensorRoute = require("./routes/sensorRoute");
const consumptionRoutes = require("./routes/consumptionRoutes");

const mqttBroker = 'mqtt://192.168.23.129:1883';
const mqttTopic = "mytopic"; 

const mqttClient = mqtt.connect(mqttBroker);
// Gérer l'événement de connexion au broker MQTT
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  // S'abonner au topic MQTT
  mqttClient.subscribe(mqttTopic);
});
mqttClient.on('error', (error) => {
  console.error('connection failed', error)
})
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
