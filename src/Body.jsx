import { useContext } from "react";
import { WeatherBoard } from "./Components/Weather/WeatherBoard";
import { ErrorContext, WeatherContext } from "./context";

export function Body() {
  const { loading } = useContext(WeatherContext);
  const { error } = useContext(ErrorContext);

  if (error !== null) {
    return (
      <div className="backdrop-blur-sm bg-red-500 bg-opacity-30 p-8 rounded-md border-2 border-red-500 text-center text-white text-2xl m-4">
        Error: {error.message}
      </div>
    );
  }

  if (loading.state) {
    return (
      <div 
      className="backdrop-blur-sm p-8 rounded-md border-2 border-white text-center text-white text-2xl m-4"
      >
        Loading...
      </div>
    );
  }

  return (
    <>
      <main className="pt-10">
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}
