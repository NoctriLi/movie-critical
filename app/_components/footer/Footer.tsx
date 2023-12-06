

const Footer = () => {
  return (
    <div className="flex h-20 w-full items-center justify-center mt-40 bg-gray-800">
      <h1 className="text-sm text-white">
        This product uses the TMDB API but is not endorsed or certified by TMDB
      </h1>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        width={50}
        height={50}
        loading="lazy"
        alt="TMDB Logo"
        className="object-contain p-2"
      />
    </div>
  )
}

export default Footer
