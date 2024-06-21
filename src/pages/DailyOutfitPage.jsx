import React from "react";
import NavBar from "../components/PageComponents/navBar";
import TodayOutfitContainer from "../components/PageComponents/TodayOutfitContainer";
import WthrContainer from "../components/WthrComponents/WthrContainer";

export default function DailyOutfitPage() {
  return (
    <main className="flex w-screen h-screen py-10 gap-14 px-14 bg-background dark:bg-dark-background">
      <WthrContainer />
      {/* Right Side */}
      <div className="flex flex-col w-full h-full ml-auto overflow-y-auto rounded-lg gap-9 bg-background dark:bg-dark-background scrollbar-hide">
        <NavBar />
        <TodayOutfitContainer />
      </div>
    </main>
  );
}
