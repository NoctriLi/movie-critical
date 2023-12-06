import React, { useCallback } from 'react'
// import { useRouter } from "next/router";
import Link from 'next/link'

import { ScrollArea } from '@/components/ui/scroll-area'
import { TVShow } from '@/lib/interfaces'

const TvCard: React.FC<TVShow> = (tvshow) => {
  return (
    <Link
    prefetch={false}
      href={`/tvseries/${tvshow.id}`}
      className="relative h-fit min-w-[175px] snap-center overflow-hidden rounded bg-white shadow"
    >
      {tvshow.poster_path != undefined ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
          alt={tvshow.name}
        />
      ) : (
        <div className="flex h-[262px] min-w-[175px] items-center bg-gray-400 object-cover">
          <h1 className="w-full text-center font-bold">{tvshow.name}</h1>
        </div>
      )}
      <div className="@container absolute bottom-0 left-0 h-full w-full transform bg-black bg-opacity-70 py-2 pe-3 text-white opacity-0 duration-500 ease-in-out hover:opacity-100">
        <ScrollArea className="font-bolder h-full w-full p-3 text-[.7rem]">
          {tvshow.overview}
        </ScrollArea>
      </div>
    </Link>
  )
}

export default TvCard
