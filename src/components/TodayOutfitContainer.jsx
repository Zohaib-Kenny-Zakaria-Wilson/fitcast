import React from "react";
import Outfit from "./OutfitComponents/Outfit";

export default function TodayOutfitContainer() {
  return (
    <>
    <main className="w-full h-full">
      <div className="flex flex-col p-12 rounded-lg gap-9 bg-foreground">
        <Outfit />
      </div>
    </main>
    </>
  );
}