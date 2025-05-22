import Layout from "@/components/Layout";
import Hero from "./Hero";
import Faqs from "../HomePage/Faqs";
import { faqs } from "@/mocks/faqs";
import MapView from "./MapView";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Layout>
      <Hero />
      <ContactForm />
      <MapView />
      <Faqs section={faqs[0]} />
    </Layout>
  );
};

export default ContactPage;
