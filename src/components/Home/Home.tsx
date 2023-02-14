import React, { FunctionComponent } from "react";
import Footer from "../Layout/Footer/Footer";
import HeroArea from "./HeroArea/HeroArea";

const HomePage: FunctionComponent = () => {
  return (
    <div>
      <HeroArea />
      <Footer />
    </div>
  );
};

export default HomePage;
