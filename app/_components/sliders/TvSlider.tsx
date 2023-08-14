
import { TVShow } from "@/lib/interfaces";
import TvCard from "../cards/TvCard";

interface Props {
    "page": number,
    "results": TVShow[],
    "total_pages": number,
    "total_results": number

}

const MovieSlider: React.FC<Props> = (tvshows) => {
  console.log(tvshows)
  
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
 
      <div className="slider">

        {tvshows.results.map((show, i) =>
          <TvCard key={show.id} {...show}/> )}
        

      </div>
    </div>



  );
};

export default MovieSlider;
