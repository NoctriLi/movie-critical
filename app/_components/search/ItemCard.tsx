import React from "react";
import Image from "next/image";

const ItemCard = ({ item }: { item: any }) => {
  return (
    <div className="relative flex w-full space-x-5 min-h-[200px] p-2 justify-start border-8 rounded border-zinc-800">
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
          className="max-w-[100px] object-cover mx-auto rounded "
        />
      </div>
      <div className="relative flex flex-col gap-0 min-w-[100px] h-fit w-full text-white text-xs rounded">
        {item.media_type === "person" && (
                <>
            <div className="relative flex flex-col shadow space-y-5">

              <div className="flex flex-row py-1 w-full">
                <p className="text-[.75rem]">{item.known_for_department}</p>
                <h1 className="text-xl">{item.name}</h1>
              </div>

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">Popularity: {item.popularity}</p>
              </div>

            </div>
                </>
        

        )}
        {item.media_type === "movie" && (
            <>
                
            <div className="flex flex-col p-4 shadow space-y-5">

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">{item.media_type}</p>
                <h1 className="text-xl">{item.title}</h1>
              </div>

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">Popularity: {item.popularity}</p>
              </div>

            </div>

            <div className="shadow">
                
            <p>{item.overview}</p>
            </div>
            
            </>
   
        )}
        {item.media_type === "tv" && (
            <>
            <div className="flex flex-col py-1">
              <p className="text-[.75rem]">{item.media_type}</p>
              <h1 className="text-xl">{item.name}</h1>
            </div>

            <div className="flex flex-col py-1">
              <p className="text-[.75rem]">Popularity: {item.popularity}</p>
            </div>
                </>
        )}
        </div>
      </div>
  );
};
export default ItemCard;
