import { CurrencyRupeeIcon, GlobeIcon } from "@heroicons/react/outline";
import React from "react";

function BottomBar() {
  return (
    <div className="py-6">
      <div className="flex items-center mb-4">
        <div className="mr-6 flex items-center justify-center">
          <GlobeIcon className="w-6 mr-2" />
          <span className="underline font-semibold">English(IN)</span>
        </div>
        <div className="flex items-center justify-center">
          <CurrencyRupeeIcon className="w-6 mr-2" />
          <span className="underline font-semibold">INR</span>
        </div>
      </div>

      <div className="pl-1">
          <span>© 2021 Airbnb,Inc</span>
      </div>
      <div className="pl-1">
         <a href="#privacy">Privacy</a> 
         <span className="px-2">·</span>
         <a href="#privacy">Terms</a> 
         <span className="px-2">·</span>
         <a href="#privacy">Sitemap</a> 
         <span className="px-2">·</span>
         <a href="#privacy">Company details</a> 
      </div>
    </div>
  );
}

export default BottomBar;
