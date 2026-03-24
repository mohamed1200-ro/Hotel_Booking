import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testmonials from "../components/Testmonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testmonials />
      <Newsletter />
    </div>
  );
};

export default Home;
