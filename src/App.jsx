import "./App.css";
import { Header } from "./Components/Header/Header";
import { WeatherBoard } from "./Components/Weather/WeatherBoard";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <WeatherProvider>
        <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </WeatherProvider>
    </>
  );
}

export default App;
