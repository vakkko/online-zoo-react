import React from "react";

import ArticleAndArrows from "./ArticleAndArrows/ArticleAndArrows";

import "./PetsCarousel.scss";

const PetsCarousel: React.FC = () => {
  return (
    <div className="pets-carousel-container">
      <ArticleAndArrows />
    </div>
  );
};

export default PetsCarousel;
