const express = require("express");
const app = express();
const http = require("http").Server(app);
http.listen(3000, function () {
    console.log("Server is running on port 3000");
  });

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/webDevelopment1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const port = 3000;
