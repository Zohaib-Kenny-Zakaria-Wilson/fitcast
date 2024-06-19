import React, { useState } from "react";

export function SearchBar() {
  // State to manage the focus state of the input
  const [isFocused, setIsFocused] = useState(false);
  
  // State to manage the input value so search bar doesn't lose focus when having text
  const [inputValue, setInputValue] = useState('');

  // Function to handle the focus event and set the focus state to true
  const handleFocus = () => setIsFocused(true);

  // Function to handle the blur event and set the focus state to false when the input value is empty
  const handleBlur = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  // Function to handle the input change event and set the input value
  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div className="relative flex items-center justify-end flex-1 w-full h-full transition-all duration-500">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // NOTICE: ChatGPT generated code
        className={`h-full px-3 transition-all duration-500 outline-none rounded-md ${
          isFocused || inputValue ? 'w-full bg-foreground dark:bg-dark-foreground dark:text-dark-primary-tw text-primary-tw' : 'w-fit bg-transparent text-primary-tw'
        }`}
      />
      <div className="absolute flex items-center h-full pointer-events-none right-3">
        <svg
          className="w-6 h-6 text-primary-tw dark:text-dark-primary-tw"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          />
        </svg>
      </div>
    </div>
  );
}
