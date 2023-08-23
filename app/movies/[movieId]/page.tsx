
import React, { useState, useEffect } from "react";
import { HiChevronLeft } from "react-icons/hi";
import Spinner from "@/app/_components/Spinner";
import { useSearchParams } from "next/navigation";
import useMovie from "@/hooks/useMovie";
import useRecommendations from "@/hooks/useRecommendations";
import Slider from "@/app/_components/sliders/Slider";
import ActorSlider from "@/app/_components/sliders/ActorSlider";
import CrewSlider from "@/app/_components/sliders/CrewSlider";
import MovieDetailsTable from "@/app/_components/tables/MovieDetailsTable";
import Image from "next/image";
const token = process.env.TMDB_TOKEN;



async function getMovies(movieId: string) {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=release_dates`,
     {
       method: "GET",
       headers: {
         accept: "application/json",
         Authorization: `Bearer ${token}`,
       },
     }
   )
  return res.json();
}
async function getRecommendations(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );  
  return res.json();
}
async function getCredits(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
}


export default async function Page({ params: {movieId} }: { params: { movieId: string } }) {
  
  const detailsData = getMovies(movieId);
  const recommendationsData = getRecommendations(movieId);
  const creditsData = await getCredits(movieId);

  const [details, recommendations, credits] = await Promise.all([detailsData, recommendationsData, creditsData]);

  const movieRating =
    details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
      ?.release_dates[0].certification || "NR";


  return (
    <div className="h-[300vh] w-full flex flex-col opacity-70 gap-10">
      <div className="row-span-1 bg-black p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" col-span-auto ">
          {details?.poster_path == undefined ? (
            <Image
              src={`/blank-profile-picture.png`}
              loading="lazy"
              width={300}
              height={400}
              alt="poster"
              className="w-[500px] mx-auto rounded"
            />
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
              loading="eager"
              priority={true}
              width={300}
              height={400}
              alt="poster"
              className="w-[500px] mx-auto rounded"
            />
          )}
        </div>

        <div className="col-span-auto flex flex-col text-white ">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl md:text-3xl font-bold  ">
              {details?.original_title}{" "}
            </h1>

            <div className="flex flex-row  space-x-5 w-full align-middle text-md lg:text-lg">
              <h2>
                {movieRating && (
                  <p className="text-md self-center">{movieRating}</p>
                )}
              </h2>
              <h1>{details?.release_date?details?.release_date.substring(0, 4):'????'}</h1>

              <p>
                {details?.genres && details?.genres.map((genre: any) => genre.name).join(", ")}
              </p>
            </div>
          </div>

          <div className="py-3">
            <div className="flex py-2">
              <h2 className="text-xs py-2">
                TMDB Rating: {details?.vote_average}
              </h2>
              <p className="text-[.6rem]">({details?.vote_count} votes)</p>
            </div>
            <div className="flex flex-col pt-5 pb-10">
              <h2 className="text-lg py-2">Overview:</h2>
              <p className="text-sm px-5">{details?.overview}</p>
            </div>
          </div>
          <div className="py-2">
            {details && <MovieDetailsTable {...details} />}
            
          </div>
        </div>
      </div>

            <section className="relative flex flex-wrap items-center h-screen w-screen text-white p-5">
      <div className="flex flex-col w-full  mx-auto">
        <h2 className=" text-2xl font-bold tracking-tight text-center text-white py-2 ">
          Credits
        </h2>
        <div className="flex flex-col lg:flex-row text-center gap-28 mx-auto">
          <div className=" max-w-[500px] h-full  flex  flex-col">
            <h3 className="text-xl font-bold tracking-tight text-white ">
              Cast
            </h3>
            <div className=" space-x-5 w-full align-middle justify-center ">
              {credits && <ActorSlider {...credits} />}
            </div>
          </div>

          <div className="max-w-[500px] h-full flex flex-col ">
            <h3 className="text-xl font-bold tracking-tight text-white ">
              Crew
            </h3>
            <div className=" space-x-5 w-full align-middle justify-center ">
              {credits && <CrewSlider {...credits} />}
            </div>
          </div>
        </div>
      </div>

        <div className="relative flex flex-col w-fit mx-auto overflow-hidden ">
        <h2 className="text-2xl font-bold tracking-tight text-white text-center">
          Recommendations
        </h2>
          {recommendations?.results && <Slider list={recommendations.results} type="movie" />}
        </div>
      </section>
    </div>
  );
};


