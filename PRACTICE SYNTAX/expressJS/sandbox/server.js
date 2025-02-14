const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT;



app.listen(PORT);

console.log(`App is running in port http://localhost:${PORT}`);
