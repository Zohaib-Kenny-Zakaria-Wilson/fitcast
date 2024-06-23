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
    <div className="flex flex-col h-screen lg:p-10 lg:gap-6 xl:p-11 xl:gap-7 2xl:gap-8 2xl:p-12 lg:flex-row bg-background dark:bg-dark-background">
      {isWthrVisible && (
        <div className="mx-4 mt-20 -mb-12 sm:mt-24 sm:-mb-8 sm:mx-12 2xl:m-0 lg:m-0 lg:static lg:w-fit lg:h-full lg:bg-transparent">
          <WthrContainer />
        </div>
      )}
      <div className="flex flex-1 w-full gap-3 overflow-auto scrollbar-hide lg:flex-col">
        <div className="box-border fixed top-0 w-full px-4 py-4 sm:py-6 sm:px-12 z-1 lg:p-0 lg:static lg:pb-4">
          <NavBarDaily toggleWthrDisplay={toggleWthrDisplay} />
        </div>
        <div className="w-full mx-4 mt-20 lg:m-0 sm:mt-24 sm:mx-12">
          <TodayOutfitContainer />
        </div>
      </div>
    </div>
  );
}
