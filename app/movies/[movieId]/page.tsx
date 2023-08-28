import React, { useState, useEffect } from 'react'
import { HiChevronLeft } from 'react-icons/hi'
import Spinner from '@/app/_components/Spinner'
import { useSearchParams } from 'next/navigation'
import useMovie from '@/hooks/useMovie'
import useRecommendations from '@/hooks/useRecommendations'
import Slider from '@/app/_components/sliders/Slider'
import ActorSlider from '@/app/_components/sliders/ActorSlider'
import CrewSlider from '@/app/_components/sliders/CrewSlider'
import MovieDetailsTable from '@/app/_components/tables/MovieDetailsTable'
import Image from 'next/image'
const token = process.env.TMDB_TOKEN

async function getMovies(movieId: string) {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=release_dates`,
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
async function getRecommendations(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US`,
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
async function getCredits(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
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
  params: { movieId },
}: {
  params: { movieId: string }
}) {
  const detailsData = getMovies(movieId)
  const recommendationsData = getRecommendations(movieId)
  const creditsData = await getCredits(movieId)

  const [details, recommendations, credits] = await Promise.all([
    detailsData,
    recommendationsData,
    creditsData,
  ])

  const movieRating =
    details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === 'US')
      ?.release_dates[0].certification || 'NR'

  console.log(credits)
  return (
    <div className="flex h-auto w-full flex-col gap-10 bg-background">
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

        <div className="col-span-auto flex flex-col text-foreground ">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-bold md:text-3xl  ">
              {details?.original_title}{' '}
            </h1>

            <div className="text-md flex  w-full flex-row space-x-5 align-middle lg:text-lg">
              <h2>
                {movieRating && (
                  <p className="text-md self-center">{movieRating}</p>
                )}
              </h2>
              <h1>
                {details?.release_date
                  ? details?.release_date.substring(0, 4)
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
            {details && <MovieDetailsTable {...details} />}
          </div>
        </div>
      </div>

      <section className="relative flex h-screen w-screen flex-wrap items-center text-foreground p-5">
        <div className="mx-auto flex w-full  flex-col">
          <h2 className=" py-2 text-center text-2xl font-bold  tracking-tight ">
            Credits
          </h2>
          <div className="mx-auto flex flex-col gap-28 text-center lg:flex-row">
            <div className=" flex h-full  max-w-[500px]  flex-col">
              <h3 className="text-xl font-bold tracking-tight  ">Cast</h3>
              <div className="w-full justify-center align-middle ">
                {credits && <Slider list={credits.cast} type={'cast'} />}
              </div>
            </div>

            <div className="flex h-full max-w-[500px] flex-col ">
              <h3 className="text-xl font-bold tracking-tight  ">Crew</h3>
              <div className=" w-full justify-center space-x-5 align-middle ">
                {credits && <Slider list={credits.crew} type={'crew'} />}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto my-5 flex w-fit flex-col overflow-hidden ">
          <h2 className="text-center text-2xl py-2 font-bold  tracking-tight">
            Recommendations
          </h2>
          {recommendations?.results && (
            <Slider list={recommendations.results} type="movie" />
          )}
        </div>
      </section>
    </div>
  )
}
