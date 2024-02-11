import { useContext } from "react";
import { WeatherBoard } from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./context";

export function Body() {
  const { loading, error } = useContext(WeatherContext);

  if (error !== null) {
    return (
      <div className="text-center text-white text-2xl">
        Error: {error.message}
      </div>
    );
  }

  if (loading.state) {
    return <div className="text-center text-white text-2xl">Loading...</div>;
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
