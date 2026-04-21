import React from "react";

import ArrowsBox from "../../../../../components/ArrowsBox/ArrowsBox";

import type { ArticleAndArrowsProps } from "./ArticleAndArrows.types";

import {
  handleLeftScroll,
  handleRightScroll,
} from "../../../../../utils/utils";

import "./ArticleAndArrows.scss";

const ArticleAndArrows: React.FC<ArticleAndArrowsProps> = ({ carouselRef }) => {
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
          handleLeftScroll={() => handleLeftScroll(carouselRef)}
          handleRightScroll={() => handleRightScroll(carouselRef)}
        />
      </div>
    </div>
  );
};

export default ArticleAndArrows;
