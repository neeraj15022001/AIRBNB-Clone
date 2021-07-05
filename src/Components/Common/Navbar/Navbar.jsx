import React from "react";
import {
  SearchIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function Navbar({className}) {
  return (
    <div className={`${className} py-2 flex items-center justify-center border-t fixed bottom-0 left-0 right-0 bg-white`}>
      <div className="w-1/2 flex items-center justify-between">
        <div className="flex items-center justify-center flex-col">
          <SearchIcon className="h-7 text-red-600" />
          <p className="text-xs capitalize">explore</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <HeartIcon className="h-7 text-gray-400" />
          <p className="text-xs text-gray-400 capitalize">wishlist</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <UserCircleIcon className="h-7 text-gray-400" />
          <p className="text-xs text-gray-400 capitalize">Log in</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
