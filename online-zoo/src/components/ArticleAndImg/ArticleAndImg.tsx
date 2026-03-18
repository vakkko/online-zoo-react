import React from "react";

import type { ArticleAndImgProps } from "./ArticleAndImg.interface";

const ArticleAndImg: React.FC<ArticleAndImgProps> = ({
  heading,
  description,
  src,
}) => {
  return (
    <section>
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <img src={src} alt="welcome zoo banner" />
    </section>
  );
};

export default ArticleAndImg;
