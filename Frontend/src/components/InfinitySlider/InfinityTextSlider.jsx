import React from "react";
import AppSvgs from "../AppSvgs/AppSvgs";
import { MdGroups } from "react-icons/md";
import Marquee from "react-fast-marquee";


const InfinityTextSlider = () => {
  const data = [
    {
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },
    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },

    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },

    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedIn" width={38} height={38} />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: (
        <>
          <MdGroups size={38} className="text-white" />
        </>
      ),
      content: "TEAM HEADSHOTS",
    },
  ];
  return (
    <>
      {/* <div className="w-full flex flex-col gap-4">
        <div className="infinityTextSlider">
          <div className="text-slide-track-right ">
            {data?.map((item) => (
              <div className="text-slide-right md:pt-0">
                <div className="flex pt-1 gap-2 items-center justify-center">
                  {item.svg && <span>{item.svg}</span>}
                  <span className="flex flex-col justify-center text-white text-3xl">
                    {item?.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Marquee className="!infinityTextSliderBg pb-1">
        {data?.map((item) => (
          <div className="text-slide-right md:pt-0 mx-10">
            <div className="flex pt-1 gap-2 items-center justify-center">
              {item.svg && <span>{item.svg}</span>}
              <span className="flex flex-col justify-center text-white text-3xl">
                {item?.content}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default InfinityTextSlider;
