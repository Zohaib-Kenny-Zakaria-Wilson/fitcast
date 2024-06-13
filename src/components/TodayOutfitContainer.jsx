import React from "react";
import { Link } from "react-router-dom";
import Outfit from "./OutfitComponents/Outfit";

export default function TodayOutfitContainer() {
  return (
    <main className="w-full h-full">
       <Link to="/wardrobe">
          <button className="px-4 py-2 mt-4 rounded text-background bg-primary-tw hover:bg-blue-700">
            Wardrobe
          </button>
        </Link>
      <div className="flex flex-col p-12 rounded-lg gap-9 bg-foreground">
        <Outfit />
       
      </div>
    </main>
  );
}
