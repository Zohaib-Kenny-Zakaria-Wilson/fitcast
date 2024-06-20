import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Outfit from "../OutfitComponents/Outfit";
import useOutfitGenerator from "../../hooks/useOutfitGenerator";

export default function TodayOutfitContainer() {
  const generateOutfit = useOutfitGenerator();
  const [outfits, setOutfits] = useState([[], [], []]);

  //NOTICE: in the future I could use a loop and generate more outfits based on user preferences.
  //TODO: Will have to create context for this in the future as every time the page is refreshed the outfits change.
  useEffect(() => {
    const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
    setOutfits(newOutfits);
  }, [generateOutfit]);

  const regenerateOutfits = () => {
    const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
    setOutfits(newOutfits);
  };

  return (
    <main className="flex flex-col w-full h-full overflow-y-auto gap-9 scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between w-full h-fit">
        {/* Title */}
        <p className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw">
          Today's Outfits
        </p>
        {/* Buttons */}
        <div className="flex gap-4 max-h-fit">
          {/* Regenerate Button */}
          <button 
            onClick={regenerateOutfits}
            className="px-4 py-2 rounded text-primary-tw dark:text-dark-primary-tw bg-component-border dark:bg-dark-component-border hover:bg-blue-700">
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

      <div className="flex flex-col gap-9">
        {outfits.map((outfit, index) => (
          <Outfit key={index} clothingItems={outfit} />
        ))}
      </div>
    </main>
  );
}
