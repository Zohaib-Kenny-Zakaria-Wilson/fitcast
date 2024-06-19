import React from "react";
import NavBar from "../components/PageComponents/navBar";
import TodayOutfitContainer from "../components/PageComponents/TodayOutfitContainer";
import Wthr from "../components/PageComponents/Wthr";

export default function DailyOutfitPage() {
    return (
        <main className={`w-screen flex gap-14 h-screen px-14 py-10 bg-background dark:bg-dark-background`}>
            <Wthr />
            <div className="flex flex-col w-full h-screen rounded-lg gap-9 bg-background dark:bg-dark-background">
            <NavBar />
            <TodayOutfitContainer />
            </div>
        </main> 
    );}