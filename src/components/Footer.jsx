import React from "react";
import ListIcon from "./ListIcon";
import { links } from "@/constants";

const Footer = () => {
  return (
    <footer className="mt-24 flex flex-col items-start gap-10 justify-between px-[16.15%] py-9 bg-[#1A8D91] rounded-tr-[30px] rounded-tl-[30px] sm:flex-row sm:gap-4">
      <div className="h-[143px] content-end">
        <div className="flex flex-col gap-3 font-light text-[#FFFFFF80] text-xs tracking-[0.1em]">
          <p>AGB</p>
          <p>Impressum</p>
          <p>Datenschutz</p>
        </div>
      </div>
      <div>
        {
          <ul className="flex gap-4 flex-wrap items-center max-w-[369px]">
            {links.map((link) => {
              return (
                <div key={link.id} className="flex gap-[2px] items-center">
                  <ListIcon />
                  <li className="text-white text-base">{link.name}</li>
                </div>
              );
            })}
          </ul>
        }
      </div>
      <div className="max-w-[162px]">
        <p className="font-light text-[#FFFFFF80] text-xs tracking-[1%] mb-3">
          Standort
        </p>
        <p className="font-extrabold text-white">
          Bergstraße 49 - 5769469 Weinheim
        </p>
        <p className="font-extrabold text-white">(3 Glocken Quartier)</p>
      </div>
      <div>
        <p className="font-light text-[#FFFFFF80] text-xs tracking-[1%] mb-3">
          Telefon
        </p>
        <p className="font-extrabold text-white">0223 545 5250</p>
      </div>
      <div>
        <p className="font-light text-[#FFFFFF80] text-xs tracking-[1%] mb-3">
          Öffnungszeiten
        </p>
        <p className="font-light text-[#FFFFFF80] text-xs tracking-[1%]">
          Mo-Fr
        </p>
        <p className="font-extrabold text-white">09:00 – 18:00 Uhr</p>
        <p className="font-light text-[#FFFFFF80] text-xs tracking-[1%]">Sa</p>
        <p className="font-extrabold text-white">09:00 – 14:00 Uhr</p>
      </div>
    </footer>
  );
};

export default Footer;
