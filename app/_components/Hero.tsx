import Carousel from "./Carousel";

import {Movies} from "@/lib/interfaces";

interface Props {
  movies: Movies;
}

const Hero: React.FC<Movies> = (movies) => {
  return (
    <div className="hero p-2 w-100">
      <Carousel {...movies}/>
    </div>
  );
};

export default Hero;
