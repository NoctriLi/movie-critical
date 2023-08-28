
import React from "react";

import Spinner from "@/app/_components/Spinner";
import Slider from "@/app/_components/sliders/Slider";
import SeasonBox from "@/app/_components/grids/SeasonBox";
import EpisodeBox from "@/app/_components/grids/EpisodeBox";
import TvDetailsTable from "@/app/_components/tables/TvDetailsTable";
import { Episode } from "@/lib/interfaces";


import Image from "next/image";
const token = process.env.TMDB_TOKEN;
let address = process.env.WEB_LOC;

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
async function getEpisode(seriesId: string, season:  string, episode: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}/episode/${episode}?language=en-US`,
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
async function getCredits(seriesId: string, season: string, episode: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}/episode/${episode}/credits?language=en-US`,
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


export default async function Page({ params }: { params: { seriesId: string; season: string; episode: string; } }) {
  const seriesId = params.seriesId[0];
  const season = params.seriesId[1];
  const episode = params.seriesId[2];
  
  if (!seriesId || !season) {
    return <Spinner visible={true} />;
  }
  const details:Episode = await getEpisode(seriesId, season, episode);
 
  const recommendations = await getRecommendations(seriesId);
  const credits = await getCredits(seriesId, season, episode);
  const seriesDetails = await getTvSeries(seriesId);
  const seasonDetails = await getSeason(seriesId, season);



  return (
    <div className="h-[300vh] w-full flex flex-col">
      <div className="row-span-1 bg-zinc-950 p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" col-span-auto ">
        {details?.still_path == undefined ? (
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
              src={`https://image.tmdb.org/t/p/w500${details?.still_path}`}
              loading="lazy"
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
                {/* {seriesRating && (
                  <p className="text-md self-center">{seriesRating}</p>
                )} */}
              </h2>
              <h1>{details?.air_date?details?.air_date.substring(0, 4):''}</h1>

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

        </div>
      </div>
      <div className="flex flex-col w-full text-foreground mx-auto">
        <h2 className=" text-2xl font-bold tracking-tight text-center py-2 ">
          Episodes
        </h2>
        <div className="flex flex-col lg:flex-row text-center gap-28 mx-auto">
          {seriesId && <EpisodeBox episodes={seasonDetails} id={seriesId} />}
          </div>
        </div>
        <div className="flex flex-col w-full  mx-auto">
        <h2 className=" text-2xl font-bold tracking-tight text-center py-2 ">
          Seasons
        </h2>
        <div className="flex flex-col lg:flex-row text-center gap-28 mx-auto">
          {seriesId && <SeasonBox seasons={seriesDetails} id={seriesId} />}
          </div>
        </div>
        <div className="mx-auto flex w-full  flex-col">
        <h2 className=" py-2 text-center text-2xl font-bold  tracking-tight ">
          Credits
        </h2>
        <div className="mx-auto flex flex-col gap-28 text-center lg:flex-row">
          {credits?.cast.length > 0 && (
            <div className=" flex h-full  max-w-[500px]  flex-col">
              <h3 className="text-xl font-bold tracking-tight  ">Cast</h3>
              <div className=" w-full justify-center space-x-5 align-middle ">
                <Slider list={credits.cast} type={'cast'} />
              </div>
            </div>
          )}
          {credits?.crew.length > 0 && (
            <div className="flex h-full max-w-[500px] flex-col ">
              <h3 className="text-xl font-bold tracking-tight  ">Crew</h3>
              <div className=" w-full justify-center space-x-5 align-middle ">
                <Slider list={credits.crew} type={'crew'} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" mx-auto mt-20 flex w-full flex-col">
        <h2 className="text-center text-2xl font-bold  tracking-tight">
          Recommendations
        </h2>
        <div className="w-full">
          {recommendations && <Slider list={recommendations.results} type={"tv"} />}
        </div>
      </div>
    </div>
  );
};


