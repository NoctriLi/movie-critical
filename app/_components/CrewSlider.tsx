
import { Credits, CrewMember } from "@/lib/interfaces";
import CrewCard from "./CrewCard";





const CrewSlider: React.FC<Credits> = (credits) => {


  const combineLikeObjects = (arr: any[]) => {
    return arr.reduce((acc, item) => {
      let existing = acc.find((i:CrewMember) => i.id === item.id);
      if (existing) {
        existing.job += ", " + item.job;
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  };

 const crew = combineLikeObjects(credits.crew)


  // let crew = credits.crew.reduce((acc:CrewMember[], item:CrewMember) => {
  //   let existing = acc.find((i:CrewMember) => i.id === item.id ) ;
  //   if (existing) {
  //     existing.department += ", " + item.department;
  //   } else {
  //     acc.push(item);
  //   }
  //   return acc;
  // }, []);

    return (

   
        <div className="slider">
          
          {crew.map((cast: CrewMember) =>
          <div key={cast.id}>
            <CrewCard key={cast.id} {...cast}/> 
            </div>
            )}
        </div>

  
  
  
    );


};

export default CrewSlider;
