import React from "react";
import { Link } from "react-router-dom";
import Outfit from "../OutfitComponents/Outfit";

export default function TodayOutfitContainer() {
  return (
    <main className="flex flex-col w-full h-full overflow-y-auto gap-9 scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between w-full h-fit">
        {/* Title */}
        <p className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw">
          Today's Outfit
        </p>
        {/* Buttons */}
        <div className="flex gap-4 max-h-fit">
          {/* Regenerate Button */}
          <button className="px-4 py-2 rounded text-primary-tw dark:text-dark-primary-tw bg-component-border dark:bg-dark-component-border hover:bg-blue-700">
            Regenerate
          </button>
          {/* Wardrobe Button */}
          <Link to="/wardrobe">
            <button className="px-4 py-2 rounded text-primary-tw dark:text-dark-background bg-foreground dark:bg-dark-primary-tw">
              Wardrobe
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col p-12 rounded-lg gap-9 dark:bg-dark-foreground bg-foreground">
        <Outfit />
        <Outfit />
        <Outfit />
      </div>
    </main>
  );
}
