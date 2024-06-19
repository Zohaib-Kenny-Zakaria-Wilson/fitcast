import React from "react";
import { Link } from "react-router-dom";
import Outfit from "./OutfitComponents/Outfit";

export default function TodayOutfitContainer() {
  return (
    <main className="flex flex-col w-full h-full gap-9">
      <div className="flex items-center justify-between w-full h-fit">
      <p className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw">Today's Outfit</p>
      <div className="flex gap-4 max-h-fit">
      <button className="px-4 py-2 rounded text-primary-tw dark:text-dark-primary-tw bg-component-border dark:bg-dark-component-border hover:bg-blue-700">
            Regenerate
          </button><Link to="/wardrobe">
          <button className="px-4 py-2 rounded text-primary-tw dark:text-dark-background bg-foreground dark:bg-dark-primary-tw">
            Wardrobe
          </button>
          </Link>
          
        </div>
        </div>
       
      <div className="flex flex-col p-12 rounded-lg gap-9 dark:bg-dark-foreground bg-foreground">
        <Outfit />
       
      </div>
    </main>
  );
}
