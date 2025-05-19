import Button from "@/components/Button";

const Showcase = () => {
  return (
    <div
      className="relative overflow-hidden h-[800px] bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative h-full flex items-end">
        <div className="w-full grid grid-cols-1 items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-32 lg:gap-24">
          <div>
            <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
              SHOWCASE
            </div>
            <h1 className="animate max-w-xl mt-4 font-onest text-5xl font-medium leading-[1.2] text-white lg:text-7xl">
              Experience the Future in Motion
            </h1>
          </div>

          <div>
            <p className="animate font-figtree text-base text-white">
              See how electric driving redefines performance, design, and
              sustainability. From concept to street-ready, explore real-world
              moments, stunning details, and breakthrough innovation—all in one
              place.
            </p>

            <div className="mt-8 flex gap-x-2">
              <Button primary icon="arrow-right">
                Get Started
              </Button>
              <Button
                className="text-white border-white/12 hover:border-white"
                stroke
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
