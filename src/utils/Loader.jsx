const Loader = ({ text = "Scanning..." }) => {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-blue-600">
        <svg
          className="animate-spin h-10 w-10 mb-4 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p className="text-sm font-medium">{text}</p>
      </div>
    );
  };
  
  export default Loader;
  