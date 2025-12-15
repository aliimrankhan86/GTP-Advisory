"use client";

import Button from "@/components/Button";
import LoginGatedButton from "@/components/LoginGatedButton";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Highlights = () => {
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
    <div ref={container} className="overflow-hidden bg-white">
      <div className="bg-neutral-100 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="py-12 px-6 lg:py-32 lg:px-32">
          <h2 className="animate mt-4 font-onest text-4xl leading-[1.2] text-neutral-950 font-medium lg:text-5xl">
            Launch Intelligence, Scale Effortlessly
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-500">
            Bring your AI vision to life in record time.
            From rapid proof-of-concept to scalable production systems, GTP Advisory empowers teams to deploy intelligent solutions that evolve, adapt, and outperform expectations.
          </p>
          <div className="animate mt-6">
            <LoginGatedButton stroke>Learn More</LoginGatedButton>
          </div>
        </div>

        <div className="animate relative w-full h-96 lg:h-[700px]">
          <Image
            src="/images/Green-AI-future.png"
            alt="AI Future Interface"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="bg-neutral-900 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="animate order-2 relative w-full h-96 lg:h-[700px] lg:order-1">
          <Image
            src="/images/ai-coder-new-v2.jpg"
            alt="AI Developer"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="order-1 py-12 px-6 lg:py-32 lg:px-32 lg:order-2">
          <h2 className="animate mt-4 font-onest text-4xl leading-[1.2] text-white font-medium lg:text-5xl">
            From Idea to Intelligence
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-400">
            Turn imagination into innovation.
            Our AI frameworks transform complex ideas into real-world applications, combining strategy, automation, and advanced learning models to deliver measurable impact from day one.
          </p>
          <div className="animate mt-6">
            <LoginGatedButton primary>Discover More</LoginGatedButton>
          </div>
        </div>
      </div>

      <div className="bg-lime-300 grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="py-12 px-6 lg:py-32 lg:px-32">
          <h2 className="animate mt-4 font-onest text-4xl leading-[1.2] text-neutral-950 font-medium lg:text-5xl">
            Seamless AI Integration
          </h2>
          <p className="animate mt-4 font-figtree text-lg text-neutral-900">
            Connect intelligence across every system, channel, and workflow.
            GTP Advisory's modular AI infrastructure fits perfectly into your environment, uniting automation, analytics, and communication into a single intelligent network.
          </p>
          <div className="animate mt-6">
            <LoginGatedButton secondary>Explore Integration</LoginGatedButton>
          </div>
        </div>

        <div className="animate relative w-full h-96 lg:h-[700px]">
          <Image
            src="/images/chatbubbles.png"
            alt="AI Communication Network"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
