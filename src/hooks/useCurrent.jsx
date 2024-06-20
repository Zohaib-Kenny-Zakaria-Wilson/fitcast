import { useState, useEffect } from "react";

export default function useCurrent() {
  const [currentData, setCurrentData] = useState(null);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      let coordsVar;
      navigator.geolocation.getCurrentPosition((position) => {
        coordsVar =
          position.coords.latitude.toFixed(4) +
          "," +
          position.coords.longitude.toFixed(4);
        setCoords(coordsVar);
      });
      // Avoids running the fetch if coords is null
      if (!coords) return;
      const baseUrl =
        "http://api.weatherapi.com/v1/current.json?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=" +
        coords;
      setCurrentData(null);
      setError(null);
      try {
        await fetch(baseUrl, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setCurrentData(data);
            // Set loading to false after the data is fetched
            setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false); // Set loading to false in case of an error
          });
      } catch (e) {
        setError(e);
        setIsLoading(false); // Set loading to false in case of an error
      }
    }
    init();
  }, [coords]);

  return { currentData, error, isLoading };
}
