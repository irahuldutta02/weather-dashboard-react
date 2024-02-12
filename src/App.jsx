import "./App.css";
import { Page } from "./page";
import {
  ErrorProvider,
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <>
      <ErrorProvider>
        <LocationProvider>
          <WeatherProvider>
            <FavouriteProvider>
              <Page />
            </FavouriteProvider>
          </WeatherProvider>
        </LocationProvider>
      </ErrorProvider>
    </>
  );
}

export default App;
