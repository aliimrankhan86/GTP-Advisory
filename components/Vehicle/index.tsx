import Button from "../Button";

type Vehicle = {
  image: string;
  vehicle: string;
  name: string;
  description: string;
  range: string;
  top_speed: string;
  mph: string;
  slug: "string";
};

type VehicleProps = {
  vehicle: Vehicle;
};

const Vehicle = ({ vehicle }: VehicleProps) => {
  return (
    <div
      className="animate relative h-[600px] bg-cover bg-center lg:h-[700px]"
      style={{ backgroundImage: `url(${vehicle.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-end py-12 px-6 lg:py-20">
        <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
          VEHICLE — {vehicle.vehicle}
        </div>
        <h2 className="mt-4 font-onest text-4xl font-medium leading-[1.2] text-white lg:text-5xl">
          {vehicle.name}
        </h2>
        <p className="mt-4 font-figtree text-base text-white/80">
          {vehicle.description}
        </p>

        <div className="hidden mt-8 grid-cols-2 gap-y-6 lg:grid lg:grid-flow-col-dense">
          <div className="animate text-center border-r px-6 border-white/12 lg:px-8">
            <div className="font-onest text-xl font-medium text-white">
              {vehicle.range}
            </div>
            <div className="mt-2 font-figtree text-sm text-white">Range</div>
          </div>

          <div className="animate text-center px-6 lg:px-8">
            <div className="font-onest text-xl font-medium text-white">
              {vehicle.top_speed}
            </div>
            <div className="mt-2 font-figtree text-sm text-white">
              Top Speed
            </div>
          </div>

          <div className="animate col-span-2 text-center border-t pt-6 border-white/12 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8">
            <div className="font-onest text-xl font-medium text-white">
              {vehicle.mph}
            </div>
            <div className="mt-2 font-figtree text-sm text-white">0-60 mph</div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-x-4">
          <Button as="link" href={`/vehicles/${vehicle.slug}`} primary>
            View Details
          </Button>
          <Button secondary>Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
