import React from "react";

import Articles from "./Articles/Articles";
import PetsCarousel from "./PetsCarousel/PetsCarousel";
import PayAndFeed from "./PayAndFeed/PayAndFeed";
import Feedbacks from "./Feedbacks/Feedbacks";
import AnimalCaring from "./AnimalCaring/AnimalCaring";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

import "./About.scss";

const About: React.FC = () => {
  return (
    <main>
      <HeroBanner />
      <Articles />
      <PetsCarousel />
      <PayAndFeed />
      <Feedbacks />
      <AnimalCaring />
    </main>
  );
};

export default About;
