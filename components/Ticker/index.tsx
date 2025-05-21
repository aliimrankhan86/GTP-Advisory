import { brands } from "@/mocks/brands";
import Marquee from "react-fast-marquee";

type TickerProps = {
  gradientColor: string;
};

const Ticker = ({ gradientColor }: TickerProps) => {
  return (
    <Marquee className="mt-12" gradient gradientColor={gradientColor} autoFill>
      {brands.map((item) => (
        <div className="animate mr-20 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 ease-in-out">
          {item}
        </div>
      ))}
    </Marquee>
  );
};

export default Ticker;
