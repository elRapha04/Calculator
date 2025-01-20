import "./App.css";

function App() {
  return (
    <>
      <div className="border-black border-2 w-full h-screen flex flex-col justify-center items-center">
        <h1 className="">
          Beginner Programming Activity: Build a Creative Grid with React and
          Tailwind CSS!
        </h1>

        {/* inDIVs inherit grid-container's height */}
        <div id="grid-container" className="size-4/5 border-2 border-red-600 rounded-md flex flex-col space-y-2">
          <div id="group-div" className="border-2 border-yellow-300 flex h-full">
            <div id="inDiv" className="w-full border-2 border-green-500 flex justify-center items-center">
              Row 1
            </div>
          </div>

          <div id="group-div" className="border-2 border-yellow-300 flex size-full space-x-2">
            <div id="inDiv" className="w-full border-2 border-green-500 flex justify-center items-center">
              Row 2
            </div>
            <div id="inDiv" className="w-full border-2 border-green-500 flex justify-center items-center">
              Row 2
            </div>
          </div>

          <div id="group-div" className="border-2 border-yellow-300 flex size-full space-x-2">
            <div id="inDiv" className="w-full border-2 border-green-500 flex justify-center items-center">
              Row3
            </div>
            <div id="inDiv" className="w-full border-2 border-green-500 flex justify-center items-center">
              Row3
            </div>
            <div id="inDiv" className="w-full border-2 border-green-500 flex justify-center items-center">
              Row3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
