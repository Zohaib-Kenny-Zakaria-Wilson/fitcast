import React from 'react';

export function DarkModeButton({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
      <svg
        className="w-8 h-8 text-primary-tw dark:text-dark-primary-tw"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56"
        />
      </svg>
    </button>
  );
}
