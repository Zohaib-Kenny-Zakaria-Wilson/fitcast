import React from "react";

function WeatherKeyInfo({ svg, text }) {
  return (
    <div className="w-full px-1 py-2 xl:px-2 xl:py-3 2xl:px-4 2xl:py-4 flex justify-center gap-2 rounded-lg bg-background dark:bg-dark-background text-primary dark:text-dark-primary">
      <img
        className="h-4 2xl:h-5"
        src={`${process.env.PUBLIC_URL}/assets/${svg}.svg`}
        alt={svg}
      />
      <p className="text-xs xl:text-sm 2xl:text-base">{text}</p>
    </div>
  );
}

export default WeatherKeyInfo;
