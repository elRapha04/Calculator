import { createServer } from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const users = [
  {id: 1, name: "User ONE"},
  {id: 2, name: "User TWO"},
  {id: 3, name: "User THREE"}
];

const server = createServer((req, res) => {
  res.writeHead(200, {"content-type": "text/html"});

  if (req.url === '/api/users' && req.method === 'GET'){
    res.write(JSON.stringify(users));
    res.end("sheesh");
  }
  else {
    res.write(JSON.stringify({ message: "Route NOT FOUND" }))
  }
});

server.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
  
});