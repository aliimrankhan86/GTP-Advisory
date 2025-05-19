"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

        <div className="mt-20 gap-y-8">
          <div
            className="animate relative h-[600px] bg-cover bg-center lg:h-[700px]"
            style={{ backgroundImage: "url('/images/cover.webp')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

            <div className="relative z-20 flex h-full flex-col justify-end py-12 px-6 lg:py-20">
              <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
                VEHICLE — 01
              </div>
              <h2 className="mt-4 font-onest text-4xl font-medium text-white lg:text-5xl">
                2025 IONIQ 5
              </h2>
              <p className="mt-4 font-figtree text-base text-white/80">
                Perfect for tight streets and quick commutes, with instant
                torque and parking assist.
              </p>

              <div className="mt-8 flex items-center justify-center gap-x-4">
                <Button primary>View Details</Button>
                <Button secondary>Order Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
