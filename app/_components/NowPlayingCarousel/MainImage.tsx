"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className={`relative rounded w-full h-full origin-top`}>
        <div
          key={card.id}
          className={`rounded relative h-4/6 w-full  bg-zinc-900 transition-opacity opacity-0 lg:overflow-hidden ${
            loaded && "opacity-100"
          } ease-in duration-400`}
        >
          <img
            src={"https://image.tmdb.org/t/p/w780" + card.backdrop_path}
            width={1280}
            height={720}
            sizes="50vw"
            className="object-contain rounded overflow-hidden mx-auto "
            alt={card.title}
          />
        </div>
        {children}
        <div className={`relative top-0 text-4xl h-2/6 mx-auto  text-white opacity-80`}>
          {card.title}
        </div>
      </div>
    </>
  );
};

export default MainCard;
