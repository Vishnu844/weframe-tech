"use client";

import React, { useState } from "react";

const Select = ({ title = "", options = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="w-full">
      <div className="text-[#365758] text-lg text-center font-semibold mb-5">
        {title}
      </div>
      <div className="flex justify-center sm:justify-normal gap-1">
        {options.map((item, index) => {
          return (
            <div
              key={item}
              onClick={() => handleIndex(index)}
              className={`${
                index == activeIndex
                  ? "bg-[#62C3C6] text-white"
                  : "bg-[#62C3C64D] text-[#045A5C]"
              } rounded h-7 py-0.5 px-[10px] text-base`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
