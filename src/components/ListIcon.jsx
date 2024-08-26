import React from "react";

const color = {
  highlighted: "#62C3C6",
  normal: "#62C3C64D",
};

const ListIcon = ({ color = "#62C3C6" }) => {
  return (
    <>
      <div
        className={`w-[10px] h-4 rounded-tl-[16px] rounded-br-[16px]  bg-[${color}]`}
      ></div>
    </>
  );
};

ListIcon.color = color;

export default ListIcon;
