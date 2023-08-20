interface BackButtonProps {
  handleClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ handleClick }) => {
  return (

    <button className="absolute top-0 left-0 p-2 w-1/2 h-full  z-[201]  text-white opacity-40 rounded" style={{WebkitTapHighlightColor: 'transparent'}} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="relative  w-20 shadow-xl bg-black bg-opacity-10 shadow-black "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </button>

  );
};

export default BackButton;
