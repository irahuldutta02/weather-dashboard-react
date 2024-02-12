import { useContext } from "react";
import { ErrorContext, LocationContext } from "../context";

export const useLatLong = () => {
  const { setSelectedLocation } = useContext(LocationContext);
  const { setError } = useContext(ErrorContext);

  function getDataWithLatLong(locationName) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setSelectedLocation({
            location: data[0].name,
            latitude: data[0].lat,
            longitude: data[0].lon,
          });
        } else {
          setSelectedLocation({
            location: "",
            latitude: 0,
            longitude: 0,
          });
        }
      })
      .catch((err) => {
        setError({
          message: "Error fetching location data",
          error: err,
        });
        setSelectedLocation({
          location: "",
          latitude: 0,
          longitude: 0,
        });
      });
  }

  return getDataWithLatLong;
};
