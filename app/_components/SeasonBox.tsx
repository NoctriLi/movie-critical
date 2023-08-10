"use  client"
import { TVDetails, SeasonDetails } from "@/lib/interfaces";
import SeasonCard from "./SeasonCard";

let address = process.env.WEB_LOC;

type SeasonBoxProps = {
  seriesId: string;
};

async function getTvSeries(seriesId: string) {
  const res = await fetch(`${address}/api/tvseries/${seriesId}`, {
    method: "GET",
  });
  return res.json();
}

const SeasonBox: React.FC<SeasonBoxProps> = async ({ seriesId }) => {
  console.log(seriesId);
  const details: TVDetails = await getTvSeries(seriesId);
  console.log(details);
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="slider">
        {details.seasons.map((season) => (
          <SeasonCard key={season.id} season={season} seriesId={seriesId} />
        ))}
      </div>
    </div>
  );
};

export default SeasonBox;
