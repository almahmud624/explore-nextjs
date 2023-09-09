import React from "react";

const PortfolioLayout = ({ children }: any) => {
  return (
    <div>
      <div className="max-w-[972px] mx-auto py-16">
        <div>
          <h1 className="text-6xl font-bold">Our Works</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;
