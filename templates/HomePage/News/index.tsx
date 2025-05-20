import { news } from "@/mocks/news";
import Image from "next/image";

const News = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
          LATEST NEWS
        </div>
        <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
          Innovation in Motion
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:mt-20 lg:grid-cols-3">
          {news.map((item) => (
            <div className="">
              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt="About Image"
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="font-figtree text-xs text-neutral-500 uppercase">
                  {item.time}
                </div>
                <div className="font-figtree text-xs text-neutral-500 uppercase">
                  •
                </div>
                <div className="font-figtree text-xs text-neutral-500 uppercase">
                  {item.date}
                </div>
              </div>

              <h6 className="mt-4 font-onest text-2xl font-medium text-neutral-950">
                {item.title}
              </h6>
              <p className="mt-2 font-figtree text-base text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
