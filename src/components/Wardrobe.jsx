import React from "react";
import useAppContext from "../context/useAppContext";
import ClothingItem from "./ItemComponents/ClothingItem";
import AddItem from '../components/ItemComponents/AddItem';


export default function Wardrobe() {
    const { clothingItems } = useAppContext();

    return (
    <>
    <div className="flex flex-wrap justify-start h-screen p-12 rounded-lg gap-9 bg-foreground">
    <AddItem />
        {clothingItems &&
          clothingItems.map((clothingItem) => {
            return (
              <ClothingItem
                clothingItem={clothingItem}
              />
            );
          })}
      </div>
    </>
    )}
    