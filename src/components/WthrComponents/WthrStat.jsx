import React from "react";

export default function WthrStat({ svg, text }) {
  return (
    <div className="flex justify-center w-full gap-2 px-4 py-6 rounded-sm bg-background dark:bg-dark-background text-primary-tw dark:text-dark-primary-tw">
      <img
        className="h-4 2xl:h-5"
        src={`${process.env.PUBLIC_URL}/assets/${svg}.svg`}
        alt={svg}
      />
      <p className="text-xs w-fit xl:text-sm 2xl:text-base">{text}</p>
    </div>
  );
}
