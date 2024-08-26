import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="flex justify-end mt-10">
      <div className="flex items-center gap-6">
        <FaArrowLeftLong className="text-[#62C3C6]" />
        <div className="text-[#045A5C] text-lg font-semibold">1</div>
        <div className="text-[#045A5C] text-lg font-semibold">2</div>
        <div className="text-[#045A5C] text-lg font-semibold">3</div>
        <div className="text-[#045A5C] text-lg font-semibold">...</div>
        <div className="text-[#045A5C] text-lg font-semibold">12</div>
        <FaArrowRightLong className="text-[#62C3C6]" />
      </div>
    </div>
  );
};

export default Pagination;
