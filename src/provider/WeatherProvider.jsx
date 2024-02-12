import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

export const WeatherProvider = ({ children }) => {
  const { loading, weatherData } = useWeather();

  return (
    <WeatherContext.Provider value={{loading, weatherData}}>{children}</WeatherContext.Provider>
  );
};
