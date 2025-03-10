import React, { useEffect, useLayoutEffect, useState } from "react";
// import { GenIcon } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import AppSvgs from "../AppSvgs/AppSvgs";

const HeadshotSelection = ({
  userData,
  setUserData,
  errors,
  headshots = null,
  section,
}) => {
  const [headshotType, setHeadshotType] = useState(userData?.headshotType);

  useEffect(() => {
    if (headshotType) {
      const updatedUserData = { ...userData };
      updatedUserData.headshotType = headshotType;
      setUserData(updatedUserData);
    }
  }, [headshotType]);

  return (
    <div className="flex flex-col gap-4 justify-between relative h-full w-full items-center ">
      <div className="text-center font-bold lg:text-left text-xs sm:text-xl md:text-3xl flex flex-row gap-1 items-center justify-center">
        <AppSvgs name="linkedIn" width={40} height={40} /> <span>Boost your LinkedIn / Resume</span>
      </div>
      <div className="grid lg:grid-cols-[40%_auto]  gap-8 w-full  ">


        <div className="flex flex-col justify-center  items-center w-full max-h-[400px]  overflow-auto">
          {headshots &&
            headshots
              ?.filter((item) => {
                return item?.name === section && item?.headshotInfo;
              })
              .map((filteredItem, idx) => (
                <>
                  <div
                    key={`imgPreview${idx}`}
                    className="flex justify-center rounded-xl "
                  >
                    <LazyLoadImage
                      alt=""
                      src={filteredItem?.imgPreview}
                      className="!max-h-[320px] mx-auto rounded-xl"
                    />
                  </div>
                </>
              ))}

          <div className="text-center text-xs md:text-base py-2">
            <div>
              This image is a reference for{" "}
              <strong>
                Image Quality, Outfit, and Background of what you’ll get.
              </strong>
            </div>
          </div>
        </div>

        <div className="px-1 flex flex-col gap-4 justify-center  w-full">
          <div className="text-2xl text-center">Headshot Type:</div>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
            {headshots &&
              headshots?.map((item, idx) => (
                <Link
                  key={`headshotType${idx}`}
                  to={item.link}
                  className={`bg-[#f1f1f1]  text-[#131313] ${userData?.headshotType === item?.name
                    ? "!bg-[#1d2838] text-[#F1F1F1] rounded-lg shadow-[0_0_0_2px_#224cc2]"
                    : "bg-[#f1f1f1] "
                    } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-full pl-2  transition duration-500 text-[12px] md:text-[12px] lg:text-[14px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
                  onClick={() => setHeadshotType(item?.name)}
                >
                  <span className="w-5/6">{item?.name}</span>
                  <div className="flex flex-col justify-center items-center">
                    <FaChevronRight />
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-xs md:text-base py-2">
            {headshots &&
              headshots
                ?.filter((item) => {
                  return item?.name === section && item?.headshotInfo;
                })
                .map((filteredItem, idx) => (
                  <>
                    <div
                      key={`imgPreview${idx}`}
                      className="flex justify-start rounded-xl "
                    >
                      {filteredItem?.info}
                    </div>
                  </>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadshotSelection;
