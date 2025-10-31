"use client";

import React from "react";

const WaveTop = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="w-full h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        opacity="1"
        preserveAspectRatio="none"
        viewBox="0 0 1600 200"
      >
        <path
          d="M-8,95.3C-8,95.3,189,2,398,2s604,184.7,800,184.7s412-91.4,412-91.4V271H-8V95.3z"
          className="fill-white"
        />
        <path
          d="M1610,95.3c0,0-216,80-412,80c-98,0-245.8-40.5-395.1-80.9
          c149.4,46.2,297.1,92.3,395.1,92.3C1394,186.7,1610,95.3,1610,95.3z"
          className="fill-white"
        />
      </svg>
    </div>
  );
};

export default WaveTop;
