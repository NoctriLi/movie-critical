import React from 'react'

import Spinner from '@/app/_components/Spinner'
import { useSearchParams } from 'next/navigation'
import Slider from '@/app/_components/sliders/Slider'
import ActorSlider from '@/app/_components/sliders/ActorSlider'
import CrewSlider from '@/app/_components/sliders/CrewSlider'
import TvDetailsTable from '@/app/_components/tables/TvDetailsTable'
import { TVDetails } from '@/lib/interfaces'
import SeasonBox from '@/app/_components/grids/SeasonBox'
import Image from 'next/image'

const address = process.env.WEB_LOC
const token = process.env.TMDB_TOKEN

async function getTvSeries(seriesId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return res.json()
}
async function getRecommendations(seriesId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/recommendations?language=en-US`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return res.json()
}
async function getCredits(seriesId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/credits`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return res.json()
}

export default async function Page({
  params,
}: {
  params: { seriesId: string }
}) {
  const seriesId = params.seriesId
  const details: TVDetails = await getTvSeries(seriesId)
  const recommendations = await getRecommendations(seriesId)
  const credits = await getCredits(seriesId)

  // const seriesRating =
  //   details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
  //     ?.release_dates[0].certification || "NR";

  return (
    <div className="flex h-[300vh] w-full flex-col">
      <div className="row-span-1 grid grid-cols-1 gap-5 bg-zinc-950 p-5 md:grid-cols-2 ">
        <div className=" col-span-auto ">
          {details?.poster_path == undefined ? (
            <Image
              src={`/blank-profile-picture.png`}
              loading="lazy"
              width={300}
              height={400}
              alt="poster"
              className="mx-auto w-[500px] rounded"
            />
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
              loading="eager"
              priority={true}
              width={300}
              height={400}
              alt="poster"
              className="mx-auto w-[500px] rounded"
            />
          )}
        </div>

        <div className="col-span-auto flex flex-col text-white ">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-bold md:text-3xl  ">
              {details?.name}{' '}
            </h1>

            <div className="text-md flex  w-full flex-row space-x-5 align-middle lg:text-lg">
              <h2>
                {/* {seriesRating && (
                  <p className="text-md self-center">{seriesRating}</p>
                )} */}
              </h2>
              <h1>
                {details?.first_air_date
                  ? details?.first_air_date.substring(0, 4)
                  : '????'}
              </h1>

              <p>
                {details?.genres &&
                  details?.genres.map((genre: any) => genre.name).join(', ')}
              </p>
            </div>
          </div>

          <div className="py-3">
            <div className="flex py-2">
              <h2 className="py-2 text-xs">
                TMDB Rating: {details?.vote_average}
              </h2>
              <p className="text-[.6rem]">({details?.vote_count} votes)</p>
            </div>
            <div className="flex flex-col pb-10 pt-5">
              <h2 className="py-2 text-lg">Overview:</h2>
              <p className="px-5 text-sm">{details?.overview}</p>
            </div>
          </div>
          <div className="py-2">
            {details && <TvDetailsTable {...details} />}
          </div>
        </div>
      </div>

      <section className="relative flex h-screen w-screen flex-wrap items-center p-5 text-foreground">
        
        <div className="mx-auto flex w-full flex-col overflow-hidden">
          <h2 className=" py-2 text-center text-2xl font-bold tracking-tight ">
            Seasons
          </h2>
          <div className="relative mx-auto flex w-full flex-col overflow-auto text-center lg:flex-row">
            {details.seasons?.length > 0 && <Slider list={details.seasons} type={"season"} id={seriesId} />}
          </div>
        </div>

        <div className="mx-auto flex w-full  flex-col">
          <h2 className=" py-2 text-center text-2xl font-bold tracking-tight ">
            Credits
          </h2>

          <div className="mx-auto flex flex-col gap-28 text-center lg:flex-row">
            {credits.cast.length > 0 && (
              <div className=" flex h-full  max-w-[500px]  flex-col">
                <h3 className="text-xl font-bold tracking-tight ">Cast</h3>
                <div className=" w-full justify-center space-x-5 align-middle ">
                  <Slider list={credits.cast} type={'cast'} />
                </div>
              </div>
            )}

            {credits.crew.length > 0 && (
              <div className="flex h-full max-w-[500px] flex-col ">
                <h3 className="text-xl font-bold tracking-tight ">Crew</h3>
                <div className=" w-full justify-center space-x-5 align-middle ">
                  <Slider list={credits.crew} type={'crew'} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative mx-auto flex w-fit flex-col overflow-hidden ">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Recommendations
          </h2>
          {recommendations && (
            <Slider list={recommendations.results} type={'tv'} />
          )}
        </div>
      </section>
    </div>
  )
}
