import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { CrewMember } from "@/lib/interfaces";
import LazyImage from "@/app/_components/LazyImage";

interface Image {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: Image) => {
  return `https://example.com/${src}?w=${width}&q=${
    quality || "/blank-profile-picture.png"
  }`;
};

const CrewCard: React.FC<any> = (crewMember) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${crewMember.id}`),
  //   [router, crewMember.id]
  // );
  return (
    <div className="flex flex-col relative gap-0 min-w-[100px] h-fit text-white text-xs rounded shadow ">
      <div className="relative">
        <LazyImage
          src={
            crewMember.profile_path
              ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
              : "/blank-profile-picture.png"
          }
          alt={crewMember.name}
        />
        <div className="@container absolute bottom-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100">
        <Link
            href={`/people/${crewMember.id}`}
            
            className="absolute bottom-0 mt-2 px-4 py-2 bg-zinc-800 rounded text-white"
        >More...</Link>
        </div>
      </div>

      <div className="flex flex-col py-2">
        <p className="text-white">{crewMember.name}</p>
        {crewMember && <p className="text-white">{crewMember.job}</p>}
      </div>
    </div>
  );
};

export default CrewCard;
