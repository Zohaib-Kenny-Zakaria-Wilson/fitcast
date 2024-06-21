import React, { useState } from "react";
import useAppContext from "../context/useAppContext";
import ClothingItem from "../components/ItemComponents/ClothingItem";
import AddItem from "../components/ItemComponents/AddItem";
import { Link } from "react-router-dom";
import NavBar from "../components/PageComponents/navBar";

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
    return item.category === filter.toLowerCase() || item.category === filter;
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
      <div className="flex flex-col w-full h-screen py-10 rounded-lg px-14 gap-9 dark:bg-dark-background bg-background">
        <NavBar />
        {/* Wardrobe Container */}
        <main className="flex flex-col w-full gap-8">
          {/* Wardrobe Header */}
          <div className="flex justify-between w-full">
            {/* Wardrobe Header Left */}
            <div className="flex items-start gap-6 w-fit">
              {/* Wardrobe Title */}
              <p className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw">
                Wardrobe
              </p>
              {/* Filter and Sort Selects */}
              <div className="select-wrapper">
                {/* Filter Select */}
                <select
                  value={filter}
                  onChange={handleFilterChange}
                  className="h-full px-4 py-2 rounded-md select-no-arrow w-fit bg-foreground dark:bg-dark-foreground dark:text-dark-primary-tw text-primary-tw"
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
                  className="h-full px-4 py-2 rounded-md select-no-arrow bg-foreground dark:bg-dark-foreground dark:text-dark-primary-tw text-primary-tw"
                >
                  <option value="">Sort</option>
                  <option value="nameAsc">Name (A-Z)</option>
                  <option value="nameDesc">Name (Z-A)</option>
                </select>
              </div>
            </div>
            {/* Wardrobe Header Right */}
            <div className="flex items-start gap-6 w-fit">
              {/* Add Item Button */}
              <AddItem />
              {/* Today's Outfit Button */}
              <Link className="h-full" to="/daily">
                <button className="px-4 py-2 rounded text-primary-tw dark:text-dark-background bg-foreground dark:bg-dark-primary-tw">
                  Today's Outfit
                </button>
              </Link>
            </div>
          </div>
          {/* Render Clothing Items or Empty Message */}
          {sortedClothingItems && sortedClothingItems.length > 0 ? (
            <div className="grid w-full grid-cols-6 gap-12 p-10 rounded-md bg-foreground dark:bg-dark-foreground">
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
