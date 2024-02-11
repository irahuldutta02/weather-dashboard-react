import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

export function AddToFav() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  const [isFav, setFav] = useState(false);

  useEffect(() => {
    if (favourites.find((fav) => fav.location === location)) {
      setFav(true);
    }
  }, []);

  function handleFav() {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setFav(!isFav);
  }

  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
            onClick={(e) => {
              e.preventDefault();
              handleFav();
            }}
          >
            <span>{!isFav ? "Add to Favourite" : "Remove Favorite"}</span>
            {!isFav ? (
              <img src="./assets/heart.svg" alt="" />
            ) : (
              <img src="./assets/heart-red.svg" alt="" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
