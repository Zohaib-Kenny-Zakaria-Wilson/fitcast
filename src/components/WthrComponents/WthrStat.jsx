import React from "react";

export default function WthrStat({ svg, text }) {
  return (
    <div className="flex items-start justify-center w-full gap-2 px-8 rounded-sm xl:px-4 lg:py-4 2xl:py-6 xl:py-4 bg-background dark:bg-dark-background text-primary-tw dark:text-dark-primary-tw">
      <img
        className="h-4"
        src={`${process.env.PUBLIC_URL}/assets/${svg}.svg`}
        alt={svg}
      />
      <p className="text-sm w-fit 2xl:text-base">{text}</p>
    </div>
  );
}
