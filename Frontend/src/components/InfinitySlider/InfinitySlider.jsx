import React from "react";
import Marquee from "react-fast-marquee";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const InfinitySlider = ({ imgData1, imgData2, size = "200" }) => {
  if (imgData2) {
    return (
      <LazyLoadComponent>
        <div className="w-full flex flex-col gap-4">
          <Marquee direction="right">
            {imgData2?.map((item) => (
              <div className="slide-right mx-2">
                <img alt=""
                  src={item.path}
                  className={`!h-[${size}px] !w-[${size}px] rounded-2xl`}
                  height={size}
                  width={size}
                />
              </div>
            ))}
          </Marquee>

          <Marquee direction="left">
            {imgData1?.map((item) => (
              <div className="slide-left mx-2">
                <img alt=""
                  src={item.path}
                  className={`!h-[${size}px] !w-[${size}px] rounded-2xl`}
                  height={size}
                  width={size}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </LazyLoadComponent>
    );
  } else {
    return (
      <LazyLoadComponent>
        <Marquee direction="right">
          {imgData1?.map((item) => (
            <div className="slide-right mx-2">
              <img alt=""
                src={item.path}
                className={`!h-[${size}px !w-[${size}px] rounded-2xl`}
                height={size}
                width={size}
              />
            </div>
          ))}
        </Marquee>
      </LazyLoadComponent>
    );
  }
};

export default InfinitySlider;
