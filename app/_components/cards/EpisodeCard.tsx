import React, { useCallback } from 'react'
// import { useRouter } from "next/router";


interface Image {
  src: string
  width: number
  quality?: number
}

const EpisodeCard = ({ episode, seriesId }: any) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${episode.id}`),
  //   [router, episode.id]
  // );

  return (
    <div className="relative flex h-fit min-w-[175px] snap-center flex-col overflow-hidden rounded  shadow">
      {episode.still_path != undefined ? (
        <img
          src={
            episode.still_path
              ? `https://image.tmdb.org/t/p/w500${episode.still_path}`
              : '/blank-profile-picture.png'
          }
          alt={episode.name}
          height={300}
          width={200}
          className="object-cover"
          loading="lazy"
          onError={(e) =>
            (e.currentTarget.src = '/public/images/blank-profile-picture.png')
          }
        />
      ) : (
        <div className="flex h-full w-full items-center  object-cover">
          <p className="w-full bg-primary-foreground text-center font-bold">
            {episode.name}
          </p>
        </div>
      )}
      <a
        className="@container absolute bottom-0 left-0 h-full w-full transform bg-black bg-opacity-50 p-4 text-white opacity-0 duration-500 ease-in-out hover:opacity-100"
        href={`/episodes/${seriesId}/${episode.season_number}/${episode.episode_number}`}
      ></a>

      <div className="flex h-fit w-full items-center object-cover p-1">
        <p className="w-full text-center font-bold">{episode.name}</p>
      </div>
    </div>
  )
}

export default EpisodeCard
