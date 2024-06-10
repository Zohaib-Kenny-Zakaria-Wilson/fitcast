import React from "react";
import PropTypes from "prop-types";

export default function WeatherKeyInfo({ svg, text }) {
  return (
    <div className="flex justify-center w-full gap-2 px-1 py-2 rounded-lg xl:px-2 xl:py-3 2xl:px-4 2xl:py-4 bg-background dark:bg-dark-background text-primary-tw dark:text-dark-primary-tw">
      <img
        className="h-4 2xl:h-5"
        src={`${process.env.PUBLIC_URL}/assets/${svg}.svg`}
        alt={svg}
      />
      <p className="text-xs w-fit xl:text-sm 2xl:text-base">{text}</p>
    </div>
  );
}

WeatherKeyInfo.propTypes = {
  text: PropTypes.node.isRequired,
};
