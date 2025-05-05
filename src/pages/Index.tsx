
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import UpcomingMatches from "@/components/home/UpcomingMatches";
import Tools from "@/components/home/Tools";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";
import ProfitCalculator from "@/components/home/ProfitCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main>
        <Hero />
        <ProfitCalculator />
        <UpcomingMatches />
        <Tools />
        <Stats />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
