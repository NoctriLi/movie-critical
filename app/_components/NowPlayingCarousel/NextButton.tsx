
interface NextButtonProps {
  handleClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ handleClick }) => {
  return (
      <button className="absolute top-0 right-0 p-2 h-full w-1/2 text-white opacity-40 rounded" style={{WebkitTapHighlightColor: 'transparent'}} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="relative left-full -translate-x-full w-20 shadow-xl bg-black bg-opacity-10 shadow-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
  );
};

export default NextButton;
