import React from "react";
import Header from "../../components/Header/Header";

import HeroBanner from "../../components/HeroBanner/HeroBanner";

import "../../styles/_common.scss";
import MainContent from "./MainContent/MainContent";

const About: React.FC = () => {
  return (
    <>
      <Header>
        <HeroBanner />
      </Header>
      <MainContent />
    </>
  );
};

export default About;
