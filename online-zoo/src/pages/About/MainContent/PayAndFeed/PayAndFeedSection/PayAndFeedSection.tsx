import React from "react";

import type { PayAndFeedSectionProps } from "./PayAndFeedSection.types";

const PayAndFeedSection: React.FC<PayAndFeedSectionProps> = ({
  number,
  imgSrc,
  imgAlt,
  iconSrc,
  iconAlt,
  heading,
  description,
}) => {
  return (
    <section>
      <div className="number-and-line">
        <span>{number}</span>
        <hr />
      </div>
      <div className="donation-main-content">
        <img src={imgSrc} alt={imgAlt} />
        <div>
          <img src={iconSrc} alt={iconAlt} />
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PayAndFeedSection;
