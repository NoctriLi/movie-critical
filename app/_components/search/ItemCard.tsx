import React from "react";
import Image from "next/image";
import Link from "next/link";

const twoDecimals = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const capFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const stringLimit = (str: string) => {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

const ItemCard = ({ item }: { item: any }) => {
    let url = "/";
    if(item.media_type === "person"){
        url += `people/${item.id}`
    } else if(item.media_type === "movie"){
        url += `movies/${item.id}`
    } else if(item.media_type === "tv"){
        url += `tvseries/${item.id}`
    }


  return (
    <Link href={url} className="relative flex w-full space-x-5 min-h-[200px] p-2 justify-start border-8 rounded bg-zinc-700 border-zinc-800">
      <div className="relative flex">
        <Image
          src={
            item.profile_path
              ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
              : item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "/blank-profile-picture.png"
          }
          loading="lazy"
          width={100}
          height={150}
          alt="poster"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/blank-profile-picture.png";
          }}
          className="max-w-[100px] object-contain mx-auto rounded "
        />
      </div>
      <div className="relative flex flex-col gap-0 min-w-[100px] h-fit w-full text-white text-xs rounded">
        {item.media_type === "person" && (
          <>
            <div className="relative ">
              <div className="flex flex-row py-1 w-full">
                <p className="text-[.75rem]">{item.known_for_department}</p>
              </div>
              <h1 className="text-xl px-5">{item.name}</h1>

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">
                  <span className="font-bold">Popularity: </span>
                  {twoDecimals(item.popularity)}
                </p>
              </div>
            </div>
          </>
        )}
        {item.media_type === "movie" && (
          <>
            <div className="relative">
              <p className="text-[.75rem]">{capFirst(item.media_type)}</p>

              <h1 className="text-xl px-2 sm:px-5">{item.title}</h1>

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">
                  <span className="font-bold">Popularity: </span>
                  {twoDecimals(item.popularity)}
                </p>
              </div>
            </div>

            <div className=" bg-zinc-600 p-5 h-[100px] sm:h-full shadow rounded overflow-hidden">
              <p>{stringLimit(item.overview)}</p>
            </div>
          </>
        )}
        {item.media_type === "tv" && (
          <>
            <div className="flex flex-col py-1">
              <p className="text-[.75rem]">{capFirst(item.media_type)}</p>
              <h1 className="text-xl px-5">{item.name}</h1>
            </div>

            <div className="flex flex-col py-1">
              <p className="text-[.75rem]">
                <span className="font-bold">Popularity: </span>
                {twoDecimals(item.popularity)}
              </p>
            </div>
            <div className=" bg-zinc-600 p-5 h-[100px] sm:h-full shadow rounded overflow-hidden">
              <p>{stringLimit(item.overview)}</p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
export default ItemCard;
