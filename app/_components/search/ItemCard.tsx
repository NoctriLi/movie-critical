import React from "react";
import Image from "next/image";

const ItemCard = ({ item }: { item: any }) => {
  if (item.media_type === "person") {
    return (
      <div className="relative flex w-full h-full items-left">
        <div className="relative ">
          <Image
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : "/blank-profile-picture.png"
            }
            loading="lazy"
            width={300}
            height={400}
            alt="poster"
            className="w-24 mx-auto rounded"
          />
        </div>
        <div className="flex flex-col gap-0 relative min-w-[100px] h-fit text-white text-xs rounded shadow">
          <div className="flex flex-col py-1">
            <p>{item.name}</p>
            <p className="text-[.75rem]">{item.known_for_department}</p>
          </div>
        </div>
      </div>
    );
  } else if (item.media_type === "movie") {
    return (
      <div className="flex w-full h-full">
        <Image
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "/blank-profile-picture.png"
          }
          loading="lazy"
          width={300}
          height={400}
          alt="poster"
          className="w-24 mx-auto rounded"
        />
        <div className="flex flex-col gap-0 relative min-w-[100px] h-fit text-white text-xs rounded shadow">
          <div className="flex flex-col py-1">
            <p>{item.title}</p>
            <p className="text-[.75rem]">{item.release_date}</p>
          </div>
        </div>
      </div>
    );
  } else if (item.media_type === "tv") {
    return (
      <div className="flex w-full h-full">
        <Image
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "/blank-profile-picture.png"
          }
          loading="lazy"
          width={300}
          height={400}
          alt="poster"
          className="w-24 mx-auto rounded"
        />
        <div className="flex flex-col gap-0 relative min-w-[100px] h-fit text-white text-xs rounded shadow">
          <div className="flex flex-col py-1">
            <p>{item.name}</p>
            <p className="text-[.75rem]">{item.first_air_date}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full h-full">
        <Image
          src={"/blank-profile-picture.png"}
          loading="lazy"
          width={300}
          height={400}
          alt="poster"
          className="w-24 mx-auto rounded"
        />
        <div className="flex flex-col gap-0 relative min-w-[100px] h-fit text-white text-xs rounded shadow">
          <div className="flex flex-col py-1">
            <p>N/A</p>
          </div>
        </div>
      </div>
    );
  }
};
export default ItemCard;
