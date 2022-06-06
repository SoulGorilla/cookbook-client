import "./App.css";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Authors from "./Components/Authors.js";
import Cookbooks from "./Components/Cookbooks.js";

function App() {
  return (
    <div className="App">
      <Link to="/Authors"> Authors </Link>
      <Link to="/vinyls"> Cookbooks </Link>
      {/* <Main /> */}
      <Routes>
        <Route path="/Authors" element={<Authors />} />
        {/* <Route path="/cookbooks/" element={<Cookbooks />} /> */}
      </Routes>
    </div>
  );
}

export default App;
