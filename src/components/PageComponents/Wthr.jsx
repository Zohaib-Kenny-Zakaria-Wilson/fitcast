import React from "react";
import WeatherKeyInfo from "../WthrComponents/WthrStats";
import { Logo } from "../misc/Logo";
import useWeather from "../../hooks/useWeather";
import useForecast from "../../hooks/useForecast";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

function Wthr() {
  const { data } = useWeather();
  const { forecastData } = useForecast();


  return (
    <div className="grid h-full border-b-4 bg-foreground dark:bg-dark-foreground min-w-fit rounded-xl border-component-border dark:border-dark-component-border">
      <div className="flex flex-col items-center justify-between w-full h-full px-6 py-16 2xl:px-12">
        <div className="flex flex-col w-full gap-3 xl:gap-6 2xl:gap-9">
          <div className="flex flex-col items-center w-full gap-3 xl:gap-4 2xl:gap-6">
            {data && (
              <p className="text-xl font-medium text-center xl:text-2xl 2xl:text-4xl text-primary-tw dark:text-dark-primary-tw">
                {data.location.name}
              </p>
            )}
            <img
              className="size-24 xl:size-36 2xl:size-48"
              src={getWeatherIcon(data && data.current.condition.code, 1)}
              alt="Clear Day"
            />
            <div className="flex flex-col xl:gap-1 2xl:gap-2">
              <p className="text-2xl font-bold text-center xl:text-3xl 2xl:text-5xl text-primary-tw dark:text-dark-primary-tw">
                {data && data.current.temp_f}
              </p>
              <p className="text-xs text-center xl:text-sm text-primary-tw dark:text-dark-primary-tw">
                {data && data.current.condition.text}
              </p>
            </div>
          </div>
          {/* Weather Details Wrapper */}
          {data && forecastData && (
            <div className="grid items-center grid-cols-2 gap-2 w-fit xl:gap-3 2xl:gap-3">
              {/* Weather Key Pair */}
              <WeatherKeyInfo
                svg="sunrise"
                text={forecastData.forecast.forecastday[0].astro.sunrise}
              />
              <WeatherKeyInfo
                svg="sunset"
                text={forecastData.forecast.forecastday[0].astro.sunset}
              />
              {/* Weather Key Pair */}
              <WeatherKeyInfo svg="thermometer" text={forecastData.forecast.forecastday[0].day.avgtemp_f + "°F"} />
              <WeatherKeyInfo svg="humidity" text={forecastData.forecast.forecastday[0].day.avghumidity + " %"} />
              {/* Weather Key Pair */}
              <WeatherKeyInfo svg="wind" text={data.current.wind_mph + " mph"} />
              <WeatherKeyInfo svg="drizzle" text={forecastData.forecast.forecastday[0].day.daily_chance_of_rain + " %"} />
            </div>
          )}
        </div>
        {/* Logo */}
        <Logo />
      </div>
    </div>
  );
}

export default Wthr;
