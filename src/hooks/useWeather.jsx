import { useState, useEffect } from "react";
export default function useWeather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const axios = require("axios");
  useEffect(() => {
    async function init() {
      const baseUrl =
        "http://api.weatherapi.com/v1/current.json?key=" + process.env;
      setData(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl + "&q=Lincoln");
        setData(response.data.map((val) => ({})));
        console.log(data);
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, [axios]);

  return { data, error };
}
