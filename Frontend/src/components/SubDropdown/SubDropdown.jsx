import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const SubDropdown = ({ data, setShowMobDropdown }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div
        className="w-full flex justify-end  py-2 px-3 hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-base transition duration-300 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="w-[120px] flex justify-end gap-1">
          <span className="flex flex-col justify-center">
            <IoIosArrowDown />
          </span>

          {data.name}
        </span>
      </div>

      <div
        className={`${
          showDropdown ? "" : "hidden"
        } w-full bg-[#2f2f31] flex flex-col`}
      >
        {data?.paths?.map((item, idx) => (
          <Link
            key={`subDropdownMenu${idx}`}
            to={item.path}
            className={` w-full text-right py-2 px-3 bg-[#1a1a1b] hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-base transition duration-300 cursor-pointer relative`}
            onClick={() => setShowMobDropdown(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SubDropdown;
