import React from "react";
import Header from "../../components/Header/Header";

import "../../styles/_common.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const About: React.FC = () => {
  return (
    <Header>
      <HeroBanner />
    </Header>
  );
};

export default About;
