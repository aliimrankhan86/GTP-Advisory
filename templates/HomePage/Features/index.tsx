"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
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
      ref={container}
      className="overflow-hidden bg-neutral-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
          AI in Action
        </h1>
        <p className="animate mt-4 max-w-3xl font-figtree text-lg text-neutral-500">
          From automation to intelligent communication, every capability is designed to help businesses operate faster, engage customers naturally, and scale with confidence using Agency4's applied AI.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate bg-white p-8 rounded-2xl">
              <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
                AUTOMATED WORKFLOWS
              </div>
              <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
                AI automation that removes repetitive tasks
              </h3>
              <p className="font-figtree text-base text-neutral-600">
                Smart, integrated systems automate your everyday operations, saving hours and reducing errors across workflows.
              </p>
            </div>

            <div className="animate bg-white p-8 rounded-2xl">
              <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
                VOICE AGENTS
              </div>
              <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
                Conversational AI that speaks your brand
              </h3>
              <p className="font-figtree text-base text-neutral-600">
                Human-like voice agents deliver real-time, multilingual assistance for sales, support, and onboarding.
              </p>
            </div>

            <div className="animate bg-white p-8 rounded-2xl">
              <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
                CHATBOTS THAT THINK
              </div>
              <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
                Chatbots powered by advanced reasoning
              </h3>
              <p className="font-figtree text-base text-neutral-600">
                Responsive, context-aware chatbots engage users instantly and handle complex conversations with ease.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="animate bg-white p-8 rounded-2xl">
              <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
                AI-POWERED EMAILS
              </div>
              <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
                Personalised communication at scale
              </h3>
              <p className="font-figtree text-base text-neutral-600">
                Generate, send, and optimise messages that adapt to tone, intent, and customer behaviour automatically.
              </p>
            </div>

            <div className="animate bg-white p-8 rounded-2xl">
              <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
                PREDICTIVE INSIGHTS
              </div>
              <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
                Data-driven intelligence for better decisions
              </h3>
              <p className="font-figtree text-base text-neutral-600">
                Turn raw data into actionable insights using predictive models built to enhance accuracy and business agility.
              </p>
            </div>

            <div className="animate bg-white p-8 rounded-2xl">
              <div className="font-figtree text-xs text-neutral-500 uppercase tracking-wide mb-3">
                SEAMLESS INTEGRATION
              </div>
              <h3 className="font-onest text-2xl font-medium text-neutral-950 mb-4">
                Built to fit your existing ecosystem
              </h3>
              <p className="font-figtree text-base text-neutral-600">
                Our AI solutions integrate smoothly with your CRM, website, and communication tools, ready for immediate impact.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;
