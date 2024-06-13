import React from "react";
import ClothingItem from "../ItemComponents/ClothingItem";
import useAppContext from "../../context/useAppContext";

export default function Outfit() {
  const { clothingItems } = useAppContext();
  return (
    <>
      <main className="flex justify-evenly">
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
