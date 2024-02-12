import { createContext } from "react";

const WeatherContext = createContext("");
const FavouriteContext = createContext("");
const LocationContext = createContext("");
const ErrorContext = createContext("");

export { WeatherContext, FavouriteContext, LocationContext, ErrorContext };