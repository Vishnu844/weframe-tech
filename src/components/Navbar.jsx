"use client";

import React from "react";
import cart from "../../public/images/cart.png";
import { links } from "@/constants";
import ListIcon from "./ListIcon";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <ListIcon />
          <p className="text-[#116A6C] text-4xl font-semibold">Blüten</p>
        </div>
        <div className="hidden md:flex">
          <Searchbar />
        </div>
        <div className="nav-links">
          <ul className="flex gap-4 items-center">
            {links.map((link) => {
              return (
                <div key={link.id} className="flex gap-[2px] items-center">
                  <ListIcon
                    color={
                      link.id == 1
                        ? ListIcon.color.highlighted
                        : ListIcon.color.normal
                    }
                  />
                  <li
                    className={`text-[#045A5C] text-base" ${
                      link.id == 1 ? "font-bold" : ""
                    }`}
                  >
                    {link.name}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-2 space-x-2">
          <RxHamburgerMenu
            className="text-[#62C3C6] font-medium"
            onClick={() => setMenuState(!menuState)}
          />
          {menuState && (
            //need to style right-96 acc to different screens
            <div className="absolute top-20 w-56 text-sm bg-white border border-gray-200 shadow-lg">
              <ul>
                {links.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="text-[#045A5C] text-sm p-3 border-b hover:bg-gray-100"
                    >
                      {link.name}
                    </li>
                  );
                })}
                <li className="block sm:hidden text-[#045A5C] text-sm p-3 border-b hover:bg-gray-100">
                  Anmelden
                </li>
              </ul>
            </div>
          )}
          <div className="relative">
            <Image
              src={cart}
              width={22.4}
              height={21}
              className="relative z-10"
              alt="cart"
            />
            <div className="absolute w-[18px] h-[18px] rounded-full bg-[#62C3C64D] text-[#28E3E9] font-medium text-xs flex items-center justify-center z-20 top-[-5px] left-[14px]">
              <p>1</p>
            </div>
          </div>
          <button className="hidden sm:block w-28 h-8 bg-[#ECFEAA] px-[18px] py-[8px] text-[#045A5C] rounded-tl-[24px] rounded-br-[24px] text-sm rounded-md">
            Anmelden
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
