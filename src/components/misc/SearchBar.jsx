import React, { useState, useEffect } from "react";
import useAppContext from "../../context/useAppContext";
import SearchItem from "./SearchItem";

export function SearchBar() {
  // Get the clothing items from the context to filter
  const { clothingItems } = useAppContext();

  // State to manage the search bar
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFocus = () => setIsFocused(true);

  // Handle blur event to close the search results when clicking outside the search bar
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsFocused(false);
      setInputValue("");
      setFilteredItems([]);
    }
  };

  // Handle change event to update the input value and filter the items
  const handleChange = (e) => {
    setInputValue(e.target.value);
    filterItems(e.target.value);
  };

  // Filter the items based on the search term
  const filterItems = (searchTerm) => {
    // NOTICE: The search is very basic as I has to use chatGPT, so in the future, we can improve this.
    if (searchTerm === "") {
      setFilteredItems([]);
    } else {
      const filtered = clothingItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  // Clear the filtered items when the clothing items change
  useEffect(() => {
    setFilteredItems([]);
  }, [clothingItems]);

  return (
    <div className="relative max-w-full" onBlur={handleBlur}>
      <div className="flex items-center justify-end w-full h-full transition-all duration-500">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          className={`h-12 px-4 transition-all duration-500 outline-none rounded-md ${
            isFocused || inputValue
              ? "w-full bg-foreground rounded-b-none border-b-2 border-component-border dark:border-dark-component-border dark:bg-dark-foreground dark:text-dark-primary-tw text-primary-tw"
              : "w-fit bg-transparent text-primary-tw"
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
      {/* Show the search results when the search bar is focused and there are items to show */}
      {isFocused && filteredItems.length > 0 && (
        <div className="absolute z-50 w-full py-1 shadow-lg rounded-b-md bg-foreground dark:bg-dark-foreground">
          {filteredItems.map((item) => (
            <SearchItem key={item.id} clothingItem={item} />
          ))}
        </div>
      )}
    </div>
  );
}
