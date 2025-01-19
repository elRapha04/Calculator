import React from "react";

const App = () => {
  return (
    <div>
      <h1 className="text-5xl">
        Beginner Programming Activity: Build a Creative Grid with React and
        Tailwind CSS!
      </h1>

      <div id="grid-container" className="size-3 border-4 border-black">
        <div className="group-div">
          <div className="inDIV"></div>
        </div>
        <div className="group-div">
          <div className="inDIV"></div>
        </div>
        <div className="group-div">
          <div className="inDIV"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
