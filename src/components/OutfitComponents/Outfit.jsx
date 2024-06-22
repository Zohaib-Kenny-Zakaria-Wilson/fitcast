import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";

export default function Outfit({ clothingItems }) {
  return (
    <main className="grid min-w-full grid-cols-2 gap-12 px-16 py-12 border-b-2 rounded-md shadow-sm 2xl:gap-8 xl:px-20 2xl:p-12 2xl:grid-cols-4 border-component-border dark:border-dark-component-border dark:bg-dark-foreground bg-foreground">
      {clothingItems &&
        clothingItems.map((clothingItem) => (
          <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
        ))}
    </main>
  );
}
