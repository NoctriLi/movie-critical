
"use client"
import { use, useEffect, useState } from "react";
import Spinner from "./Spinner";
import { set } from "lodash";
import Image from "next/image";



const LazyImage = ({ src, alt, ...props }: any) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {

    setImgSrc("/public/images/blank-profile-picture.png");
  };

  return (
    <div className="relative max-h-[262px] overflow-hidden">
      {isLoaded && <Spinner visible={!isLoaded} />}
        <Image
          {...props}
          src={imgSrc}
          alt={alt}
          height={300}
          width={200}

          style={{ height: "auto", width: "auto", minHeight: "100%", minWidth: "100%"  }}
          // onError={handleError}
          loading="lazy"
          // onLoad={handleLoad}
        />

    </div>
  );
};

export default LazyImage;
