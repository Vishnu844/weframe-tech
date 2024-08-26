"use client";

import React, { useState } from "react";

const Checkbox = ({ name }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`${
        checked ? "" : "border border-[#62C3C6] rounded-md"
      } w-4 h-4 flex flex-shrink-0 justify-center items-center relative`}
    >
      <input
        defaultChecked={checked}
        aria-label={name}
        type="checkbox"
        className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
        onClick={() => setChecked(!checked)}
      />
      {checked && (
        <div className="bg-[#62C3C61A] rounded-md">
          <svg
            className="text-[#62C3C6]"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
