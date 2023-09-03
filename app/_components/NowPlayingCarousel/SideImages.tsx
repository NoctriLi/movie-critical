"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Movie } from "@/lib/interfaces";
interface MainCardProps {
  movies: Movie[];
  activeIndex: number;
  direction: string;
}

const Maincard: React.FC<MainCardProps> = ({
  movies,
  activeIndex,
  direction,
}) => {

  
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => setLoaded(true), 150);
  }, [activeIndex]);

  const animation0 = (index: number) =>
    index === 0
      ? "absolute left-[-100%] h-1/3 z-14 -translate-x-full" +
        (!loaded
          ? (direction === "next"
            ? "hidden"
            : "absolute transition block z-14 origin-left translate-x-full linear")
          : " z-14 scale-0 -translate-x-full")
      : "";
  const animation1 = (index: number) =>
    index === 1
      ? "relative h-1/3  z-13" +
        (!loaded
          ? direction === "next"
            ? "absolute transition z-10 origin-right -translate-x-full h-1/3 "
            : "absolute transition z-10 origin-right translate-y-full h-1/3 "
          : " z-1")
      : "";
  const animation2 = (index: number) =>
    index === 2
      ? "relative h-1/3 z-14" +
        (!loaded
          ? direction === "next"
            ? "absolute transition z-10 -translate-y-full h-1/3 linear"
            : "absolute transition z-12 translate-y-full h-1/3 linear "
          : " z-1")
      : "";
  const animation3 = (index: number) =>
    index === 3
      ? "relative h-1/3 z-13" +
        (!loaded
          ? direction === "next"
            ? " absolute transition z-10 -translate-y-full h-1/3 linear "
            : " absolute transition z-12 translate-y-full h-1/3 linear "
          : " z-1")
      : "";
  const animation4 = (index: number) =>
    index === 4
      ? "absolute h-1/3 z-11" +
        (!loaded
          ? direction === "next"
            ? " absolute transition z-10 -translate-y-full h-1/3 linear "
            : "invisible"
          : " z-1")
      : "";

  console.log(movies);
  return (
    <>
      <div className="relative w-0 scale-0 lg:flex flex-col lg:w-1/3 transition -translate-x-full lg:scale-100 lg:translate-x-0 items-center">
        <div className="relative block space-y-1 h-full w-full overflow-hidden">
          {movies.map((card: Movie, index: number) => (
            <div
              
              key={index}
              className={`w-full  overflow-hidden z-5 ${
                animation0(index) + " " +
                animation1(index) + " " +
                animation2(index) + " " +
                animation3(index) + " " +
                animation4(index)
              }`
            }
            >
              <Link href={`/movies/${card.id}`}>
              <Image
                src={"https://image.tmdb.org/t/p/w342" + card.backdrop_path}
                fill={true}
                placeholder="blur"
                blurDataURL={
                  "https://image.tmdb.org/t/p/w342/nHf61UzkfFno5X1ofIhugCPus2R.jpg"
                }
                sizes="50vw"
                style={{ borderRadius: "10px" }}
                alt={card.title}
                className="object-cover"
              />
              </Link>
              <p className=" text-white bg-zinc-900 opacity-80">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincard;
