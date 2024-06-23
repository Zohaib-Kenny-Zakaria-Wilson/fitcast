import React from "react";
import { getWeatherIcon } from "../../utils/getWeatherIcon.js";

export default function CurrentWthrContent({ loading, globalCurrentData }) {
  return (
    <div className="flex flex-col items-center w-full gap-3 md:w-fit lg:gap-4 xl:gap-5 2xl:gap-6">
      {/* Location */}
      <p className="text-xl font-medium text-center lg:text-2xl xl:text-3xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw">
        {loading ? "Loading..." : globalCurrentData?.location.name}
      </p>
      {/* Weather Icon */}
      <img
        className="size-24 lg:size-36 xl:size-40 2xl:size-44"
        src={
          loading
            ? process.env.PUBLIC_URL + "/assets/not-available.svg"
            : getWeatherIcon(globalCurrentData?.current.condition.code, 1)
        }
        alt={loading ? "Loading" : "Clear Day"}
      />
      {/* Temperature Wrapper */}
      <div className="flex flex-col xl:gap-1 2xl:gap-2">
        {/* Temperature */}
        <p className="text-2xl font-bold text-center lg:text-3xl xl:text-4xl 2xl:text-5xl text-primary-tw dark:text-dark-primary-tw">
          {loading ? "Loading..." : globalCurrentData?.current.temp_f}
        </p>
        {/* Weather Condition */}
        <p className="text-xs text-center lg:text-sm text-primary-tw dark:text-dark-primary-tw">
          {loading ? "Loading..." : globalCurrentData?.current.condition.text}
        </p>
      </div>
    </div>
  );
}
