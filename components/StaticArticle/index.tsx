import Image from "next/image";

type StaticArticleProps = {
  title: string;
  description: string;
  image: string;
  className: string;
};

const StaticArticle = ({ title, description, image, className }: StaticArticleProps) => {
  return (
    <div className={`${className}`}>
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      <h6 className="mt-6 font-onest text-2xl font-medium text-neutral-950">
        {title}
      </h6>
      <p className="mt-2 font-figtree text-base text-neutral-500">
        {description}
      </p>
    </div>
  );
};

export default StaticArticle;
