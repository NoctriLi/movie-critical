"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "@/lib/interfaces";
interface MainCardProps {
  movies: Movie[];
  activeIndex: number;
}

const Maincard:React.FC<MainCardProps> = ({ movies, activeIndex }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => setLoaded(true), 100);
   
  }
  , [activeIndex]);

  console.log(movies);
  return (
    <>
      <div className="hidden lg:flex flex-col w-1/3 items-center">
        <div className="relative flex flex-col space-y-1 h-96 w-full overflow-hidden">
          {movies.map((card: Movie, index: number) => (
            <div
              key={index}
              className={`w-full h-1/3 transition-opacity  ${loaded ? 'opacity-100': 'opacity-0'} ease-in duration-800 transform translate-y-0
              )}`}
            >
              <Image
                src={"https://image.tmdb.org/t/p/w342" + card.backdrop_path}
                layout="fill"
                placeholder="blur"
                blurDataURL={"https://image.tmdb.org/t/p/w342" + card.backdrop_path}
                objectFit="cover"
                objectPosition="center"
                style={{ borderRadius: "10px" }}
                alt={card.title}

                
              />
              <p className="flex text-white bg-zinc-900 opacity-80">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincard;
