import { vehicles } from "@/mocks/vehicles";
import VehiclePage from "@/templates/Vehicle";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const vehicle = vehicles.find((vehicle) => vehicle.slug === slug);

  console.log("Vehicle", vehicle);

  return <VehiclePage vehicle={vehicle} />;
}
