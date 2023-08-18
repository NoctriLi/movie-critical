interface BackButtonProps {
  handleClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ handleClick }) => {
  return (
    <>
      <button className="absolute top-1/3 left-5 p-2 w-10 h-10 bg-zinc-600 opacity-50 tranform translate-y-1/2" onClick={handleClick}>
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
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default BackButton;
