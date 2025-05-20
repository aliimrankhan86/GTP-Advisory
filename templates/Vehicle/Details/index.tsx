"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vehicle from "@/components/Vehicle";
import { Vehicle as VehicleType } from "@/types/vehicle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type DetailsProps = {
  vehicle: VehicleType;
};

const Details = ({ vehicle }: DetailsProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".animate").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          scale: 0.96,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            TECH & FEATURES
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Technology That Drives You
          </h1>
        </div>

        <div className="mt-12 flex flex-col gap-y-8 lg:mt-20">
          <Vehicle vehicle={vehicle} />
        </div>
      </div>
    </div>
  );
};

export default Details;
