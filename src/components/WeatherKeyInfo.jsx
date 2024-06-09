import React from "react";

function WeatherKeyInfo({ svg, text }) {
  return (
    <div className="w-full px-2 pr-4 py-1 flex justify-center items-center gap-1 rounded-lg bg-background text-primary">
      <img
        className="size-12"
        src={`${process.env.PUBLIC_URL}/assets/${svg}.svg`}
        alt={svg}
      />
      <p className="text-primary">{text}</p>
    </div>
  );
}

export default WeatherKeyInfo;
