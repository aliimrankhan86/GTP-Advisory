import Layout from "@/components/Layout";
import Hero from "./Hero";
import Reviews from "../HomePage/Reviews";
import Faqs from "../HomePage/Faqs";
import { faqs } from "@/mocks/faqs";
import Plans from "./Plans";

const PricingPage = () => {
  return (
    <Layout>
      <Hero />
      <Plans />
      <Reviews
        className="bg-white"
        cardBackground="bg-neutral-100"
        gradientColor="#FFFFFF"
      />
      <Faqs section={faqs[0]} />
    </Layout>
  );
};

export default PricingPage;
