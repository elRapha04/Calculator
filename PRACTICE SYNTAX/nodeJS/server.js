import http from "http";
import dotenv from "dotenv";
import url from 'url';
import fs from 'fs';
import path from 'path';
dotenv.config();

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const server = http.createServer((req, res) => {
  
  if (req.method === 'GET'){
    if (req.url === '/'){
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end();
    } 
    else if (req.url === '/about'){

    }
  }
  
  
});

server.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
