import React from "react";

const Wave = () => {
  return (
    <div className="h-[150px] overflow-hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0.28,66.63 C194.98,148.53 254.22,-55.73 501.41,87.34 L500.00,0.00 L0.00,0.00 Z"
          className="stroke-none fill-[#d4d4d4]"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
