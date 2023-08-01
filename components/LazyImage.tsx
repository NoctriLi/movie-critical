// import Image from "next/image";
// import { useState } from "react";

// const MyImage = (props: any) => {
//   const { src, ...rest } = props;
//   const [imgSrc, setImgSrc] = useState('https://image.tmdb.org/t/p/w500' + src);
//   const handleError = () => {
//     setImgSrc("/public/images/blank-profile-picture.png");
//   };
//   if(src === undefined) handleError()
//   return (
//     <Image
//       {...rest}
//       src={`${imgSrc}`}
//       placeholder="blur"
//       blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACgSURBVChTdY9RC4IwFIX1BkpZr1ZPEf3/XxOIRBSTab2WStOuW9ftonvpY3DvztkZnFBWj+A/wNMyaG2M4YtltuumzfLLOctf75ol3xZSfpRSXXcTBUu+jV/kLTBaa7fN9n6bgmWXjosTeSBiCLBZJ8lqSd6UHos1bXu9i77vnUTEUXQ6HugxUJOyeg6IC4Dp0GeFLKnimKYcFeagRxxHPx7qUBCdQ6EpAAAAAElFTkSuQmCC
//   "
//       width={300}
//       height={450}
//       className="w-full h-full object-cover"
//       onError={handleError}
//     />
//   );
// };
// export default MyImage;
import { useState } from "react";

const LazyImage = ({ src, alt, ...props }:any) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc("/public/images/blank-profile-picture.png");
  };


  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover"
      onError={handleError}
      loading="lazy"
      
    />
  );
};

export default LazyImage;