import Image from "next/image";
import React from "react";
import mockImage from "../../public/images/mockup.png";
import symbol from "../../public/images/Group.png";

const ProductCard = ({
  name = "",
  kultivar = "",
  THC = 0,
  newItem = false,
}) => {
  return (
    <div className="max-w-[310px] h-full">
      <div className="border-2 border-[#28E3E9] rounded-tl-[30px] shadow-[0px_0px_10px_0px_#0740401A]">
        <div className="pt-5 px-3 flex items-end justify-between">
          {newItem ? (
            <div className="w-full flex items-center justify-between">
              <span className="text-[#116A6C] bg-[#62C3C61A] rounded-[30px] py-[3px] px-3 text-xs font-light">
                • nicht lieferbar
              </span>
              <span className="text-[#116A6C] bg-[#62C3C61A] rounded-[30px] py-[2px] px-3 text-xs font-light">
                neu
              </span>
            </div>
          ) : (
            <span className="text-[#A10C0C] bg-[#A10C0C0D] rounded-[30px] py-[3px] px-3 text-xs font-light">
              • sofort lieferbar
            </span>
          )}
        </div>
        <Image
          src={mockImage}
          alt="mock-image"
          className="w-full h-[150px] object-contain"
          height={150}
          width={310}
        />
      </div>
      <div className="bg-[#62C3C64D] p-5 border-2 border-[#28E3E9] border-t-0 rounded-br-[30px] shadow-[0px_0px_10px_0px_#0740401A]">
        <div className="flex flex-col gap-4">
          <span className="w-fit bg-[#62C3C64D] rounded py-0.5 px-[10px] text-base text-[#365758] font-semibold">
            Canify
          </span>
          <div className="flex gap-1.5 items-center flex-wrap">
            <span className="flex-1 text-center py-1 px-[10px] bg-[#FCFCFA] text-[#116A6C] rounded text-base">
              THC {THC}%
            </span>
            <span className="flex-1 text-center py-1 px-[10px] bg-[#62C3C6] text-[#FCFCFA] rounded text-base">
              CBD {`<1%`}
            </span>
            <Image src={symbol} width={24} height={24} alt="group" />
          </div>
          <div className="text-[#116A6C] text-lg font-semibold tracking-wide">
            {name}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>Kultivar</div>
              <div>{kultivar}</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Genetik</div>
              <div>Hybrid</div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-2 items-center justify-between flex-wrap">
          <div>
            <div className="text-[#62C3C6] font-extrabold text-2xl">
              € <span className="text-[#116A6C]">11,66</span>
            </div>
            <div className="text-[#365758] text-xs font-light">pro Gramm</div>
          </div>
          <button className="flex-1 bg-[#ECFEAA] px-[18px] py-[8px] text-[#045A5C] rounded-tl-[24px] rounded-br-[24px] text-sm rounded-md">
            in den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
