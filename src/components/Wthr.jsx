import React from "react";
import WeatherKeyInfo from "./WthrComponents/WthrStats";
import { Logo } from "./misc/Logo";

function Wthr({ toggleDarkMode }) {
  return (
    <div className="grid h-full border-b-4 bg-foreground dark:bg-dark-foreground min-w-fit rounded-xl border-component-border dark:border-dark-component-border">
      {/* Main Wrapper */}
      <div className="flex flex-col items-center justify-between w-full h-full px-6 py-16 2xl:px-12">
        {/* Weather Wrapper */}
        <div className="flex flex-col w-full gap-3 xl:gap-6 2xl:gap-9">
          {/* Realtime Wrapper */}
          <div className="flex flex-col items-center w-full gap-3 xl:gap-4 2xl:gap-6">
            <p className="text-xl font-medium text-center xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw">
              Grand Island
            </p>
            <img
              className="size-24 xl:size-36 2xl:size-48"
              src={`${process.env.PUBLIC_URL}/assets/clear-day.svg`}
              alt="Clear Day"
            />
            <div className="flex flex-col xl:gap-1 2xl:gap-2">
              <p className="text-2xl font-bold text-center xl:text-3xl 2xl:text-5xl text-primary-tw dark:text-dark-primary-tw">
                23°F
              </p>
              <p className="text-xs text-center xl:text-sm text-primary-tw dark:text-dark-primary-tw">
                Sunny
              </p>
            </div>
          </div>
          {/* Weather Details Wrapper */}
          <div className="grid items-center grid-cols-2 gap-2 w-fit xl:gap-3 2xl:gap-3">
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

export default Wthr;
