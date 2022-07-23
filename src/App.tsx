import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:uuid" element={<Project />} />
      </Routes>
    </>
  )
}

export default App;