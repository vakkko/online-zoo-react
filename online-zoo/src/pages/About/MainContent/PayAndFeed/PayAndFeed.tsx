import React from "react";

import PayAndFeedSection from "./PayAndFeedSection/PayAndFeedSection";

import { PAY_AND_FEED_SECTIONS } from "../../../../consts/consts";

import "./PayAndFeed.styles.scss";

const PayAndFeed: React.FC = () => {
  return (
    <div className="pay-and-feed-container">
      <h2>pay and feed</h2>
      {PAY_AND_FEED_SECTIONS.map((section, i) => (
        <React.Fragment key={i}>
          <PayAndFeedSection
            number={section.number}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            iconSrc={section.iconSrc}
            iconAlt={section.iconAlt}
            heading={section.heading}
            description={section.description}
            hasButton={i === 2}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PayAndFeed;
