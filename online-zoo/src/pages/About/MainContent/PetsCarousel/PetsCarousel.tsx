import React from "react";

import ArticleAndArrows from "./ArticleAndArrows/ArticleAndArrows";

import "./PetsCarousel.scss";
import Carousel from "./Carousel/Carousel";

const PetsCarousel: React.FC = () => {
  return (
    <div className="pets-carousel-container">
      <ArticleAndArrows />
      <Carousel />
    </div>
  );
};

export default PetsCarousel;
