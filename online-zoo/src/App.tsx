import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import About from "./pages/About/About";
import RootLayout from "./layout/RootLayout";

import "./styles/_global.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
