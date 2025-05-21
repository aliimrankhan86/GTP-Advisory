import Button from "@/components/Button";

const pricing_plans = [
  {
    label: "Basic Access",
    price: "149",
    timeline: "/ MONTH",
    description:
      " Perfect for everyday drivers who want essential perks and great service.",
  },
  {
    label: "Plus Membership",
    price: "149",
    timeline: "/ MONTH",
    description:
      " Perfect for everyday drivers who want essential perks and great service.",
  },
  {
    label: "Enterprise Plan",
    price: "149",
    timeline: "/ MONTH",
    description:
      " Perfect for everyday drivers who want essential perks and great service.",
  },
];

const Plans = () => {
  return (
    <div className="overflow-hidden bg-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            PRICING PLANS
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Plans That Move You Forward
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:mt-20">
          {pricing_plans.map((item) => (
            <div key={item.label} className="p-10 bg-white">
              <div className="font-onest font-medium text-xl text-neutral-950">
                Basic Access
              </div>

              <div className="mt-8 flex items-center gap-2">
                <div className="font-onest font-medium text-5xl text-neutral-950">
                  $149
                </div>
                <div className="font-figtree text-sm text-neutral-500">
                  / MONTH
                </div>
              </div>

              <div className="mt-4 font-figtree text-base text-neutral-500">
                Perfect for everyday drivers who want essential perks and great
                service.
              </div>

              <div className="mt-8 w-full h-px bg-neutral-200" />

              <Button secondary className="w-full mt-8">
                Active Access
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
