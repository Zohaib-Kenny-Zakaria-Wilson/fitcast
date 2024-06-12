import React from "react";
import useAppContext from "../context/useAppContext";
import ClothingItem from "./ItemComponents/ClothingItem";

export default function Wardrobe() {
    const { clothingItems } = useAppContext();

    return (
    <>
    <div className="flex flex-wrap justify-start p-12 rounded-lg gap-9 bg-foreground">
        {clothingItems &&
          clothingItems.map((clothingItem) => {
            return (
              <ClothingItem
                link={"t-shirt.jpeg"}
                text={clothingItem.name}
                color={"#9E9E9E"}
                textColor={"#262626"}
              />
            );
          })}
      </div>
    </>
    )}
    