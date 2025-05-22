import Image from "next/image";
import { Article as ArticleType } from "@/types/article";
import Link from "next/link";

type ArticleProps = {
  item: ArticleType;
  className: string;
};

const Article = ({ item, className }: ArticleProps) => {
  return (
    <div className={`${className}`}>
      <Link key={item.id} href={`/news/${item.id}`}>
        <div className="relative w-full h-80 overflow-hidden group">
          <div className="w-full h-full transition-transform duration-700 ease-out transform group-hover:scale-105 group-hover:rotate-3">
            <Image
              src={item.image}
              alt="About Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </Link>

      <div className="mt-6 flex items-center gap-2">
        <div className="font-figtree text-xs text-neutral-500 uppercase">
          {item.time}
        </div>
        <div className="font-figtree text-xs text-neutral-500 uppercase">•</div>
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
  );
};

export default Article;
