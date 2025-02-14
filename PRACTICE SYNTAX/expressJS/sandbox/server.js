const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('<h1>Landing Page</h1>')
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
});

app.listen(PORT, () => console.log(`App is running in port http://localhost:${PORT}`));


