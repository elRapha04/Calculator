const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("shesh");
});

app.listen(PORT);

console.log(`App is running in port ${PORT}`);
