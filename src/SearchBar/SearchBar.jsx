import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBar() {
  return (
    <div className="w-full bg-white py-3 sticky top-0 z-10">
      <div className="w-full h-12 bg-white flex items-center justify-center py-3 rounded-full">
        <SearchIcon className="h-6 text-red-600 mr-2" />
        <input
          type="text"
          name="search"
          placeholder="Where are you going?"
          className="outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
