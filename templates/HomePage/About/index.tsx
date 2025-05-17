import Button from "@/components/Button";
import Image from "next/image";

const highlights = [
  {
    label: "INSTANT POWER",
    name: "0–60 mph in seconds.",
    description:
      "Our electric drivetrain delivers immediate torque for seamless acceleration and high-performance response—no gears, no delays, just pure power on demand.",
  },
  {
    label: "EMISSION-FREE ENGINEERING",
    name: "Drive clean. Breathe cleaner.",
    description:
      "Every ride leaves zero tailpipe emissions and reduces your carbon footprint—without compromising the joy of driving. Sustainability is built into every mile.",
  },
  {
    label: "INTELLIGENT SYSTEMS",
    name: "Smarter drive. Safer journey.",
    description:
      "From real-time performance monitoring to adaptive driving modes and over-the-air updates, our intelligent platform keeps your car as advanced as your lifestyle.",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="relative w-full h-96 lg:h-[700px]">
            <Image
              src="/images/intro.webp"
              alt="About Image"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
              INTRODUCTION
            </div>
            <h1 className="mt-4 font-onest text-5xl font-medium text-neutral-950 lg:text-7xl">
              0 Emissions, 100% Thrill
            </h1>

            <p className="mt-12 font-figtree text-lg text-neutral-500 lg:mt-auto">
              Feel the instant torque, razor-sharp handling, and silent
              acceleration—without leaving a carbon footprint. This is pure
              driving excitement, electrified.
            </p>

            <Button className="mt-8" secondary icon="arrow-right">
              Learn More
            </Button>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-3 lg:mt-24">
          {highlights.map((item) => (
            <div key={item.name} className="relative">
              <dt className="font-figtree text-xs text-neutral-500 uppercase">
                INSTANT POWER
              </dt>
              <dt className="mt-2 font-onest text-lg font-medium text-neutral-950">
                0–60 mph in seconds.
              </dt>

              <hr className="my-6 border-t border-neutral-200" />

              <dd className="font-figtree text-base text-neutral-500">
                Our electric drivetrain delivers immediate torque for seamless
                acceleration and high-performance response—no gears, no delays,
                just pure power on demand.
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
