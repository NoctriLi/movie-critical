import React, { useState, useEffect } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";
import useRecommendations from "@/hooks/useRecommendations";
import MovieSlider from "@/components/MovieSlider";
import ActorSlider from "@/components/ActorSlider";
import CrewSlider from "@/components/CrewSlider";
import useCredits from "@/hooks/useCredits";
import MovieDetailsTable from "@/components/MovieDetailsTable";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Summary = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: details } = useMovie(movieId as string);

  const { data: recommendations } = useRecommendations(movieId as string);

  const { data: credits } = useCredits(movieId as string);

  const movieRating =
    details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
      ?.release_dates[0].certification || "NR";

  console.log(details);

  return (
    <div className="h-[300vh] w-full flex flex-col opacity-70 gap-10">
      <div className="row-span-1 bg-black p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" col-span-auto ">
          <img
            src={
              details?.poster_path
                ? `https://image.tmdb.org/t/p/w500${details?.poster_path}`
                : "/blank-profile-picture.png"
            }
            loading="lazy"
            alt="poster"
            className="w-[500px] mx-auto rounded"
          />
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
              <h1>{details?.release_date.substring(0, 4)}</h1>

              <p>
                {details?.genres.map((genre: any) => genre.name).join(", ")}
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
            <MovieDetailsTable {...details} />
          </div>
          {/* <div className=" flex justify-evenly row-start-3 row-end-5 ">
            <div className="flex">
              <h2 className="text-lg py-2">Genres:</h2>
              <p className="text-sm">
                {details?.budget}
              </p>
            </div>
            <div className="flex">
              <h2 className="text-lg py-2">Genres:</h2>
              <p className="text-sm">
                {details?.genres.map((genre: any) => genre.name).join(", ")}
              </p>
            </div>
            <div className="flex">
              <h2 className="text-lg py-2">Genres:</h2>
              <p className="text-sm">
                {details?.genres.map((genre: any) => genre.name).join(", ")}
              </p>
            </div>
          </div> */}
        </div>
      </div>

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

      <div className=" flex flex-col mt-20 w-full mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-white text-center">
          Recommendations
        </h2>
        <div className="w-full">
          {recommendations && <MovieSlider {...recommendations} />}
        </div>
      </div>
    </div>
  );
};

export default Summary;
