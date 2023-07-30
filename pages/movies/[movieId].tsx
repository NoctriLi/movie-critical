import React, { useState, useEffect } from "react";
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

  const movieRating =
    details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
      ?.release_dates[0].certification || "NR";

  return (
    <div className="h-screen my-5  grid grid-rows-12 opacity-70 space-x-10 border">
      <div className="row-span-3 bg-black grid md:grid-cols-3 space-x-10 border">
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
          <div className="row-span-1 flex flex-col gap-2 border">


            <h1 className="text-1xl md:text-3xl font-bold  self-center">
              {details?.original_title}{" "}
            </h1>

            <div className="flex flex-row space-x-5 w-full align-middle justify-center">

              <h2 className="text-lg">
                {movieRating && (
                  <p className="text-md self-center">{movieRating}</p>
                )}
              </h2>
              <h1 className="text-lg">
                {details?.release_date.substring(0, 4)}
              </h1>

              <p className="text-lg">
              {details?.genres.map((genre: any) => genre.name).join(", ")}
            </p>
            </div>

          </div>
          <div className="row-span-1 border">
            <div className="flex">
              <h2 className="text-lg py-2">
                TMDB Rating: {details?.vote_average}
              </h2>
              <p className="text-xs">({details?.vote_count} votes)</p>
            </div>

            <h2 className="text-lg py-2">Overview:</h2>
            <p className="text-sm px-5">{details?.overview}</p>
          </div>
          <div className="row-start-3 row-end-5 border">
            <h2 className="text-lg py-2">Genres:</h2>
            <p className="text-sm">
              {details?.genres.map((genre: any) => genre.name).join(", ")}
            </p>
          </div>
          <p>Hi</p>
        </div>
        <div className=" border flex text-center flex-col">
          <div className="max-w-[500px] h-full  flex-col">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Recommendations
            </h2>

            {recommendations && <MovieSlider {...recommendations} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
