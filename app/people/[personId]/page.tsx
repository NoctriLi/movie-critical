import React from 'react'

import Slider from '@/app/_components/sliders/Slider'


const token = process.env.TMDB_TOKEN

let address = process.env.WEB_LOC

function formatDate(date: Date) {
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  return `${mo}/${da}/${ye}`
}

function calculateAge({
  birthday,
  deathday,
}: {
  birthday: Date
  deathday: any
}): number {
  const today = new Date()
  if (deathday !== 'Alive') {
    return deathday.getFullYear() - birthday.getFullYear()
  }
  let age = today.getFullYear() - birthday.getFullYear()
  const monthDiff = today.getMonth() - birthday.getMonth()
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--
  }
  return age
}
function parseDate(date: string) {
  const parts = date.split('-')
  const year = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  const day = parseInt(parts[2], 10)
  return new Date(year, month, day)
}

const getPerson = async (personId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?append_to_response=movie_credits&language=en-US`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  )
  return res.json()
}

export default async function Page({
  params,
}: {
  params: { personId: string }
}) {
  const personId = params.personId
  const details = await getPerson(personId as string)

  const name = details?.name ? details.name : 'N/A'
  const birthday = details?.birthday ? parseDate(details?.birthday) : 'N/A'
  const deathday = details?.deathday ? parseDate(details?.deathday) : 'Alive'
  const place_of_birth = details?.place_of_birth
    ? details?.place_of_birth
    : 'N/A'
  const department = details?.known_for_department
    ? details?.known_for_department
    : 'N/A'
  const biography = details?.biography ? details?.biography : 'N/A'
  const popularity = details?.popularity ? details?.popularity : 'N/A'
  const image_path = details?.profile_path
  const site = details?.homepage ? details?.homepage : 'N/A'

  let age = 0
  if (birthday !== 'N/A') {
    age = calculateAge({ birthday, deathday })
  }

  // const movieRating =
  //   details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
  //     ?.release_dates[0].certification || "NR";

  return (
    <div className="flex h-fit w-full flex-col py-5">
      <div className="row-span-1 grid grid-cols-1 gap-5 bg-zinc-950 p-5 md:grid-cols-2 ">
        <div className=" col-span-auto ">
          {details?.profile_path == undefined ? (
            <img
              src={`/blank-profile-picture.png`}
              loading="lazy"
              width={300}
              height={400}
              alt="poster"
              className="mx-auto w-[500px] rounded"
            />
          ) : (
            <img
              src={
                image_path
                  ? `https://image.tmdb.org/t/p/w500${image_path}`
                  : `/blank-profile-picture.png`
              }
              loading="eager"
              width={300}
              height={400}
              alt="poster"
              className="mx-auto w-[500px] rounded"
            />
          )}
        </div>

        <div className="col-span-auto flex flex-col text-white ">
          <div className="space-between flex flex-row">
            <div className="flex w-full flex-col">
              <h1 className="text-2xl font-bold md:text-3xl  ">{name} </h1>

              <div className="text-md flex  w-full flex-col space-x-5 align-middle lg:text-lg">
                <h2>{department}</h2>
                <p></p>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex flex-col">
                  <p>Birthday:</p>
                  <p className="ps-2 text-sm">
                    {birthday != 'N/A' ? birthday.toDateString() : birthday}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p>Status:</p>
                  <p className="ps-2 text-sm">
                    {deathday != 'Alive'
                      ? 'Deceased ' + deathday.toDateString()
                      : 'Alive'}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="">Born in: </p>
                  <p className="ps-2 text-sm">{place_of_birth}</p>
                </div>
                <div className="flex flex-col">
                  <p>Site:</p>
                  {site != 'N/A' ? (
                    <a className="ps-2 text-sm text-blue-200" href={site}>
                      {site}
                    </a>
                  ) : (
                    <p className="ps-2 text-sm">{site}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex py-2">
              <h2 className="py-2 text-end text-xs">
                TMDB Rating:{' '}
                {popularity != 'N/A' ? popularity.toFixed(1) : popularity}
              </h2>
            </div>
          </div>
          <div className="py-3">
            <div className="flex flex-col pb-10 pt-5">
              <h2 className="py-2 text-lg">Bio:</h2>
              <p className="px-5 text-justify indent-3 text-sm leading-6">
                {biography && biography}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="relative flex h-fit w-screen flex-wrap items-start p-5 text-foreground">
        <div className="mx-auto flex w-full flex-col overflow-hidden">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Roles
          </h2>
          {details?.movie_credits && (
            <Slider list={details.movie_credits.cast} type={'moviecast'} />
          )}
        </div>
      </section>
    </div>
  )
}
