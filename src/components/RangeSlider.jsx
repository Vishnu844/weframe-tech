"use client";

import { useEffect, useRef, useState } from "react";

const RangeSlider = ({
  title = "",
  min = 0,
  max = 100,
  gap = 10,
  quantityType = "",
}) => {
  const rangeInputMinRef = useRef(null);
  const rangeInputMaxRef = useRef(null);
  const rangeRef = useRef(null);

  const [minQuantity, setminQuantity] = useState(min);
  const [maxQuantity, setmaxQuantity] = useState(max);
  const priceGap = gap;

  useEffect(() => {
    if (rangeRef.current) {
      const minPercentage = (minQuantity / rangeInputMinRef.current.max) * 100;
      const maxPercentage =
        100 - (maxQuantity / rangeInputMaxRef.current.max) * 100;

      rangeRef.current.style.left = `${minPercentage}%`;
      rangeRef.current.style.right = `${maxPercentage}%`;
    }
  }, [minQuantity, maxQuantity]);

  const handlePriceInput = (e, type) => {
    const value = parseInt(e.target.value);

    if (type === "min") {
      if (
        maxQuantity - value >= priceGap &&
        value <= rangeInputMaxRef.current.max
      ) {
        setminQuantity(value);
        rangeInputMinRef.current.value = value;
      }
    } else {
      if (
        value - minQuantity >= priceGap &&
        value <= rangeInputMaxRef.current.max
      ) {
        setmaxQuantity(value);
        rangeInputMaxRef.current.value = value;
      }
    }
  };

  const handleRangeInput = (e, type) => {
    const value = parseInt(e.target.value);

    if (type === "min") {
      if (maxQuantity - value < priceGap) {
        setminQuantity(maxQuantity - priceGap);
        rangeInputMinRef.current.value = maxQuantity - priceGap;
      } else {
        setminQuantity(value);
        rangeInputMinRef.current.value = value;
      }
    } else {
      if (value - minQuantity < priceGap) {
        setmaxQuantity(minQuantity + priceGap);
        rangeInputMaxRef.current.value = minQuantity + priceGap;
      } else {
        setmaxQuantity(value);
        rangeInputMaxRef.current.value = value;
      }
    }
  };

  return (
    <>
      <div>
        <div className="text-[#365758] font-semibold text-lg text-center mb-5">
          {title}
        </div>
        <div className="h-[5px] relative bg-[#62C3C64D] rounded-[10px]">
          <div
            className="h-full left-1/4 right-1/4 absolute bg-[#62C3C6] rounded-[10px]"
            ref={rangeRef}
          ></div>
        </div>
        <div className="range-input relative">
          <input
            type="range"
            className="range-min"
            min={min}
            max={max}
            ref={rangeInputMinRef}
            value={minQuantity}
            onChange={(e) => handleRangeInput(e, "min")}
          />
          <input
            type="range"
            className="range-max"
            min={min}
            max={max}
            ref={rangeInputMaxRef}
            value={maxQuantity}
            onChange={(e) => handleRangeInput(e, "max")}
          />
        </div>
        <div className="flex mt-2">
          <input
            type="text"
            className="w-full py-[2px] px-[10px] bg-[#8191911A] rounded-[20px] focus:outline-none"
            value={
              quantityType === "price" ? `${minQuantity} €` : `${minQuantity} %`
            }
            onChange={(e) => handlePriceInput(e, "min")}
          />
          <span>—</span>
          <input
            type="text"
            className="w-full py-[2px] px-[10px] bg-[#8191911A] rounded-[20px] focus:outline-none"
            value={
              quantityType === "price" ? `${maxQuantity} €` : `${maxQuantity} %`
            }
            onChange={(e) => handlePriceInput(e, "max")}
          />
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
