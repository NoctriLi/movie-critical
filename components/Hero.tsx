import Carousel from "./carousel/Carousel";

import {Movies} from "@/lib/interfaces";

interface Props {
  movies: Movies;
}

const Hero: React.FC<Movies> = (movies) => {
  return (
    <div className="hero p-2">
      <Carousel {...movies}/>
    </div>
  );
};

export default Hero;
