import { weatherAPI } from "@/api/weather";
import { useEffect, useState } from "react";

export const useWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoanding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const load = async () => {
      try {
        setLoanding(true);
        const data = await weatherAPI(lat, lon);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoanding(false);
      }
    };

    load();
  }, [lat, lon]);

  return {
    weather,
    loading,
    error,
  };
};
