import { useContext, useState } from "react";
import { LocationContext } from "../../context";
import { useDebounce } from "../../hooks";

export function SearchLocation() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  function getDataWithLatLong(locationName) {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=${
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
      .catch((error) => {
        console.log(error);
        setSelectedLocation({
          location: "",
          latitude: 0,
          longitude: 0,
        });
      });
  }

  const doSearch = useDebounce((searchTerm) => {
    getDataWithLatLong(searchTerm);
  }, 500);

  function onSearch() {
    doSearch(searchTerm);
  }

  return (
    <>
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            value={searchTerm}
            required
            onChange={(e) => {
              e.preventDefault();
              setSearchTerm(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSearch();
            }}
          >
            <img src="./assets/search.svg" />
          </button>
        </div>
      </form>
    </>
  );
}
