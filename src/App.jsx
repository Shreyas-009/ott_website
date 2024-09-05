import React from "react";
import Routers from "./routes/Routers";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-full bg-black text-white">
      <NavBar />
      <Routers />
    </div>
  );
};

export default App;
