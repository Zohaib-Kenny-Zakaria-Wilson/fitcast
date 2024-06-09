import React from "react";
import WeatherKeyInfo from "./WeatherKeyInfo";
import { Logo } from "./Logo";

function WeatherDisplay({ toggleDarkMode }) {
  return (
    <div className="bg-foreground dark:bg-dark-foreground w-fit h-full rounded-xl border-b-4 border-component-border dark:border-dark-component-border">
      {/* Main Wrapper */}
      <div className="w-full h-full py-16 px-6 2xl:px-12 flex flex-col items-center justify-between">
        {/* Weather Wrapper */}
        <div className="flex flex-col w-full gap-3 2xl:gap-9">
          {/* Realtime Wrapper */}
          <div className="w-full flex flex-col gap-3 2xl:gap-6 items-center">
            <p className="text-center font-medium text-xl xl:text-2xl 2xl:text-4xl text-primary dark:text-dark-primary">
              Grand Island
            </p>
            <img
              className="size-24 xl:size-36 2xl:size-48"
              src={`${process.env.PUBLIC_URL}/assets/clear-day.svg`}
              alt="Clear Day"
            />
            <div className="flex flex-col 2xl:gap-2">
              <p className="text-center font-bold text-2xl xl:text-3xl 2xl:text-5xl text-primary dark:text-dark-primary">
                23°F
              </p>
              <p className="text-center text-xs xl:text-sm text-primary dark:text-dark-primary">
                Sunny
              </p>
            </div>
          </div>
          {/* Weather Details Wrapper */}
          <div className="w-full grid grid-cols-2 gap-2 items-center">
            {/* Weather Key Pair */}
            <WeatherKeyInfo svg="sunrise" text="6:43am" />
            <WeatherKeyInfo svg="sunset" text="10:00pm" />
            {/* Weather Key Pair */}
            <WeatherKeyInfo svg="thermometer" text="95°F" />
            <WeatherKeyInfo svg="humidity" text="86%" />
            {/* Weather Key Pair */}
            <WeatherKeyInfo svg="wind" text="5 mph" />
            <WeatherKeyInfo svg="raindrops" text="32%" />
          </div>
        </div>
        {/* Logo */}
        <Logo onClick={toggleDarkMode} />
      </div>
    </div>
  );
}

export default WeatherDisplay;
