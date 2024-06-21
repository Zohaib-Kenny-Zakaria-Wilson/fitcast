import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Outfit from "../OutfitComponents/Outfit";
import useOutfitGenerator from "../../hooks/useOutfitGenerator";
import useAppContext from "../../context/useAppContext";

export default function TodayOutfitContainer() {
  const { globalOutfits, setGlobalOutfits } = useAppContext();
  const generateOutfit = useOutfitGenerator();

  useEffect(() => {
    // Generate new outfits if none exist and set global state
    if (
      !globalOutfits ||
      globalOutfits.length === 0 ||
      globalOutfits[0] === null
    ) {
      const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
      setGlobalOutfits(newOutfits);
    }
  }, [globalOutfits, setGlobalOutfits, generateOutfit]);

  const regenerateOutfits = () => {
    // Generate new outfits and set global state
    const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
    setGlobalOutfits(newOutfits);
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
            className="px-4 py-2 rounded text-primary-tw dark:text-dark-primary-tw bg-component-border dark:bg-dark-component-border hover:bg-blue-700"
          >
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
        {globalOutfits.map((outfit, index) => (
          <Outfit key={index} clothingItems={outfit} />
        ))}
      </div>
    </main>
  );
}
