import Layout from "@/components/Layout";
import Hero from "./Hero";
import Intro from "./Intro";
import Values from "./Values";
import Vision from "./Vision";

const AboutPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Values />
      <Vision />
    </Layout>
  );
};

export default AboutPage;
