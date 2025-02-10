import { createServer } from 'http';
import fs from 'fs';
import prompt from 'prompt-sync';
import dotenv from 'dotenv';
dotenv.config();

// ACTIONS
const actions = {
  1: "View tasks",
  2: "Add a task",
  3: "Tick a task",
  4: "Delete a task"
};

for (const [key, value] in Object.entries(actions)){
  console.log(`[${key}] ${value}`);
}

// CHOOSE ACTION
// function action(){
  
// };
// VIEW ALL TODOS

// ADD A TODO
// DELETE A TODO
// MARK AS DONE

// SERVER
const PORT = process.env.PORT;
const server = createServer((req, res) => {
  console.log("");
  
  fs.readFile("./todos.json", (err,  data) => {
    res.writeHead(200, {"content-type": "text/plain"});
    if (err){
      res.end(`Error: ${err}`);
    }
    
    console.log(data);      
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Todo app is running in port: ${PORT}`);
});

