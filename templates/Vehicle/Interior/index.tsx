import { interior_images } from "@/mocks/vehicle";
import Image from "next/image";

const Interior = () => {
  return (
    <div className="overflow-hidden bg-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            INTERIOR FEATURES
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Interior Comfort & Convenience
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
          {interior_images.map((item) => (
            <div key={item.alt} className="animate relative w-full h-96">
              <Image
                src={item.image}
                alt={item.alt}
                objectFit="cover"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interior;
