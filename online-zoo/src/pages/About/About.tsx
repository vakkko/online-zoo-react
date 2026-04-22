import React from "react";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MainContent from "./MainContent/MainContent";

import "../../styles/_common.scss";

const About: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <MainContent />
    </>
  );
};

export default About;
