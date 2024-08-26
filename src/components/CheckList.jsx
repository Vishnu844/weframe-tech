"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Checkbox from "./Checkbox";

const CheckList = ({ title = "", options = [] }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full">
      <div
        className="text-center text-[#365758] font-semibold text-lg mb-4"
        onClick={handleToggle}
      >
        {title}
        <FaAngleDown
          className={`text-[#62C3C6] w-4 h-4 float-right mt-1.5 ${
            toggle ? "rotate-180" : ""
          }`}
        />
      </div>
      {toggle && (
        <>
          <ul>
            {options?.map((option) => {
              return (
                <li key={option} className="flex gap-[10px] items-center">
                  <Checkbox />
                  <div className="text-[#365758] text-base">{option}</div>
                </li>
              );
            })}
          </ul>
          <button className="w-full mt-5 h-8 border-2 border-[#ECFEAA] px-[18px] py-[6px] text-[#045A5C] rounded-tl-[24px] rounded-br-[24px] text-sm rounded-md">
            Anmelden
          </button>
        </>
      )}
    </div>
  );
};

export default CheckList;
