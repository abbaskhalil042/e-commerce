import React from "react";
import Nav from "../navbar/Nav";
import Foot from "../footer/Foot";
import HeroSection from "../herosec/HeroSection";
import Filter from "../filter/Filter";
import ProductCard from "../productCard/ProductCard";
import Track from "../track/Track";
import Testimonial from "../testimonial/Testimonial";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
      <Foot />
    </div>
  );
};

export default Layout;
