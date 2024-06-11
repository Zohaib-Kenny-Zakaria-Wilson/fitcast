import { useState, useEffect } from "react";

export default function useWeather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);
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
      const baseUrl =
        "http://api.weatherapi.com/v1/current.json?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=" +
        coords;
      setData(null);
      setError(null);
      try {
        await fetch(baseUrl, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((err) => console.error(err));
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, [coords]);

  return { data, error };
}
