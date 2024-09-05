import React from "react";
import Routers from "./routes/Routers";
import NaveBar from "./components/Navebar";

const App = () => {
  return (
    <div className="w-full bg-black text-white">
      <NaveBar />
      <Routers />
    </div>
  );
};

export default App;
