import { useState, useEffect } from "react";

export default function useWeather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function init() {
      const baseUrl =
        "http://api.weatherapi.com/v1/current.json?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=Lincoln";
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
  }, []);

  return { data, error };
}
