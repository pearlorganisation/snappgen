import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AsSeenOn = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div
        className={`w-full sm:w-1/5 flex flex-col justify-center text-center font-bold text-lg md:text-2xl 
bg-[#2563EB] text-transparent bg-clip-text `}
      >
        As seen on
      </div>

      <LazyLoadImage alt="" 
        src={`https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729666295/aiphotosgenerator_r2na4s.webp`}
        className={`w-full sm:w-2/3 lg:w-3/5 xl:w-2/5`}
        width={"700px"}
        height={"144px"}
      />
    </div>
  );
};

export default AsSeenOn;
