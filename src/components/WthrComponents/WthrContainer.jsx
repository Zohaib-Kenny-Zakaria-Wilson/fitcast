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

  useEffect(() => {
    // If the global data is not set, set it
    if (!globalCurrentData && !globalForecastData) {
      // If the data is available set it
      if (forecastData && currentData) {
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
      setGlobalCurrentData(currentData);
      setGlobalForecastData(forecastData.forecast.forecastday[0]);
      const wthrConditions = getWthrConditions(
        forecastData.forecast.forecastday[0].day
      );
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
