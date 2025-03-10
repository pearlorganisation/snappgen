import React, { useEffect, useLayoutEffect, useState } from "react";
// import { GenIcon } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";

import UserDetails from "../../UserDetails/UserDetails";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DatingGenderSelection = ({
  userData,
  setUserData,
  errors,
  headshots = null,
  type,
}) => {
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserData({
        email: "",
        gender: "Male",
        files: "",
        generationType: "individualDating",
      });
      localStorage.clear();
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const selectionData = [
    {
      name: "Male",
      bannerImg:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023820/8_g2bxtb.webp",
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023826/Screenshot_2024-06-11_at_5.02.09_PM_gh46xe.webp",
    },
    {
      name: "Female",
      bannerImg:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023822/9_nmatyz.webp",
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023818/Indoor_Office_Casual_AI_Headshots_8_hb5oll.webp",
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-between relative h-full  w-full items-center">
      {/* <div className="text-center  lg:text-left text-xl sm:text-2xl md:text-3xl">
        Boost your Dating Profile
      </div> */}

      <div className="grid xl:grid-cols-[auto_20rem] gap-8 w-full   ">
        {/* <div className="w-full mt-2 hidden md:flex flex-col  justify-end  rounded-xl">
          {userData?.gender?.length > 0 &&
            selectionData
              ?.filter((item) => {
                return item?.name === userData?.gender;
              })
              .map((filteredItem, idx) => (
                <div
                  key={`filteredItem${idx}`}
                  className="w-full rounded-xl  shadow-[0_0_1px#ababab] "
                >
                  <img
                    alt=""
                    src={`${filteredItem?.bannerImg}`}
                    className="w-full h-full rounded-xl"
                    width={"600px"}
                  />
                </div>
              ))}
        </div> */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center md:justify-start">
            <h2
              className={`flex flex-col justify-center text-center md:text-left font-bold text-base sm:text-4xl text-white pl-2`}
            >
              Boost your Dating Profile
            </h2>
            <LazyLoadImage alt=""
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023816/ai_dating_photos_logos_rr8ugz.webp"
              width={"550px"}
            />
          </div>
          <UserDetails
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            type={type}
          />
        </div>

        <div className="flex flex-col justify-center  items-center w-full max-h-[400px]  overflow-auto">
          <div className="text-center text-xl py-2">What you'll get:</div>
          {userData?.gender?.length > 0 &&
            selectionData
              ?.filter((item) => {
                return item?.name === userData?.gender;
              })
              .map((filteredItem) => (
                <div className="flex justify-center rounded-xl ">
                  <LazyLoadImage
                    alt=""
                    src={filteredItem?.imgPreview}
                    className="!max-h-[320px] mx-auto rounded-xl"
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default DatingGenderSelection;
