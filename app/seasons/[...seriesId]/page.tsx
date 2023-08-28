import React from 'react'
import Spinner from '@/app/_components/Spinner'
import TvSlider from '@/app/_components/sliders/TvSlider'
import Slider from '@/app/_components/sliders/Slider'
import SeasonBox from '@/app/_components/grids/SeasonBox'
import { SeasonDetails } from '@/lib/interfaces'

import { GetServerSideProps } from 'next'
import Image from 'next/image'
import EpisodeBox from '@/app/_components/grids/EpisodeBox'

const token = process.env.TMDB_TOKEN
const address = process.env.WEB_LOC
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

async function getSeason(seriesId: string, season: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}?language=en-US`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  console.log(res)
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
async function getCredits(seriesId: string, season: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}/credits?language=en-US`,
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
  params: { seriesId: string; season: string }
}) {
  const seriesId = params.seriesId[0]
  const season = params.seriesId[1]
  console.log(seriesId, season)
  if (!seriesId || !season) {
    return <Spinner visible={true} />
  }
  const seriesDetails = await getTvSeries(seriesId)
  const details: SeasonDetails = await getSeason(seriesId, season)
  const recommendations = await getRecommendations(seriesId)
  const credits = await getCredits(seriesId, season)

  return (
    <div className="flex h-[300vh] w-full flex-col gap-10">
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
              <h2></h2>
              <h1>
                {details?.air_date ? details?.air_date.substring(0, 4) : '????'}
              </h1>
            </div>
          </div>

          <div className="py-3">
            <div className="flex py-2">
              <h2 className="py-2 text-xs">
                TMDB Rating: {details?.vote_average}
              </h2>
            </div>
            <div className="flex flex-col pb-10 pt-5">
              <h2 className="py-2 text-lg">Overview:</h2>
              <p className="px-5 text-sm">{details?.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full  flex-col">
        <h2 className=" py-2 text-center text-2xl font-bold  tracking-tight ">
          Episodes
        </h2>
        <div className="mx-auto flex flex-col gap-28 text-center lg:flex-row">
          {seriesId && <EpisodeBox episodes={details} id={seriesId} />}
        </div>
      </div>

      <div className="mx-auto flex w-full  flex-col">
        <h2 className=" py-2 text-center text-2xl font-bold  tracking-tight ">
          Seasons
        </h2>
        <div className="mx-auto flex flex-col gap-28 text-center lg:flex-row">
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
  )
}
