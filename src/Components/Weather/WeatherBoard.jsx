import { useContext } from "react";
import { AddToFav } from "./AddToFav";
import { WeatherCondition } from "./WeatherCondition";
import { WeatherHeadline } from "./WeatherHeadline";
import { WeatherContext } from "../../context";

export function WeatherBoard() {
  const { loading, error, weatherData } = useContext(WeatherContext);

  console.log(loading, error, weatherData);

  return (
    <>
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          {loading.state ? (
            <div className="text-center">
              <p>{loading.message}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
              <AddToFav />
              <WeatherHeadline />
              <WeatherCondition />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
