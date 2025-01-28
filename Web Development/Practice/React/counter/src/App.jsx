import { useState } from "react";
import React from "react";

const App = () => {
  let [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }
  
  function reset(){
    setCount(0);
  }
  
  function decrement(){
    setCount(count - 1);
  }

  return (
    <div className="w-full h-screen bg-zinc-700 flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold font-mono">{count}</h1>

      <div className="w-3/4 flex justify-evenly">
        <button 
        onClick={decrement}
        className="bg-red-500 border-2 p-4 rounded-2xl cursor-pointer font-bold hover:bg-white active:scale-95">
          DECREASE
        </button>
        <button 
        onClick={reset}
        className="bg-blue-500 border-2 p-4 rounded-2xl cursor-pointer font-bold hover:bg-white active:scale-95">
          RESET
        </button>
        <button 
        onClick={increment}
        className="bg-green-500 border-2 p-4 rounded-2xl cursor-pointer font-bold hover:bg-white active:scale-95">
          INCREASE
        </button>
      </div>
    </div>
  );
};

export default App;
