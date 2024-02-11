import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

export const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();

  return (
    <WeatherContext.Provider value={{loading, error, weatherData}}>{children}</WeatherContext.Provider>
  );
};
