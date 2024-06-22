import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Outfit from "../OutfitComponents/Outfit";
import useOutfitGenerator from "../../hooks/useOutfitGenerator";
import useAppContext from "../../context/useAppContext";

export default function TodayOutfitContainer() {
  const { globalOutfits, setGlobalOutfits, wthrConditions } = useAppContext();
  const generateOutfit = useOutfitGenerator();

  useEffect(() => {
    if (
      wthrConditions &&
      (!globalOutfits ||
        globalOutfits.length === 0 ||
        globalOutfits[0] === null)
    ) {
      const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
      console.log("Generated outfits on mount:", newOutfits);
      setGlobalOutfits(newOutfits);
    }
  }, [wthrConditions, globalOutfits, setGlobalOutfits, generateOutfit]);

  const regenerateOutfits = () => {
    if (wthrConditions) {
      const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
      console.log("Regenerated outfits:", newOutfits);
      setGlobalOutfits(newOutfits);
    }
  };

  return (
    <main className="flex flex-col w-full h-full overflow-y-auto gap-7 xl:gap-8 2xl:gap-9 scrollbar-hide">
      <div className="flex items-center justify-between w-full h-fit">
        <p className="text-2xl font-medium text-primary-tw dark:text-dark-primary-tw">
          Today's Outfits
        </p>
        <div className="flex gap-4">
          <button
            onClick={regenerateOutfits}
            className="py-1 px-4 min-h-full dark:bg-dark-foreground dark:text-dark-primary-tw dark:border-dark-component-border bg-component-border rounded-sm text-primary-tw border-b-2 hover:translate-y-0.5 hover:border-b-2 hover:dark:border-transparent hover:border-transparent transition-all duration-100"
          >
            Regenerate
          </button>
          <Link to="/wardrobe">
            <button className="py-1 px-4 min-h-full rounded-sm text-primary-tw dark:text-dark-background bg-foreground border-component-border dark:bg-dark-primary-tw border-b-2 dark:border-foreground hover:dark:border-transparent hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100">
              Wardrobe
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-7 2xl:gap-9">
        {globalOutfits &&
          globalOutfits.map((outfit, index) => (
            <Outfit key={index} clothingItems={outfit} />
          ))}
      </div>
    </main>
  );
}
