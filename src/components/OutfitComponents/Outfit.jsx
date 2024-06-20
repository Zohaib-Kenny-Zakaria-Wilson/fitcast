import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";

export default function Outfit(clothingItems) {
  return (
    <>
      <main className="grid min-w-full grid-cols-4 gap-12 p-12 rounded-lg dark:bg-dark-foreground bg-foreground">
        {clothingItems &&
          clothingItems.map((clothingItem) => {
            return (
              <ClothingItem clothingItem={clothingItem}/>
            );
          })}
      </main>
    </>
  );
}
