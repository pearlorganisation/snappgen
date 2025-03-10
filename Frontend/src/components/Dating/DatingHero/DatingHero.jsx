import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const DatingHero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-8 md:py-0">
      <div className="flex flex-col items-center md:items-start justify-center gap-6 w-full">
        <h2 className=" text-center md:text-left text-[1.9em] sm:text-[2.4em] lg:text-[3rem] 2xl:text-[4.3rem] font-semibold leading-tight text-[#F1F1F1] w-full">
          <div>
            <span className="font-semibold bg-gradient-to-r from-[#e73e71] to-[#af1040]  inline-block text-transparent bg-clip-text">
              Double
            </span>{" "}
            your
          </div>
          <div className="w-full">matches with our</div>
          <div>AI dating photos</div>
        </h2>
        <h3 className="px-10 md:px-0 text-[13px] sm:text-[13px] lg:text-[14px] 2xl:text-[16px] text-[#F1F1F1] text-center md:text-left">
          <div>
            Use our AI headshot generator built by AI researchers to improve
            your dating
          </div>
          <div>
            profile in just minutes. Look your best to attract the best.
          </div>
        </h3>
        <div>
          <Link
            to="/dating-ai-headshots"
            className="hover:squeezyBtn flex flex-col justify-center items-center bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57] hover:to-[#861436] text-[#F1F1F1] rounded-lg w-full px-6 h-[58px] hover:shadow-[0_0_0_2px_#ffffff] transition duration-500"
          >
            Get your photos for €9
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-end">
        <LazyLoadImage alt=""
          src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1723100630/HeadGen_AI_Dating_xnvsvi.webp"
          className="w-full !max-h-[700px] !max-w-[700px]"
          height={"700px"}
          width={"700px"}
        />
      </div>
    </div>
  );
};

export default DatingHero;
