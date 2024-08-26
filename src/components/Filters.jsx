"use client";

import { filters } from "@/constants";
import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import Select from "./Select";
import CheckList from "./CheckList";
import { FaAngleDown } from "react-icons/fa6";

const Filters = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <section>
        <button
          className="w-full mb-10 bg-[#62C3C61A] px-[10px] py-0.5 text-2xl font-semibold text-[#045A5C]"
          onClick={() => setIsVisible(!isVisible)}
        >
          Filter
        </button>
        <div className="flex flex-col gap-10">
          {isVisible && (
            <>
              {filters.map((filter) => {
                switch (filter.type) {
                  case "slider":
                    return (
                      <RangeSlider
                        key={filter.id}
                        title={filter.name}
                        min={filter.min}
                        max={filter.max}
                        gap={filter.gap}
                        quantityType={filter.quantity}
                      />
                    );

                  case "select":
                    return (
                      <Select
                        key={filter.id}
                        title={filter.name}
                        options={filter?.options}
                      />
                    );

                  case "checklist":
                    return (
                      <CheckList
                        key={filter.id}
                        title={filter.name}
                        options={filter?.options}
                      />
                    );
                  default:
                    break;
                }
              })}
              <div className="text-center text-[#365758] font-semibold text-lg mb-4">
                Terpene
                <FaAngleDown
                  className={`text-[#62C3C6] w-4 h-4 float-right mt-1.5`}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Filters;
