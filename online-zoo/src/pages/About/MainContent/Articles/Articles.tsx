import React from "react";

import ArticleAndImg from "../../../../components/ArticleAndImg/ArticleAndImg";

import Donation from "../Donation/Donation";

import "./Articles.scss";

const Articles: React.FC = () => {
  return (
    <div className="articles">
      <ArticleAndImg
        heading="Welcome to the Online Zoo!"
        description="On our website, using live webcams, fans of all ages can observe
              various animals. Among them, are Giant pandas, eagles, alligators,
              forest gorillas, African lions, and others. It is the whole
              natural world in real-time in front of our cameras. We hope you
              will enjoy watching closely and explore animals’ behavior and
              habitats! Note: animals are not always on view on cameras, so
              please check back if you don't see anything."
        src="/images/about/welcome-zoo-banner.png"
        alt="welcome zoo banner"
      />
      <ArticleAndImg
        imageBeforeText
        heading="How we work"
        description="   Online Zoo is a nonprofit committed to inspiring awareness and
              preservation of nature and wild animals in our zoo and worldwide.
              Every day, our experts work to safeguard the health and wellness
              of the animals. To continue these efforts, we need your help.
              We're so grateful to our numerous supporters. All donations, large
              and small, go a long way to the conservation efforts of our pets."
        src="/images/about/two-eagle.png"
        alt="two eagles"
      />
      <Donation />
    </div>
  );
};

export default Articles;
