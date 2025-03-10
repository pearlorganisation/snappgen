import React from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import BlogCards from "../../components/BlogCards/BlogCards";
import InfinitySlider from "../../components/InfinitySlider/InfinitySlider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Helmet from "react-helmet";

const Dating = () => {
  const datingCardData = [
    {
      title: "Upload your images",
      content: "Upload just 1-4 images of yourself. Selfies work great",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023830/dating_upload_a_selfie_ofqzw1.webp",
    },
    {
      title: "Make payment",
      content:
        "Payment handled by stripe, we do not store your payment details.",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023828/dating_make_payment_xmui3j.webp",
    },
    {
      title: "Get Amazing Dating Images",
      content: "Improve your dating game and stand out with Headgen AI",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023832/dating_get_ai_images_mij2ul.webp",
    },
  ];

  const imgData1 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023847/dating_headshots_14_te6pgq.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023875/dating_headshots_10_zydk4e.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023873/dating_headshots_9_dhykxm.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023871/dating_headshots_8_avfpwp.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023869/dating_headshots_7_s8ulv7.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023867/dating_headshots_6_ekoooq.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023866/dating_headshots_5_fkywuz.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023864/dating_headshots_4_p0uifa.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023862/dating_headshots_3_s8ietc.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023860/dating_headshots_2_g2xr7p.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023858/dating_headshots_1_x3vaj8.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023856/dating_headshots_19_tfm6kz.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023854/dating_headshots_18_cc9z4m.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023852/dating_headshots_17_hnesig.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023850/dating_headshots_16_tqpmic.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023848/dating_headshots_15_r0kmdv.webp",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          AI Dating Headshots | Find Your Match with Realistic AI Photos & AI
          Picture Generator
        </title>
        <meta
          name="description"
          content="Use HeadGen AI’s AI image generator to create the perfect dating profile photo. Our AI Generated images are high-quality and personalized, ensuring you stand out from the crowd."
        />
      </Helmet>
      <div className="w-full py-20 px-10  xl:px-[160px] 2xl:px-[250px] flex flex-col bg-[#161616] gap-10 gradientBgRed">
        <div>
          <DatingHero />
        </div>
        <InfinitySlider imgData1={imgData1} />

        <div className="flex flex-wrap  justify-center gap-6">
          <h3
            className={`flex flex-col justify-center text-center font-bold text-[20px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] text-transparent bg-clip-text`}
          >
            As seen on
          </h3>
          <LazyLoadImage alt=""
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023816/ai_dating_photos_logos_rr8ugz.webp"
            width={"600px"}
          />
        </div>

        <div className="py-20">
          <BlogCards data={datingCardData} datingPage={true} />
        </div>

        <div className="flex flex-wrap gap-20 lg:gap-0 justify-between cursor-default">
          <div className="grid lg:grid-cols-[auto_25rem] gap-20 md:gap-10">
            <div className="relative  w-full bg-gradient-to-br from-[#c4325eab] to-[#e60045c2] rounded-2xl shadow-[0_0_0_1px_#ffffff] pt-10 px-4 md:px-6 transition duration-500">
              <div className="absolute bg-white shadow-[0_0_0_1px_#ffffff] w-2/5 flex justify-center gap-2 top-0 right-0 p-2 rounded-[0_1rem_0_1rem] text-sm md:text-lg 2xl:text-[24px]">
                <span>It's a</span>{" "}
                <span className="font-bold italic">Match!</span>
              </div>
              <div className="flex flex-col gap-10  h-full">
                <div className="flex flex-col sm:flex-row justify-start gap-10 items-center w-full ">
                  <div className="w-fit flex justify-center sm:block !max-h-[500px] sm:-translate-y-28">
                    <LazyLoadImage alt=""
                      src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023815/Untitled_design_68_zueeax.webp"
                      width={300}
                      height={500}
                      className="w-auto h-full !max-h-[900px]"
                    />
                  </div>
                  <div className="pb-4 md:pb-0 flex w-full flex-col justify-normal sm:justify-center !text-responsive  leading-tight items-center sm:items-start font-semibold text-[#F1F1F1] col-span-2 lg:col-span-2 px-2 sm:px-0">
                    <div>Higher</div>
                    <div>Quality</div>
                    <div>Conversations</div>
                    <div className="flex flex-col gap-2 text-[#f1f1f1] text-center sm:text-left text-sm md:text-xl pb-4">
                      Not only will you get more matches, our AI dating photos
                      will also increase the quality of your matches.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-10 ">
              <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-2/3">
                <div className="absolute w-[170px] h-[150px] sm:w-[220px] sm:h-[200px] !max-h-[200px] -top-8 -translate-y-10 -right-5">
                  <LazyLoadImage alt=""
                    src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023816/Corporate_HeadShots_wscmqk.webp"
                    width={220}
                    height={200}
                    className="h-full w-full"
                  />
                </div>

                <div className="flex flex-col h-full justify-evenly gap-4 text-[#f1f1f1] ">
                  <div className="flex flex-col gap-0 ">
                    <div className="text-[44px] font-bold">10X</div>
                    <div className="text-[28px] font-bold w-[200px] leading-tight">
                      Your match game
                    </div>
                  </div>
                  <div className="text-[20px] ">
                    Whether you’re looking for AI Tinder photos or AI Hinge
                    photos, we’ve got you covered.
                  </div>
                </div>
              </div>
              <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff]">
                <div className="flex flex-col justify-evenly gap-4 text-[#f1f1f1]">
                  <div className="flex flex-col gap-0">
                    <div className="text-[28px]  font-bold w-full flex justify-between">
                      <div className="bg-gradient-to-r from-[#ff437b] to-[#ff1158]  inline-block text-transparent bg-clip-text">
                        Find the one.
                      </div>
                      <AppSvgs name="heartPhone" height={44} width={44} />
                    </div>
                  </div>
                  <div className="text-[16px] 2xl:text-[20px]">
                    Looking for a loving partner? Our AI dating photos are
                    guaranteed to help increase your odds of helping you find a
                    long-term partner or find a hookup.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dating;
