import React from "react";
import type { FeedbackItemProps } from "./FeedbackItem.types";

const FeedbackItem: React.FC<FeedbackItemProps> = ({
  city,
  month,
  name,
  text,
  year,
  id,
}) => {
  return (
    <section key={id}>
      <img src="../../assets/images/quote.png" alt="quote" />
      <h4>
        ${city}, ${month} ${year}
      </h4>
      <p>${text}</p>
      <span>${name}</span>
    </section>
  );
};

export default FeedbackItem;
