import "./App.css";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-bl from-indigo-500 via-teal-500 to-pink-500">
      <h1 className="font-sans font-medium italic text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
        Beginner Programming Activity: Build a Creative Grid with React and
        Tailwind CSS!
      </h1>

      <div
        id="grid-container"
        className="size-4/5 rounded-md flex flex-col space-y-2 text-black font-extrabold font-serif"
      >
        <div id="group-div" className="flex h-full">
          <div
            id="inDiv"
            className="size-full rounded-3xl border-2 bg-white/20 border-black flex justify-center items-center group transition-all duration-500 hover:border-green-500 hover:backdrop-blur hover:bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-8"
          >
            <p className="group-hover:custom-shadow text-4xl sm:text-5xl md:text-6xl lg:text-6xl group-hover:text-6xl md:group-hover:text-7xl group-hover:text-gray-200 transition-all duration-500">
              Row 1
            </p>
          </div>
        </div>

        <div
          id="group-div"
          className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row size-full sm:space-x-2"
        >
          <div
            id="inDiv"
            className="size-full rounded-3xl border-2 bg-white/20 border-black flex justify-center items-center group flex-[1] hover:flex-[2] transition-all duration-500 hover:border-green-500 hover:backdrop-blur hover:bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-8"
          >
            <p className="group-hover:custom-shadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl group-hover:text-5xl md:lg:group-hover:text-6xl lg:group-hover:text-7xl  group-hover:text-gray-200 transition-all duration-500">
              Row 2
            </p>
          </div>
          <div
            id="inDiv"
            className="size-full rounded-3xl border-2 bg-white/20 border-black flex justify-center items-center group flex-[1] hover:flex-[2] transition-all duration-500 hover:border-green-500 hover:backdrop-blur hover:bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-8"
          >
            <p className="group-hover:custom-shadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl group-hover:text-5xl md:lg:group-hover:text-6xl lg:group-hover:text-7xl  group-hover:text-gray-200 transition-all duration-500">
              Row 2
            </p>
          </div>
        </div>

        <div
          id="group-div"
          className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row size-full sm:space-x-2"
        >
          <div
            id="inDiv"
            className="size-full rounded-3xl border-2 bg-white/20 border-black flex justify-center items-center transition-all duration-500 flex-[1] group hover:flex-[2] hover:border-green-500 hover:backdrop-blur hover:bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-8"
          >
            <p className="group-hover:custom-shadow text-2xl sm:text-3xl md:text-4xl lg:text-6xl group-hover:text-5xl group-hover:text-gray-200 lg:group-hover:text-7xl transition-all duration-500">
              Row 3
            </p>
          </div>
          <div
            id="inDiv"
            className="size-full rounded-3xl border-2 bg-white/20 border-black flex justify-center items-center transition-all duration-500 flex-[1] group hover:flex-[2] hover:border-green-500 hover:backdrop-blur hover:bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-8"
          >
            <p className="group-hover:custom-shadow text-2xl sm:text-3xl md:text-4xl lg:text-6xl group-hover:text-5xl group-hover:text-gray-200 lg:group-hover:text-7xl transition-all duration-500">
              Row 3
            </p>
          </div>
          <div
            id="inDiv"
            className="size-full rounded-3xl border-2 bg-white/20 border-black flex justify-center items-center transition-all duration-500 flex-[1] group hover:flex-[2] hover:border-green-500 hover:backdrop-blur hover:bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-8"
          >
            <p className="group-hover:custom-shadow text-2xl sm:text-3xl md:text-4xl lg:text-6xl group-hover:text-5xl group-hover:text-gray-200 lg:group-hover:text-7xl transition-all duration-500">
              Row 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
