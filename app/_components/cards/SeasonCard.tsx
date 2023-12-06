import React, { useCallback } from 'react'
// import { useRouter } from "next/router";


interface Image {
  src: string
  width: number
  quality?: number
}

const SeasonCard = ({ season, seriesId }: any) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${season.id}`),
  //   [router, season.id]
  // );

  return (
    <div className="relative flex h-fit w-[150px] min-w-[150px] snap-center flex-col overflow-hidden rounded  shadow">
      {season.poster_path != undefined ? (
        <img
          src={
            season.poster_path
              ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
              : '/blank-profile-picture.png'
          }
          alt={season.name}
          height={300}
          width={200}
          className="object-cover"
          loading="lazy"
          onError={(e) =>
            (e.currentTarget.src = '/public/images/blank-profile-picture.png')
          }
        />
      ) : (
        <div className="flex h-[262px] min-w-[175px] items-center bg-gray-400 object-cover">
          <p className="w-full bg-primary-foreground text-center font-bold"></p>
        </div>
      )}
      <a
        className="@container absolute bottom-0 left-0 h-full w-full transform bg-black bg-opacity-50 p-4 text-white opacity-0 duration-500 ease-in-out hover:opacity-100"
        href={`/seasons/${seriesId}/${season.season_number}`}
      ></a>

      <div className="flex h-fit w-full items-center  object-cover">
        <p className="w-full  text-center font-bold">{season.name}</p>
      </div>
    </div>
  )
}

export default SeasonCard
