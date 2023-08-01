import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { CastMember } from "@/lib/interfaces";

const ActorCard: React.FC<CastMember> = (castMember) => {
  const router = useRouter();

  const redirectToSummary = useCallback(
    () => router.push(`/castMembers/${castMember.id}`),
    [router, castMember.id]
  );
    if(!castMember.profile_path) return (<div></div>)



  return (
    <div className="relative min-w-[250px] h-fit text-white rounded shadow overflow-hidden">
      <p className="text-white">{castMember.name}</p>
      <p>as</p>
      {castMember.character && <p className="text-white">{castMember.character}</p>}
      <Image
        src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
        alt="Card"
        width={300}
        height={450}
        className="w-full h-full object-cover"
      />
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

