
import { SeasonDetails } from "@/lib/interfaces";
import SeasonCard from "../cards/SeasonCard";
import EpisodeCard from "../cards/EpisodeCard";

let address = process.env.WEB_LOC;

type SeasonBoxProps = {
  episodes: any;
  id: string;
};



const EpisodeBox: React.FC<SeasonBoxProps> = async ({ episodes, id }) => {
  const details: SeasonDetails = episodes;
  console.log(details);
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="slider">
        {details.episodes.map((season) => (
          <EpisodeCard key={season.id} episodeDetails={[season, id]} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeBox;
