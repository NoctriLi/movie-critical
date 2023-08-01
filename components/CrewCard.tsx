import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { CrewMember } from "@/lib/interfaces";
import LazyImage from "@/components/LazyImage";
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
  const router = useRouter();

  const redirectToSummary = useCallback(
    () => router.push(`/crewMembers/${crewMember.id}`),
    [router, crewMember.id]
  );

  return (
    <div className="flex flex-col relative min-w-[100px] h-[200px] text-white text-xs rounded shadow overflow-hidden border">
      <LazyImage
        src={
          crewMember.profile_path
            ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
            : "/blank-profile-picture.png"
        }
        alt={crewMember.name}
      />
      <div>
        <p className="text-white">{crewMember.name}</p>
        {crewMember && <p className="text-white">{crewMember.department}</p>}
      </div>
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

export default CrewCard;
