import React from "react";
import { LuSearch } from "react-icons/lu";

const Searchbar = () => {
  return (
    <>
      <div className="flex items-center py-1.5 px-3 bg-[#EEF7F7] rounded-[30px]">
        <input
          type="text"
          placeholder="Suchen"
          className="bg-[#EEF7F7] border-0 outline-none text-[#62C3C6] placeholder:text-[#62C3C6]"
        />
        <button aria-label="search" className="w-4 h-4">
          <LuSearch className="text-[#28E3E9] w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default Searchbar;
