import React, {useState, useEffect} from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";
import useRecommendations from "@/hooks/useRecommendations";
import MovieSlider from "@/components/MovieSlider";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";






const Summary = () => {
  const router = useRouter();
  const { movieId } = router.query;
    const { data: details } = useMovie(movieId as string);


  console.log("SUMMARY", details);
  const { data: recommendations } = useRecommendations(movieId as string);
  console.log("RECOMMENDATIONS", recommendations);
  return (
    <div className="h-screen w-screen bg-black grid grid-rows-12 space-x-10 border">
      <div className="row-span-3 bg-black grid grid-cols-3 space-x-10 border">
        <HiChevronLeft
          onClick={() => router.push("/")}
          className=" absolute w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />

        <div className=" col-span-1 border">
          <img
            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
            alt="poster"
            className="w-[100vh] mx-auto"
          />
        </div>

        <div className="col-span-2 grid grid-rows-12 text-white border">
          <h1 className="text-1xl md:text-3xl font-bold row-span-1 border">
            {details?.original_title}
          </h1>
          <div className="row-span-2 border">
            <h2 className="text-lg py-2">Overview:</h2>
            <p className="text-sm">{details?.overview}</p>
          </div>
          <div className="row-start-4 row-end-5 border">
            <h2 className="text-lg py-2">Genres:</h2>
            <p className="text-sm">
              {details?.genres.map((genre: any) => genre.name).join(", ")}
            </p>
          </div>
          <div className="row-span-6 border flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Recommendations
            </h2>
            {recommendations&&<MovieSlider {...recommendations} />}
            <p>Hi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
