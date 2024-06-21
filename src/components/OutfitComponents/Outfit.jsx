import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";

export default function Outfit({ clothingItems }) {
  return (
    <main className="grid min-w-full grid-cols-4 gap-12 p-12 border-b-4 rounded-lg dark:bg-dark-foreground bg-foreground border-component-border dark:border-dark-component-border">
      {clothingItems &&
        clothingItems.map((clothingItem) => (
          <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
        ))}
    </main>
  );
}
