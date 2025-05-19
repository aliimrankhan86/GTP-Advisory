import Layout from "@/components/Layout";
import Hero from "./Hero";
import About from "./About";
import Highlights from "./Highlights";
import Vehicles from "./Vehicles";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Highlights />
      <Vehicles />
    </Layout>
  );
};

export default HomePage;
