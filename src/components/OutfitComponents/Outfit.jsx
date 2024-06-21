import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";

export default function Outfit({ clothingItems }) {
  return (
    <main className="grid min-w-full grid-cols-4 gap-12 p-12 border-b-2 rounded-md shadow-sm border-component-border dark:border-dark-component-border dark:bg-dark-foreground bg-foreground">
      {clothingItems &&
        clothingItems.map((clothingItem) => (
          <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
        ))}
    </main>
  );
}
