const API = import.meta.env.VITE_CITY_API;

export const country = async (name) => {
  const res = await fetch(`${API}/search?name=${name}&count=10`);

  if (!res.ok) throw new Error("Davlat topilmasi");

  return res.json();
};
