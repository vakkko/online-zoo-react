import React from "react";

import type { ArticleAndImgProps } from "./ArticleAndImg.interface";

const ArticleAndImg: React.FC<ArticleAndImgProps> = ({
  heading,
  description,
  src,
  alt,
  imageBeforeText,
}) => {
  return (
    <section>
      {imageBeforeText && <img src={src} alt={alt} />}
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      {!imageBeforeText && <img src={src} alt={alt} />}
    </section>
  );
};

export default ArticleAndImg;
