import React, { useState } from "react";
import NavBarDaily from "../components/PageComponents/NavBarDaily";
import TodayOutfitContainer from "../components/PageComponents/TodayOutfitContainer";
import WthrContainer from "../components/WthrComponents/WthrContainer";

export default function DailyOutfitPage() {
  const [isWthrVisible, setIsWthrVisible] = useState(true);

  const toggleWthrDisplay = () => {
    setIsWthrVisible(!isWthrVisible);
  };

  return (
    <main className="flex w-screen h-screen px-10 py-8 xl:px-12 xl:py-10 gap-14 2xl:px-14 bg-background dark:bg-dark-background">
      {isWthrVisible && <WthrContainer />}
      {/* Right Side */}
      <div className="flex flex-col w-full h-full ml-auto overflow-y-auto rounded-lg gap-9 bg-background dark:bg-dark-background scrollbar-hide">
        <NavBarDaily toggleWthrDisplay={toggleWthrDisplay} />
        <TodayOutfitContainer />
      </div>
    </main>
  );
}
