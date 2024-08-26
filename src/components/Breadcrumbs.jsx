import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Breadcrumbs = () => {
  return (
    <>
      <section className="sm:mt-[90px] mt-10 flex items-start justify-between">
        <ul className="flex items-center gap-4 flex-wrap text-base text-[#62C3C6]">
          <li>Home</li>
          <li>
            <FaArrowRightLong className="w-[20px] h-[10px]" />
          </li>
          <li>Livebestand</li>
          <li>
            <FaArrowRightLong className="w-[20px] h-[10px]" />
          </li>
          <li className="text-[#045A5C] font-bold">Cannabis Blüten</li>
        </ul>
        <div className="hidden flex-col gap-3 md:flex">
          <Link href="#" className="text-[#365758]">
            GKV mit Kostenübernahme?
          </Link>
          <button className="text-[#045A5C] text-sm border-[2px] border-[#62C3C6] px-[20px] py-2 rounded-tl-[24px] rounded-br-[24px]">
            Preisoptionen
          </button>
        </div>
      </section>
    </>
  );
};

export default Breadcrumbs;
