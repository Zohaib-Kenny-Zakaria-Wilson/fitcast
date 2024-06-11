import { useState, useEffect } from "react";

export default function useAstro() {
  const [astroData, setAstroData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function init() {
      const baseUrl =
        "http://api.weatherapi.com/v1/astronomy.json?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=Lincoln";
      setAstroData(null);
      setError(null);
      try {
        await fetch(baseUrl, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((response) => response.json())
          .then((data) => setAstroData(data))
          .catch((err) => console.error(err));
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, []);
  return { astroData, error };
}
