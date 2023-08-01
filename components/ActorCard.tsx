import React, { useCallback } from "react";
import { useRouter } from "next/router";
import LazyImage from "./LazyImage";
import { CastMember } from "@/lib/interfaces";

const ActorCard: React.FC<CastMember> = (castMember) => {
  const router = useRouter();

  const redirectToSummary = useCallback(
    () => router.push(`/castMembers/${castMember.id}`),
    [router, castMember.id]
  );
    if(!castMember.profile_path) return (<div></div>)



  return (
    <div className="flex flex-col gap-0 relative min-w-[100px] h-[200px] text-white text-xs rounded shadow overflow-hidden">
      <LazyImage
        src={
          castMember.profile_path
            ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
            : "/blank-profile-picture.png"
        }
        alt={castMember.name}
      />
      <p>{castMember.name}</p>
      <p className="text-[.75rem]">as</p>
      {castMember.character && <p>{castMember.character}</p>}
      <div className="@container absolute bottom-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100">
        <button
          onClick={redirectToSummary}
          className="absolute bottom-0 mt-2 px-4 py-2 bg-blue-500 rounded text-white"
        >
          More!
        </button>
      </div>
    </div>

  );
};

export default ActorCard;

