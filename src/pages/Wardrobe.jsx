import React, { useState } from "react";
import useAppContext from "../context/useAppContext";
import ClothingItem from "../components/ItemComponents/ClothingItem";
import AddItem from "../components/ItemComponents/AddItem";
import { Link } from "react-router-dom";
import NavBarWardrobe from "../components/PageComponents/NavBarWardrobe";

export default function Wardrobe() {
  // Get clothing items from context and set filter and sort states
  const { clothingItems } = useAppContext();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Filter clothing items
  const filteredClothingItems = clothingItems.filter((item) => {
    if (!filter) return true;
    return item.type.toLowerCase() === filter.toLowerCase();
  });

  // Sort clothing items
  const sortedClothingItems = filteredClothingItems.sort((a, b) => {
    if (sort === "nameAsc") {
      return a.name.localeCompare(b.name);
    } else if (sort === "nameDesc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <>
      <div className="flex flex-col w-full min-h-screen p-6 rounded-lg lg:py-10 lg:px-14 gap-9 dark:bg-dark-background bg-background">
        <NavBarWardrobe />
        {/* Wardrobe Container */}
        <main className="flex flex-col w-full gap-8">
          {/* Wardrobe Header */}
          <div className="flex flex-col justify-between w-full gap-12 sm:flex-row lg:gap-0">
            {/* Wardrobe Header Left */}
            <div className="flex flex-col items-center order-2 w-full gap-2 sm:gap-4 sm:flex-row sm:order-1 sm:w-fit">
              {/* Wardrobe Title */}
              <p className="text-xl font-medium xl:text-2xl text-primary-tw dark:text-dark-primary-tw">
                Wardrobe
              </p>
              {/* Filter and Sort Selects */}
              <div className="flex justify-center w-full gap-8 sm:w-fit sm:gap-4">
                <div className=" select-wrapper">
                  {/* Filter Select */}
                  <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="select-no-arrow py-1 text-sm md:text-base px-4 min-h-full rounded-sm text-primary-tw dark:text-dark-background bg-foreground border-component-border dark:bg-dark-primary-tw border-b-2 dark:border-foreground hover:dark:border-transparent hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100"
                  >
                    <option className="w-fit" value="">
                      Filter
                    </option>
                    <option value="shirt">Shirts</option>
                    <option value="pants">Pants</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
                {/* Sort Select */}
                <div className="select-wrapper">
                  <select
                    value={sort}
                    onChange={handleSortChange}
                    className="select-no-arrow py-1 text-sm md:text-base px-4 min-h-full rounded-sm text-primary-tw dark:text-dark-background bg-foreground border-component-border dark:bg-dark-primary-tw border-b-2 dark:border-foreground hover:dark:border-transparent hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100"
                  >
                    <option value="">Sort</option>
                    <option value="nameAsc">Name (A-Z)</option>
                    <option value="nameDesc">Name (Z-A)</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Wardrobe Header Right */}
            <div className="flex justify-between w-full gap-4 sm:order-2 sm:w-fit">
              {/* Add Item Button */}
              <AddItem />
              {/* Today's Outfit Button */}
              <Link className="h-full" to="/daily">
                <button className="py-1 text-sm md:text-base px-4 min-h-full rounded-sm text-primary-tw dark:text-dark-background bg-foreground border-component-border dark:bg-dark-primary-tw border-b-2 dark:border-foreground hover:dark:border-transparent hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100">
                  Today's Outfit
                </button>
              </Link>
            </div>
          </div>
          {/* Render Clothing Items or Empty Message */}
          {sortedClothingItems && sortedClothingItems.length > 0 ? (
            <div className="grid w-full min-w-full grid-cols-1 gap-6 p-10 border-b-4 rounded-md lg:px-12 lg:py-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-foreground dark:bg-dark-foreground border-component-border dark:border-dark-component-border">
              {sortedClothingItems.map((clothingItem) => (
                <ClothingItem
                  key={clothingItem.id}
                  clothingItem={clothingItem}
                />
              ))}
            </div>
          ) : (
            <div className="flex w-full p-8 rounded-md bg-foreground dark:bg-dark-foreground">
              {/* Empty Wardrobe Message */}
              <p className="w-full text-center dark:text-dark-primary-tw text-primary-tw">
                Your wardrobe is empty. Add some items!
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
