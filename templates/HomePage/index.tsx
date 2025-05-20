import Layout from "@/components/Layout";
import Hero from "./Hero";
import About from "./About";
import Highlights from "./Highlights";
import Vehicles from "./Vehicles";
import Features from "./Features";
import Showcase from "./Showcase";
import Reviews from "./Reviews";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Highlights />
      <Vehicles />
      <Features />
      <Showcase />
      <Reviews />
    </Layout>
  );
};

export default HomePage;
