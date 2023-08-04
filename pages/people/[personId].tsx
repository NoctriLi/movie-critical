import React, { useState, useEffect } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import usePerson from "@/hooks/usePerson";
import useMovie from "@/hooks/useMovie";
import useRecommendations from "@/hooks/useRecommendations";
import MovieCastSlider from "@/components/MovieCastSlider";
import ActorSlider from "@/components/ActorSlider";
import CrewSlider from "@/components/CrewSlider";
import useCredits from "@/hooks/useCredits";
import MovieDetailsTable from "@/components/MovieDetailsTable";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function formatDate(date: Date) {
  console.log(date);

  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mo = new Intl.DateTimeFormat("en", { month: "numeric" }).format(date);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${mo}/${da}/${ye}`;
}
function calculateAge(birthday: Date, deathday: any) {
  const today = new Date();
  if (deathday !== "Alive") {
    return deathday.getFullYear() - birthday.getFullYear();
  }
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }
  return age;
}
function parseDate(date: string) {
  console.log(date);
  const parts = date.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  return new Date(year, month, day);
}

const Summary = () => {
  const router = useRouter();
  const { personId } = router.query;
  const { data: details } = usePerson(personId as string);

  const name = details?.name;
  const birthday = details?.birthday ? parseDate(details?.birthday) : "N/A";
  const deathday = details?.deathday ? parseDate(details?.deathday) : "Alive";
  const place_of_birth = details?.place_of_birth
    ? details?.place_of_birth
    : "N/A";
  const department = details?.known_for_department
    ? details?.known_for_department
    : "N/A";
  const biography = details?.biography ? details?.biography : "N/A";
  const popularity = details?.popularity ? details?.popularity : "N/A";
  const image_path = details?.profile_path;
  const site = details?.homepage ? details?.homepage : "N/A";


  let age = 0;
  if (birthday !== "N/A") {
    age = calculateAge(birthday, deathday);
  }
  console.log(age);

  // const movieRating =
  //   details?.release_dates?.results?.find((i: any) => i.iso_3166_1 === "US")
  //     ?.release_dates[0].certification || "NR";

  console.log(details);

  return (
    <div className="h-[300vh] w-full flex flex-col opacity-70 gap-10">
      <div className="row-span-1 bg-black p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" col-span-auto ">
          <img
            src={
              details?.profile_path
                ? `https://image.tmdb.org/t/p/w500${image_path}`
                : "/blank-profile-picture.png"
            }
            loading="lazy"
            alt="poster"
            className="w-[500px] mx-auto rounded"
          />
        </div>

        <div className="col-span-auto flex flex-col text-white ">
          <div className="flex flex-row space-between">
            <div className="flex flex-col w-full">
              <h1 className="text-2xl md:text-3xl font-bold  ">{name} </h1>

              <div className="flex flex-col  space-x-5 w-full align-middle text-md lg:text-lg">
                <h2>{department}</h2>
                <p></p>
              </div>
              <div className="flex flex-col p-5 gap-3">
                <div className="flex flex-col">
                  <p>Birthday:</p>
                  <p className="ps-2 text-sm">
                    {birthday != "N/A" ? birthday.toDateString() : birthday}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p>Status:</p>
                  <p className="ps-2 text-sm">
                    {deathday != "Alive"
                      ? "Deceased " + deathday.toDateString()
                      : "Alive"}
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <p className="">Born in: </p>
                  <p className="ps-2 text-sm">{place_of_birth}</p>
                </div>
                <div className="flex flex-col">
                  <p>Site:</p>
                  {site != "N/A" ? <a className="ps-2 text-sm text-blue-200" href={site}>{site}</a>: <p className="ps-2 text-sm">{site}</p>}
                </div>
              </div>
            </div>

            <div className="flex py-2">
              <h2 className="text-xs py-2 text-end">
                TMDB Rating:{" "}
                {popularity != "N/A" ? popularity.toFixed(1) : popularity}
              </h2>
            </div>
          </div>
          <div className="py-3">
            <div className="flex flex-col pt-5 pb-10">
              <h2 className="text-lg py-2">Bio:</h2>
              <p className="text-sm px-5 text-justify leading-6 indent-3">{biography}</p>
            </div>
          </div>
        </div>
      </div>


  
          {details?.movie_credits && <MovieCastSlider {...details?.movie_credits} /> }
      


    </div>
  );
};

export default Summary;