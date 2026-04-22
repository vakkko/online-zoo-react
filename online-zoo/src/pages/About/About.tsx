import React from "react";

import Header from "../../components/Header/Header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MainContent from "./MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

import "../../styles/_common.scss";

const About: React.FC = () => {
  return (
    <>
      <Header>
        <HeroBanner />
      </Header>
      <MainContent />
      <Footer />
    </>
  );
};

export default About;
