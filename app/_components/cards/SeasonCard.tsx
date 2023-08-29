import React, { useCallback } from 'react'
// import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
import { SeasonDetails } from '@/lib/interfaces'
import LazyImage from '@/app/_components/LazyImage'

interface Image {
  src: string
  width: number
  quality?: number
}

const SeasonCard = ({season, seriesId }: any) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${season.id}`),
  //   [router, season.id]
  // );
  console.log(seriesId)
  return (
    <div className="relative flex flex-col h-fit min-w-[175px] snap-center overflow-hidden rounded bg-white shadow">
     {season.poster_path != undefined ? ( <Image
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
      />) : (
        <div className='min-w-[175px] h-[262px] object-cover bg-gray-400 flex items-center'>
          <p className="w-full bg-primary-foreground text-center font-bold">
          </p>
        </div>
      )}
      <Link
        className="@container absolute bottom-0 left-0 h-full w-full transform bg-black bg-opacity-50 p-4 text-white opacity-0 duration-500 ease-in-out hover:opacity-100"
        href={`/seasons/${seriesId}/${season.season_number}`}
      ></Link>

      <div className="flex h-fit w-full items-center bg-primary object-cover">
        <p className="w-full bg-primary-foreground text-center font-bold">
          {season.name}
        </p>
      </div>
    </div>
  )
}

export default SeasonCard
