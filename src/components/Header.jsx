import React from "react";
import ListIcon from "./ListIcon";
import Searchbar from "./Searchbar";
import { FaAngleDown } from "react-icons/fa6";
import { CgLayoutList } from "react-icons/cg";
import { BsToggle2On } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <section className="mt-10 flex gap-5 items-center justify-between md:items-start">
        <div className="hidden items-center gap-2 md:flex">
          <ListIcon />
          <p className="text-[#116A6C] text-4xl font-semibold">Blüten</p>
        </div>
        <div className="flex items-center flex-wrap gap-4 lg:flex-nowrap">
          <Searchbar />
          <div className="flex items-center gap-2 py-0.5 px-[10px] bg-[#62C3C64D] rounded">
            <p className="text-[#365758] text-base font-semibold tracking-[1%]">
              Sortieren nach
            </p>
            <FaAngleDown className="text-[#62C3C6] w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 py-0.5 px-[10px] bg-[#62C3C64D] rounded">
            <p className="text-[#365758] text-base font-semibold tracking-[1%]">
              Verfügbarkeit
            </p>
            <BsToggle2On className="text-[#62C3C6] w-[27px] h-4" />
          </div>
          <div className="py-0.5 px-[10px] bg-[#62C3C64D] rounded">
            <CgLayoutList className="h-6 w-6 text-[#045A5C]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
