import React from "react";

import Articles from "./Articles/Articles";

import "./MainContent.scss";
import PetsCarousel from "./PetsCarousel/PetsCarousel";

const MainContent: React.FC = () => {
  return (
    <main>
      <Articles />
      <PetsCarousel />
    </main>
  );
};

export default MainContent;
