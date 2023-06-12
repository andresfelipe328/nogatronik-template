import React from "react";

import { FiArrowRight } from "react-icons/fi";

import OverviewProduct from "./OverviewProduct";

const GroupThree = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>Just for You</h1>
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

export default GroupThree;
