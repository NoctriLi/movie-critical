
import { Credits } from "@/lib/interfaces";
import ActorCard from "./ActorCard";





const ActorSlider: React.FC<Credits> = (credits) => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
 
      <div className="slider">

        {credits.cast.map(cast =>
          <ActorCard key={cast.id} {...cast}/> )}
        

      </div>
    </div>



  );
};

export default ActorSlider;
