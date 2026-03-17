import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import About from "./pages/About/About";

import "./styles/_global.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
