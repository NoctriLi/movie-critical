
import React from "react";
import Spinner from "@/app/_components/Spinner";
import TvSlider from "@/app/_components/sliders/TvSlider";
import ActorSlider from "@/app/_components/sliders/ActorSlider";
import CrewSlider from "@/app/_components/sliders/CrewSlider";
import SeasonBox from "@/app/_components/grids/SeasonBox";
import { SeasonDetails } from "@/lib/interfaces";

import { GetServerSideProps } from "next";
import Image from "next/image";
import EpisodeBox from "@/app/_components/grids/EpisodeBox";

const token = process.env.TMDB_TOKEN;
const address = process.env.WEB_LOC;
async function getTvSeries(seriesId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
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

async function getSeason(seriesId: string, season:  string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}?language=en-US`,
     {
       method: "GET",
       headers: {
         accept: "application/json",
         Authorization: `Bearer ${token}`,
       },
     }
   )
console.log(res)
  return res.json();
}
async function getRecommendations(seriesId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/recommendations?language=en-US`,
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
async function getCredits(seriesId: string, season: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}/credits?language=en-US`,
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

export default async function Page({ params }: { params: { seriesId: string; season: string } }) {
  const seriesId = params.seriesId[0];
  const season = params.seriesId[1];
  console.log(seriesId, season)
  if (!seriesId || !season) {
    return <Spinner visible={true} />;
  }
  const seriesDetails = await getTvSeries(seriesId);
  const details:SeasonDetails = await getSeason(seriesId, season);
  const recommendations = await getRecommendations(seriesId);
  const credits = await getCredits(seriesId, season);

  

  return (
    <div className="h-[300vh] w-full flex flex-col gap-10">
      <div className="row-span-1 bg-zinc-950 p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
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
              {details?.name}{" "}
            </h1>

            <div className="flex flex-row  space-x-5 w-full align-middle text-md lg:text-lg">
              <h2>
      
              </h2>
              <h1>{details?.air_date?details?.air_date.substring(0, 4):'????'}</h1>

  
            </div>
          </div>

          <div className="py-3">
            <div className="flex py-2">
              <h2 className="text-xs py-2">
                TMDB Rating: {details?.vote_average}
              </h2>
              
            </div>
            <div className="flex flex-col pt-5 pb-10">
              <h2 className="text-lg py-2">Overview:</h2>
              <p className="text-sm px-5">{details?.overview}</p>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-col w-full  mx-auto">
        <h2 className=" text-2xl font-bold tracking-tight text-center text-white py-2 ">
          Episodes
        </h2>
        <div className="flex flex-col lg:flex-row text-center gap-28 mx-auto">
          {seriesId && <EpisodeBox episodes={details} id={seriesId} />}
          </div>
        </div>
      <div className="flex flex-col w-full  mx-auto">
        <h2 className=" text-2xl font-bold tracking-tight text-center text-white py-2 ">
          Seasons
        </h2>
        <div className="flex flex-col lg:flex-row text-center gap-28 mx-auto">
          {seriesId && <SeasonBox seasons={seriesDetails} id={seriesId} />}
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
          {recommendations && < TvSlider {...recommendations} />}
        </div>
      </div>
    </div>
  );
};
