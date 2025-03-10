import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import HeadshotsSlider from "./HeadshotsSlider";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import { Link } from "react-router-dom";
import AsSeenOn from "../../components/AsSeenOn/AsSeenOn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Helmet} from "react-helmet"
const FreeHeadshots = () => {
 


  return (
    <>
    <Helmet>
      <title>Free AI Headshots | Try HeadGen AI’s Free AI Image Generator & AI Photo Generator</title>
      <meta name="description" content="Get free AI Generated images with HeadGen AI’s advanced AI image generator. Create professional photos for resumes, teams, or LinkedIn with our easy-to-use AI headshot generator" />
    </Helmet>
    <div className=" space-y-4 text-white pt-28 md:px-10  xl:px-[160px] 2xl:px-[250px]">
      <div className="flex flex-wrap gap-12 md:gap-0 place-items-center space-y-4 ">
        <div className="space-y-6 w-full lg:w-1/2 lg:justify-normal justify-center ">
          <p className="text-5xl  md:text-6xl lg:text-5xl 2xl:text-6xl text-center lg:text-left font-semibold">
            FREE AI HEADSHOT GENERATOR
          </p>
          <div className="space-y-2 ">
            {[
              `No Expensive Photoshoot`,
              `Upload Selfie`,
              `Get free AI Headshots `,
            ].map((item) => {
              return (
                <div className="flex text-lg  justify-center lg:justify-start items-center">
                  <div className="flex gap-2">
                    <div className="w-[50px]">
                      <FaCheck
                        size={22}
                        className="bg-[#204DC7] rounded-full p-1"
                      />
                    </div>
                    <span className="w-[220px]  md:w-[250px]">{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/free-ai-headshots"
              className="w-1/2 px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
            >
              Upload Photos
            </Link>
          </div>
        </div>
        <div className="w-full justify-center lg:justify-normal lg:w-1/2 grid place-items-end  ">
          <div className="grid grid-cols-2  w-fit gap-4">
            {[
              {
                path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022431/Outdoor_Park_Formal_AI_Headshots_1_j32tml.webp",
              },
              {
                path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022431/Outdoor_Park_Formal_AI_Headshots_4_ymvfrv.webp",
              },
              {
                path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022430/Outdoor_Park_Formal_AI_Headshots_3_yzrmwh.webp",
              },
              {
                path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022432/Outdoor_Park_Formal_AI_Headshots_2_hwybsx.webp",
              },
            ].map((item) => {
              return <LazyLoadImage alt=""  className="rounded-lg" src={item.path} />;
            })}
          </div>
        </div>

        {/* trusted by */}

        <AsSeenOn /> 
      </div>

      {/* coupon code */}

      <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-between rounded-lg border-2 border-blue-600 bg-black py-8 px-12 font-medium md:font-bold text-white">
        <span className="mr-4 text-xl text-center lg:text-start lg:text-2xl 2xl:text-4xl">
          COUPON : HDGEN10 FOR 10% OFF
        </span>
        <Link
          to="/corporate-ai-headshots"
          className="w-full md:w-1/3 px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] text-sm rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
        >
          Get Standard Headshots
        </Link>
      </div>

      {/* Free AI Headshots */}

      <div className="flex justify-center gap-3 md:gap-0  md:flex-row flex-col items-center  text-white p-6 rounded-lg shadow-lg">
        <LazyLoadImage
          src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023866/dating_headshots_5_fkywuz.webp"
          alt="Headshot"
          className=" rounded-lg  mr-6"
          width={300}
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Free AI Headshots</h1>
          <p className="text-xl flex flex-col gap-2 md:gap-1">
            <span>  Try our free AI headshot generator!</span>

            <span> Upload a selfie, and we'll email you a low-quality Free AI headshot!</span>

            <span>    For high-quality AI headshots, use our corporate and dating AI
              headshot generator.</span>
          </p>
        </div>
      </div>

      {/* Headshots slider */}
      <HeadshotsSlider />

      {/* dating hero section */}
      <div className="flex justify-center py-20 ">
        <DatingHero />
      </div>
    </div>
    </>
  );
};

export default FreeHeadshots;
