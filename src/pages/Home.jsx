import React from "react";
import Header from "../components/Header";
import TwoCardSection from "../components/Home components/TwoCardSection";
import Section1 from "../components/Home components/Section1";
import Section2 from "../components/Home components/Section2";
import FAQ from "../components/Home components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      {/* <TwoCardSection /> */}
      <Section1 />
      <Section2 />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
