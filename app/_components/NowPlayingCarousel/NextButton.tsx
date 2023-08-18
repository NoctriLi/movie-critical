
interface NextButtonProps {
  handleClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ handleClick }) => {
  return (
    <>
      <button className="absolute top-1/3 right-5 p-2 h-10 w-10 bg-zinc-600 opacity-50 transform translate-y-1/2" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default NextButton;
