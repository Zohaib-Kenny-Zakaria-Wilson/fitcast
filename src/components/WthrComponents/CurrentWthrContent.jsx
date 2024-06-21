import React from "react";
import { getWeatherIcon } from "../../utils/getWeatherIcon.js";

export default function CurrentWthrContent({ loading, globalCurrentData }) {
  return (
    <div className="flex flex-col items-center w-full gap-3 xl:gap-4 2xl:gap-6">
      <p className="text-xl font-medium text-center xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw">
        {loading ? "Loading..." : globalCurrentData?.location.name}
      </p>
      <img
        className="size-24 xl:size-36 2xl:size-48"
        src={
          loading
            ? process.env.PUBLIC_URL + "/assets/not-available.svg"
            : getWeatherIcon(globalCurrentData?.current.condition.code, 1)
        }
        alt={loading ? "Loading" : "Clear Day"}
      />
      <div className="flex flex-col xl:gap-1 2xl:gap-2">
        <p className="text-2xl font-bold text-center xl:text-3xl 2xl:text-5xl text-primary-tw dark:text-dark-primary-tw">
          {loading ? "Loading..." : globalCurrentData?.current.temp_f}
        </p>
        <p className="text-xs text-center xl:text-sm text-primary-tw dark:text-dark-primary-tw">
          {loading ? "Loading..." : globalCurrentData?.current.condition.text}
        </p>
      </div>
    </div>
  );
}
