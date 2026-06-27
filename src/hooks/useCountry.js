import { country } from "@/api/countr";
import { useEffect, useState } from "react";

export const useCountry = (search) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (search.length < 2) {
      setCities([]);
      return;
    }
    const timer = setTimeout(async () => {
      const data = await country(search);
      setCities(data.results || []);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return cities;
};
