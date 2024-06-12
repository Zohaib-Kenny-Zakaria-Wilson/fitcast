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
              <ClothingItem
                link={"t-shirt.jpeg"}
                text={clothingItem.text}
                color={"#9E9E9E"}
                textColor={"#262626"}
              />
            );
          })}
      </main>
    </>
  );
}
