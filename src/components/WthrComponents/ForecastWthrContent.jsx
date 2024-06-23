import React from "react";
import WthrStat from "./WthrStat.jsx";

export default function ForecastWthrContent({ loading, globalForecastData }) {
  return (
    <div className="grid items-center grid-cols-2 gap-3 w-fit">
      <WthrStat
        svg="sunrise"
        text={loading ? "Loading..." : globalForecastData?.astro.sunrise}
      />
      <WthrStat
        svg="sunset"
        text={loading ? "Loading..." : globalForecastData?.astro.sunset}
      />
      <WthrStat
        svg="thermometer"
        text={loading ? "Loading..." : globalForecastData?.day.avgtemp_f + "°F"}
      />
      <WthrStat
        svg="humidity"
        text={
          loading ? "Loading..." : globalForecastData?.day.avghumidity + " %"
        }
      />
      <WthrStat
        svg="wind"
        text={
          loading ? "Loading..." : globalForecastData?.day.maxwind_mph + " mph"
        }
      />
      <WthrStat
        svg="drizzle"
        text={
          loading
            ? "Loading..."
            : globalForecastData?.day.daily_chance_of_rain + " %"
        }
      />
    </div>
  );
}
