
import { Credits } from "@/lib/interfaces";
import ActorCard from "./ActorCard";





const ActorSlider: React.FC<Credits> = (credits) => {

 
  return (

 
      <div className="slider">
        {credits.cast.map(cast =>
        <div key={cast.id}>
          <ActorCard {...cast}/> 
          </div>
        )}
      </div>



  );
};

export default ActorSlider;
