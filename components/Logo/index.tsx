import Link from "next/link";

type LogoProps = {
  mobileMenuOpen?: boolean;
};

const Logo = ({ mobileMenuOpen }: LogoProps) => {
  const textColor = mobileMenuOpen ? "text-neutral-950" : "text-white";
  const iconColor = mobileMenuOpen ? "text-neutral-950" : "text-white";

  return (
    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" aria-label="GTP Advisory">
      <svg
        width="600"
        height="150"
        viewBox="0 0 600 150"
        className={`h-10 w-auto ${iconColor}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <text
          x="110"
          y="85"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="60"
          fontWeight="bold"
          fill="currentColor"
        >
          GTP Advisory
        </text>
      </svg>
    </Link>
  );
};

export default Logo;
