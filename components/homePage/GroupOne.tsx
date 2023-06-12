import React from "react";

import { FiArrowRight } from "react-icons/fi";

import OverviewProduct from "./OverviewProduct";

const GroupOne = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>New Arrivals</h1>
        <div className="group flex items-center gap-1 cursor-pointer">
          <p className="text-light/80 group-hover:text-extra transtion-all duration-300 ease-in-out">
            View all
          </p>
          <FiArrowRight className="text-lg text-light/80 group-hover:text-extra group-hover:translate-x-1 transtion-all duration-300 ease-in-out" />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto shadow-inner rounded-md p-2 scroll-smooth hover:scroll-auto">
        <OverviewProduct />
        <OverviewProduct />
        <OverviewProduct />
      </div>
    </>
  );
};

export default GroupOne;

// className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
