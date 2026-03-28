import React from "react";

import ArticleAndArrows from "./ArticleAndArrows/ArticleAndArrows";

import Carousel from "./Carousel/Carousel";

import "./PetsCarousel.scss";
import ChooseFavBtn from "../../../../components/ChooseFavBtn/ChooseFavBtn";

const PetsCarousel: React.FC = () => {
  return (
    <div className="pets-carousel-container">
      <ArticleAndArrows />
      <Carousel />
      <ChooseFavBtn />
    </div>
  );
};

export default PetsCarousel;
