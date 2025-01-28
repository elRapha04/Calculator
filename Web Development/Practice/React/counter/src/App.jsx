import { useState } from "react";
import React from "react";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-zinc-700 flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold font-mono">{count}</h1>

    </div>
  );
};

export default App;
