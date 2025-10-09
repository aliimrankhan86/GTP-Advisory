"use client";

import Icon from "@/components/Icon";
import { reviews } from "@/mocks/reviews";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ticker from "@/components/Ticker";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ReviewsProps = {
  className?: string;
  cardBackground?: string;
  gradientColor?: string;
};

const Reviews = ({
  className,
  cardBackground = "bg-white",
  gradientColor = "#F5F5F5",
}: ReviewsProps) => {
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
    <div
      id="testimonials"
      ref={container}
      className={`bg-neutral-100 overflow-hidden py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate mt-4  font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            What Clients Are Saying
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:mt-20 lg:grid-cols-3">
          {reviews.map((item) => (
            <div key={item.title} className={`animate p-10 ${cardBackground}`}>
              <div className="flex flex-col divide-y divide-neutral-200">
                <div className="pb-8 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => {
                      const filled = index < Math.floor(Number(item.rating));
                      return (
                        <Icon
                          key={index}
                          name="star"
                          weight="fill"
                          className={
                            filled ? "fill-yellow-300" : "fill-neutral-200"
                          }
                          size={18}
                        />
                      );
                    })}
                  </div>

                  <div className="font-figtree text-sm text-neutral-500 uppercase">
                    {item.date}
                  </div>
                </div>

                <div className="py-8">
                  <h6 className="font-onest text-2xl font-medium text-neutral-950">
                    {item.title}
                  </h6>

                  <p className="mt-4 font-figtree text-base text-neutral-500">
                    {item.review}
                  </p>
                </div>

                <div className="pt-8">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={item.reviewer_image}
                      alt="About Image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-4 font-figtree text-base font-medium text-neutral-950">
                    {item.reviewer}
                  </div>
                  <div className="mt-1 font-figtree text-sm text-neutral-500">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl flex flex-col justify-center text-center lg:mt-20">

          <Ticker gradientColor={gradientColor} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
