import { createServer } from 'http';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

// SERVER
const server = createServer((req, res) => {
  fs.readFile("./todos.json", (err,  data) => {
    res.writeHead(200, {"content-type": "text/html"});
    if (err){
      res.writeHead(404, {"content-type": "text/plain"});
      res.end(`Error: ${err}`);
    }
    
    console.log(data);      
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Todo app is running in port: ${PORT}`);
});

