import Layout from "@/components/Layout";
import Hero from "./Hero";
import Details from "./Details";
import Showcase from "../HomePage/Showcase";
import { Vehicle } from "@/types/vehicle";

type VehiclePageProps = {
  vehicle: Vehicle;
};

const VehiclePage = ({ vehicle }: VehiclePageProps) => {
  return (
    <Layout>
      <Hero />
      <Details vehicle={vehicle} />
      <Showcase />
    </Layout>
  );
};

export default VehiclePage;
