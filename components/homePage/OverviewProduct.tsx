import React from "react";

const OverviewProduct = () => {
  return (
    <div className="rounded-md flex flex-col p-2 shadow-sm min-w-[25.65rem]">
      <div className="h-52 bg-slate-700 rounded-md border-2 border-extra/50 shadow-inner"></div>
      <h2>Product Name</h2>
      <p className="text-extra/70">category</p>
      <h3 className="text-extra">product info</h3>
    </div>
  );
};

export default OverviewProduct;
