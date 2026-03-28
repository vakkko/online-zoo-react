import React from "react";

import ArticleAndArrows from "./ArticleAndArrows/ArticleAndArrows";

import Carousel from "./Carousel/Carousel";

import "./PetsCarousel.scss";

const PetsCarousel: React.FC = () => {
  return (
    <div className="pets-carousel-container">
      <ArticleAndArrows />
      <Carousel />
    </div>
  );
};

export default PetsCarousel;
