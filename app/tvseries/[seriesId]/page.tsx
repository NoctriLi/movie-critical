
import React from "react";

import Spinner from "@/app/_components/Spinner";
import { useSearchParams } from "next/navigation";
import TvSlider from "@/app/_components/TvSlider";
import ActorSlider from "@/app/_components/ActorSlider";
import CrewSlider from "@/app/_components/CrewSlider";
import TvDetailsTable from "@/app/_components/TvDetailsTable";
import { TVDetails } from "@/lib/interfaces";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";


async function getTvSeries(seriesId: string) {
  const res = await fetch(`http://localhost:3000/api/tvseries/${seriesId}`, {
    method: "GET",
});
  return res.json();
}
async function getRecommendations(seriesId: string) {
  const res = await fetch(
    `http://localhost:3000/api/recommendations/${seriesId}/tv`, {
      method: "GET",
  }
  );  
  return res.json();
}
async function getCredits(seriesId: string) {
  const res = await fetch(
    `http://localhost:3000/api/credits/${seriesId}/tv`, {
      method: "GET",
  }
  );
  return res.json();
}


export default async function Page({ params }: { params: { seriesId: string } }) {
  const seriesId = params.seriesId;
  const details:TVDetails = await getTvSeries(seriesId) ;
  const recommendations = await getRecommendations(seriesId);
  const credits = await getCredits(seriesId);



  // const seriesRating =
  //   details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
  //     ?.release_dates[0].certification || "NR";
  console.log(details)
  console.log("seriesPAGE", recommendations.results[0]);

  return (
    <div className="h-[300vh] w-full flex flex-col opacity-70 gap-10">
      <div className="row-span-1 bg-black p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" col-span-auto ">
          {details?.poster_path == undefined ? (
            <Spinner visible={true}/>
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
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
              <h1>{details?.first_air_date?details?.first_air_date.substring(0, 4):'????'}</h1>

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
            <TvDetailsTable {...details} />
          </div>
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


