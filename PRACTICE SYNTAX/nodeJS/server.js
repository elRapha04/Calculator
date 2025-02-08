import http from "http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Herro warudo");
});

server.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
