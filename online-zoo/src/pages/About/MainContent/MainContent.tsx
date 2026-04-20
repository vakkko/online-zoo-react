import React from "react";

import Articles from "./Articles/Articles";
import PetsCarousel from "./PetsCarousel/PetsCarousel";
import PayAndFeed from "./PayAndFeed/PayAndFeed";
import Feedbacks from "./Feedbacks/Feedbacks";

import "./MainContent.scss";

const MainContent: React.FC = () => {
  return (
    <main>
      <Articles />
      <PetsCarousel />
      <PayAndFeed />
      <Feedbacks />
    </main>
  );
};

export default MainContent;
