"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import Vehicle from "@/components/Vehicle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const vehicles = [
  {
    image: "/vehicles/IONIQ_5/01.webp",
    vehicle: "01",
    name: "2025 IONIQ 5",
    description:
      "Perfect for tight streets and quick commutes, with instant torque and parking assist.",
    range: "370 miles",
    top_speed: "155 mph",
    mph: "3.2 seconds",
  },
  {
    image: "/vehicles/KONA_ELECTRIC/01.webp",
    vehicle: "02",
    name: "2025 KONA Electric",
    description:
      "Spacious, smooth, and quiet—built for comfort and highway autonomy.",
    range: "400 miles",
    top_speed: "145 mph",
    mph: "4.2 seconds",
  },
  {
    image: "/vehicles/SANTA_FE_Hybrid/01.webp",
    vehicle: "03",
    name: "SANTA FE Hybrid",
    description:
      "Dual motors, sport-tuned handling, and 0–60 in under 3 seconds.",
    range: "380 miles",
    top_speed: "150 mph",
    mph: "4.2 seconds",
  },
];

const Vehicles = () => {
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
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
          INTRODUCTION
        </div>
        <h1 className="animate mt-4 font-onest text-5xl font-medium text-neutral-950 lg:text-7xl">
          Explore the Lineup
        </h1>

        <div className="mt-12 flex flex-col gap-y-8 lg:mt-20">
          {vehicles.map((item) => (
            <Vehicle key={item.name} vehicle={item} />
          ))}
        </div>

        <div className="mt-12 lg:mt-20">
          <Button secondary>View All Vehicles</Button>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
