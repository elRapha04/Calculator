import "./App.css";

function App() {
  return (
    <>
      <div className="border-black border-2 h-screen flex flex-col items-center">
        <h1 className="">
          Beginner Programming Activity: Build a Creative Grid with React and
          Tailwind CSS!
        </h1>

        <div id="grid-container" className="size-4/5 border-2 border-black space-y-2">
          <div id="group-div" className="flex flex-row size-full">
            <div id="inDiv" className="w-full border border-black flex justify-center items-center">
              Row 1
            </div>
          </div>

          <div id="group-div" className="flex flex-row size-full space-x-2">
            <div id="inDiv" className="w-full border border-black flex justify-center items-center">
              Row 2
            </div>
            <div id="inDiv" className="w-full border border-black flex justify-center items-center">
              Row 2
            </div>
          </div>

          <div id="group-div" className="flex flex-row size-full space-x-2">
            <div id="inDiv" className="w-full border border-black flex justify-center items-center">
              Row3
            </div>
            <div id="inDiv" className="w-full border border-black flex justify-center items-center">
              Row3
            </div>
            <div id="inDiv" className="w-full border border-black flex justify-center items-center">
              Row3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
