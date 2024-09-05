import React from "react";
import Home from "../pages/Home";
import Category from "../pages/Category";
import AnimePage from "../pages/AnimePage"; 
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/anime/:animeId" element={<AnimePage />} />{" "}
    </Routes>
  );
};

export default Routers;
