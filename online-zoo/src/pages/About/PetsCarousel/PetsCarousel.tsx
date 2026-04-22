import React, { useRef } from "react";

import ArticleAndArrows from "./ArticleAndArrows/ArticleAndArrows";

import Carousel from "./Carousel/Carousel";

import "./PetsCarousel.scss";
import ChooseFavBtn from "../../../components/ChooseFavBtn/ChooseFavBtn";

const PetsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  return (
    <div className="pets-carousel-container">
      <ArticleAndArrows carouselRef={carouselRef} />
      <Carousel carouselRef={carouselRef} />
      <ChooseFavBtn />
    </div>
  );
};

export default PetsCarousel;
