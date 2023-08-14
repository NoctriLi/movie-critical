
import { TVDetails, SeasonDetails } from "@/lib/interfaces";
import SeasonCard from "../cards/SeasonCard";

let address = process.env.WEB_LOC;

type SeasonBoxProps = {
  seasons: any;
  id: string;
};



const SeasonBox: React.FC<SeasonBoxProps> = async ({ seasons, id }) => {
  const details: TVDetails = seasons;
  console.log(details);
  console.log(id);
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="slider">
        {details.seasons.map((season) => (
          <SeasonCard key={season.id} seasonDetails={[season, id]} />
        ))}
      </div>
    </div>
  );
};

export default SeasonBox;
