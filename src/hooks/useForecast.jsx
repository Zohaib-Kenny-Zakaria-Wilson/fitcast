import { useState, useEffect } from "react";

export default function useAstro(globalCoords) {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(globalCoords || null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!coords) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coordsVar =
          position.coords.latitude.toFixed(4) +
          "," +
          position.coords.longitude.toFixed(4);
        setCoords(coordsVar);
      });
    }
  }, [coords]);

  useEffect(() => {
    if (!coords || forecastData) {
      setIsLoading(false);
      return;
    }

    async function fetchForecastData() {
      const baseUrl =
        "http://api.weatherapi.com/v1/forecast.json?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=" +
        coords;
      setForecastData(null);
      setError(null);
      try {
        const response = await fetch(baseUrl, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await response.json();
        setForecastData(data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (e) {
        console.error(e);
        setError(e);
        setIsLoading(false); // Set loading to false in case of an error
      }
    }
    fetchForecastData();
  }, [coords, forecastData]);

  return { forecastData, error, isLoading };
}
