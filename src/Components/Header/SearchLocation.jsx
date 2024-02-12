import { useState } from "react";
import { useDebounce, useLatLong } from "../../hooks";

export function SearchLocation() {
  const [searchTerm, setSearchTerm] = useState("");

  const getWeatherDataWithLatLong = useLatLong();

  const doSearch = useDebounce((searchTerm) => {
    getWeatherDataWithLatLong(searchTerm);
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
