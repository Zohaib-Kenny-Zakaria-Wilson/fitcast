import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";
import useAppContext from "../../context/useAppContext";

export default function Outfit() {
  const { clothingItems } = useAppContext();
  return (
    <>
      <main className="grid min-w-full grid-cols-4 gap-12">
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
