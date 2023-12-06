"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface MainCardProps {
  card: {
    backdrop_path: string;
    title: string;
    id: number;
  };
  children: React.ReactNode;
  activeIndex: number;
}

const MainCard = ({ card, children, activeIndex }: MainCardProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => setLoaded(true), 150);
  }, [activeIndex]);

  return (
    <>
      <div className='relative bg-black z-[200] rounded w-full h-full'
        >
        <Link
          href={`/movies/${card.id}`}
          key={card.id}
          className={`rounded relative h-4/6 w-full transition-opacity opacity-0 overflow-hidden ${
            loaded && "opacity-100"
          } ease-in duration-400`}
        >
          <img
            src={"https://image.tmdb.org/t/p/w780" + card.backdrop_path}
            width={1280}
            height={720}
            sizes="50vw"
            className="object-contain rounded overflow-hidden shadow-foreground mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={card.title}
          />
        </Link>
        {children}
      </div>
        <div className={`relative text-4xl tracking-wide h-2/6 mx-auto  text-foreground opacity-80`}>
          {card.title}
        </div>
    </>
  );
};

export default MainCard;
