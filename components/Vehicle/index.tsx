"use client";

import { useEffect, useState } from "react";
import { Vehicle as VehicleType } from "@/types/vehicle";
import Button from "../Button";
import LoginGatedButton from "../LoginGatedButton";

type Vehicle = {
  vehicle: VehicleType;
  detailPage?: boolean;
};

const Vehicle = ({ vehicle, detailPage }: Vehicle) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!detailPage) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % vehicle.images.length,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [detailPage, vehicle.images.length]);

  // Show first image if not animating
  const imageToShow = detailPage
    ? vehicle.images[currentImageIndex]
    : vehicle.images[0];

  return (
    <div className="relative h-[600px] overflow-hidden lg:h-[700px]">
      <div className="absolute inset-0 z-0">
        {detailPage ? (
          vehicle.images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{ backgroundImage: `url(${imageToShow})` }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent z-20" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-end text-center py-12 px-6 lg:py-20">
        <h2 className="mt-4 font-onest text-4xl font-medium leading-[1.2] text-white lg:text-5xl">
          {vehicle.name}
        </h2>
        <p className="mt-4 font-figtree text-base text-white/80">
          {vehicle.description}
        </p>

        <div className="hidden mt-8 grid-cols-3 gap-y-6 lg:grid">
          <div className="animate text-center border-r px-6 border-white/12 lg:px-8">
            <div className="font-onest text-xl font-medium text-white">
              {vehicle.range}
            </div>
            <div className="mt-2 font-figtree text-sm text-white">
              {vehicle.vehicle === "01" ? "Latency" : 
               vehicle.vehicle === "02" ? "Execution" : 
               "Forecasting"}
            </div>
          </div>

          <div className="animate text-center border-r px-6 border-white/12 lg:px-8">
            <div className="font-onest text-xl font-medium text-white">
              {vehicle.top_speed}
            </div>
            <div className="mt-2 font-figtree text-sm text-white">
              {vehicle.vehicle === "01" ? "Reach" : 
               vehicle.vehicle === "02" ? "Reliability" : 
               "Processing"}
            </div>
          </div>

          <div className="animate text-center px-6 lg:px-8">
            <div className="font-onest text-xl font-medium text-white">
              {vehicle.mph}
            </div>
            <div className="mt-2 font-figtree text-sm text-white">
              {vehicle.vehicle === "01" ? "Performance" : 
               vehicle.vehicle === "02" ? "Deployment" : 
               "Decision Support"}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Vehicle;
