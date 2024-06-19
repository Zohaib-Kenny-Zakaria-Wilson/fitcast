import React from "react";
import useAppContext from "../context/useAppContext";
import ClothingItem from "./ItemComponents/ClothingItem";
import AddItem from "../components/ItemComponents/AddItem";
import { Link } from "react-router-dom";
import NavBar from "./navBar";

export default function Wardrobe() {
  const { clothingItems } = useAppContext();

  return (
    <>
      <div className="flex flex-col w-full h-screen py-10 rounded-lg px-14 gap-9 bg-background">
        <NavBar />
        {/* Wardrobe Container */}
        <main className="flex flex-col w-full gap-8">
          {/* Wardrobe Header */}
          <div className="flex justify-between w-full">
            {/* Wardrobe Header Left */}
            <div className="flex items-start gap-6 w-fit">
              <p className="font-medium text-primary-tw 2xl:text-3xl">
                Wardrobe
              </p>
              <button className="h-full px-4 py-1 rounded-md bg-foreground text-primary-tw">
                Filter
              </button>
              <button className="h-full px-4 py-1 rounded-md bg-foreground text-primary-tw">
                Sort
              </button>
            </div>
            {/* Wardrobe Header Right */}
            <div className="flex items-start gap-6 w-fit">
              <AddItem />
              <Link className="h-full" to="/">
                <button className="h-full px-4 py-1 rounded-md bg-foreground text-primary-tw">
                  Today's Outfit
                </button>
              </Link>
            </div>
          </div>
          {/* Render Clothing Items or Empty Message */}
          {clothingItems && clothingItems.length > 0 ? (
            <div className="grid w-full grid-cols-8 gap-4 p-8 rounded-md bg-foreground">
              {clothingItems.map((clothingItem) => (
                <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
              ))}
            </div>
          ) : (
            <div className="flex w-full p-8 rounded-md bg-foreground">
              <p className="w-full text-center text-primary-tw">
                Your wardrobe is empty. Add some items!
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
