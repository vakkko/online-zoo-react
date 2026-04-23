import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import About from "./pages/About/About";
import RootLayout from "./layout/RootLayout";

import "./styles/_global.scss";
import Login from "./pages/Login/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
