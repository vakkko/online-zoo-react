import React from "react";

import ArrowsBox from "../../../../../components/ArrowsBox/ArrowsBox";

import type { ArticleAndArrowsProps } from "./ArticleAndArrows.types";

import "./ArticleAndArrows.scss";

const ArticleAndArrows: React.FC<ArticleAndArrowsProps> = ({ carouselRef }) => {
  const handleRightScroll = () => {
    carouselRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const handleLeftScroll = () => {
    carouselRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <div className="article-arrows">
      <h2>meet some our Pets</h2>
      <div>
        <p>
          Do you have a special place in your heart for animals? Who are your
          favorites? Perhaps you'd like to donate to special ones or all our
          pets? We think it's important for you to choose how your donation is
          used.
        </p>
        <ArrowsBox
          handleLeftScroll={handleLeftScroll}
          handleRightScroll={handleRightScroll}
        />
      </div>
    </div>
  );
};

export default ArticleAndArrows;
