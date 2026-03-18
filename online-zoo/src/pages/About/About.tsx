import React from "react";
import Header from "../../components/Header/Header";

import HeroBanner from "../../components/HeroBanner/HeroBanner";

import "../../styles/_common.scss";

const About: React.FC = () => {
  return (
    <>
      <Header>
        <HeroBanner />
      </Header>
    </>
  );
};

export default About;
