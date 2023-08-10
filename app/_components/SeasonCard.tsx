import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { SeasonDetails } from "@/lib/interfaces";
import LazyImage from "@/app/_components/LazyImage";

interface Image {
  src: string;
  width: number;
  quality?: number;
}



const SeasonCard = ({season}:any, seriesId: any) => {
  // const router = useRouter();
  console.log(season)
  console.log(seriesId)
  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${season.id}`),
  //   [router, season.id]
  // );
  return (
    <div className="flex flex-col relative gap-0 min-w-[100px] h-fit text-white text-xs rounded shadow ">
      <div className="relative">
        <LazyImage
          src={
            season.poster_path
              ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
              : "/blank-profile-picture.png"
          }
          alt={season.name}
        />
        <div className="@container absolute bottom-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100">
        <Link
            href={`/seasons/${season.seriesId}/${season.season_number}`}  
            className="absolute bottom-0 mt-2 px-4 py-2 bg-zinc-800 rounded text-white"
        >More...</Link>
        </div>
      </div>

      <div className="flex flex-col py-2">
        <p className="text-white">{season.name}</p>
      </div>
    </div>
  );
};

export default SeasonCard;
