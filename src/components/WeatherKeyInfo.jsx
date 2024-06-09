import React from "react";

function WeatherKeyInfo({ svg, text }) {
  return (
    <div className="w-full px-2 py-3 flex justify-center gap-2 rounded-lg bg-background dark:bg-dark-background text-primary dark:text-dark-primary">
      <img
        className="h-4"
        src={`${process.env.PUBLIC_URL}/assets/${svg}.svg`}
        alt={svg}
      />
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default WeatherKeyInfo;
