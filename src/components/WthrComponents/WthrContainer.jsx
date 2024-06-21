import React, { useEffect, useState } from "react";
import useCurrent from "../../hooks/useCurrent.jsx";
import useForecast from "../../hooks/useForecast.jsx";
import useAppContext from "../../context/useAppContext.jsx";
import getWthrConditions from "../../utils/getWthrConditions.js";
import WthrContent from "./WthrContent.jsx";

export default function WthrContainer() {
  const { currentData } = useCurrent();
  const { forecastData } = useForecast();
  const {
    setWthrConditions,
    globalCurrentData,
    globalForecastData,
    setGlobalCurrentData,
    setGlobalForecastData,
  } = useAppContext();

  const [loading, setLoading] = useState(true);

  /**
   * Sets the global data in the context on the first render.
   * @returns {void}
   */
  useEffect(() => {
    if (!globalCurrentData && !globalForecastData) {
      if (forecastData && currentData) {
        // Get the daily forecast data
        const dailyForecastData = forecastData.forecast.forecastday[0];

        // Set current and forecast data in the context
        setGlobalCurrentData(currentData);
        setGlobalForecastData(dailyForecastData);
        const wthrConditions = getWthrConditions(dailyForecastData);
        setWthrConditions(wthrConditions);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [
    forecastData,
    currentData,
    setGlobalCurrentData,
    setGlobalForecastData,
    globalCurrentData,
    globalForecastData,
    setWthrConditions,
  ]);

  /**
   * Refreshes the data in the context.
   * @returns {void}
   */
  function refreshData() {
    setLoading(true);
    if (forecastData && currentData) {
      // Get the daily forecast data
      const dailyForecastData = forecastData.forecast.forecastday[0];

      // Set the global data in the context
      setGlobalCurrentData(currentData);
      setGlobalForecastData(dailyForecastData);
      const wthrConditions = getWthrConditions(dailyForecastData);
      setWthrConditions(wthrConditions);
      setLoading(false);
    }
  }

  return (
    <WthrContent
      globalCurrentData={globalCurrentData}
      globalForecastData={globalForecastData}
      loading={loading}
      refreshData={refreshData}
    />
  );
}
