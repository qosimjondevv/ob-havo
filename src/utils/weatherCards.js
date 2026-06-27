import { Wind, Droplets, CloudRain, SunMedium } from "lucide-react";

export const weatherCards = (weather) => [
  {
    icon: Wind,
    title: "WIND",
    value: weather.current_weather.windspeed,
    unit: "km/h",
  },

  {
    icon: Droplets,
    title: "HUMIDITY",
    value: weather.hourly.relativehumidity_2m[0],
    unit: "%",
  },

  {
    icon: CloudRain,
    title: "RAIN",
    value: weather.hourly.precipitation[0],
    unit: "mm",
  },

  {
    icon: SunMedium,
    title: "UV",
    value: weather.hourly.uv_index[0],
    unit: "",
  },
];
