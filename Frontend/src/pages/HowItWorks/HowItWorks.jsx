import React from "react";
import { Link } from "react-router-dom";
import InfinityTextSlider from "../../components/InfinitySlider/InfinityTextSlider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Helmet from "react-helmet";

const HowItWorks = () => {
  //   const [isAnimated, setIsAnimated] = useState(false);
  const cardData = [
    {
      title: "Upload a selfie",
      imgPath:
        "https://drive.google.com/thumbnail?id=1Z2eHvjtVo6jYo9EGwSPYILub23hsMxBY&sz=s600",
    },
    {
      title: "Make payment",
      imgPath:
        "https://drive.google.com/thumbnail?id=1pndNiBuEgvuDl_RVGFTpw_W6vCCWvCn1&sz=s600",
    },
    {
      title: "Get Images",
      imgPath:
        "https://drive.google.com/thumbnail?id=17smkegUhG8QWeR3v8xMhLqx8gGPG8l1a&sz=s600",
    },
  ];

  const imgData1 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          How HeadGen AI Works | Simple AI Headshot Generator & AI Photo Generation Process
        </title>
        <meta
          name="description"
          content="Discover how HeadGen AI’s AI image generator creates professional, realistic headshots for resumes, teams, doctors, and LinkedIn. Using our AI photo generator, we deliver the best AI Generated images with ease."
        />
      </Helmet>

      <div className="w-full py-20 flex flex-col bg-[#161616] gap-10">
        <div className="flex justify-center px-10  xl:px-[160px] 2xl:px-[250px] py-14">
          <div className="flex flex-row flex-wrap gap-6 lg:gap-0 md:justify-between w-full">
            <div className="w-full lg:w-1/5 flex flex-col gap-4 justify-center items-center ">
              <h1 className="flex flex-col gap-1 w-fit">
                <div className="text-[#F1F1F1] text-[60px] 2xl:text-[72px] font-medium leading-6">
                  How it
                </div>
                <div className="text-[60px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                  works
                </div>
                <Link
                  to="/corporate-ai-headshots"
                  className="hover:squeezyBtn flex flex-col justify-center  items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
                >
                  Get your photos for €9
                </Link>
              </h1>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-6 items-center">
              <div className="w-full flex justify-center">
                <iframe
                  src="https://res.cloudinary.com/dj2fvzfmm/video/upload/v1738928785/HeadGen_AI_-_How_to_Use_Video_nvohts.mp4"
                  width="100%"
                  height="100%"
                  className="rounded-2xl h-[200px] sm:w-[500px] sm:h-[300px] md:h-[300px] md:w-[640px] 2xl:h-[400px] 2xl:w-[700px]"
                  title="how it works video"

                ></iframe>
              </div>

              <div className="text-[#F1F1F1] text-[10px]">
                Upload a selfie and get Professional Images for your LinkedIn
                Profile, Resume, TV Commercial etc
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-24 px-10  xl:px-[160px] 2xl:px-[250px]">
          {/* <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            HeadGen
          </span>{" "}
          AI Blog
        </div> */}
          <div>
            <div className="flex flex-row flex-wrap gap-10 md:gap-0 justify-center md:justify-between">
              {cardData?.map((item, idx) => (
                <div
                  key={`blogCard${idx}`}
                  className={`flex flex-col justify-evenly items-center w-[80%] md:w-[32%] bg-gradient-to-b from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
                >
                  <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                    <LazyLoadImage alt="" src={item?.imgPath} className="w-full rounded-xl" />
                  </div>
                  <div
                    className={`h-[100px] flex flex-col ${item?.btnLink ? "justify-between" : ""
                      }  gap-4 items-center`}
                  >
                    {item?.title?.length > 0 && (
                      <h2 className="px-2 text-center font-bold text-[#F1F1F1] text-3xl ">
                        {item?.title}
                      </h2>
                    )}

                    {item?.btnLink && (
                      <div className="w-2/3">
                        <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]">
                          Learn More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <InfinityTextSlider />
          </div>
        </div>

        <div className="flex flex-col gap-10 px-10  xl:px-[160px] 2xl:px-[250px]">
          <h2 className="text-center text-[60px] text-[#F1F1F1]">
            Get{" "}
            <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Team Headshots
            </span>
          </h2>

          <div className="container rounded-xl flex justify-center">

            <LazyLoadImage alt=""
              src={`https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021539/headgen/yxyt5l4vqtgi18njndcr.webp`}
              className="w-[100%] rounded-xl"
            />

          </div>
        </div>

        <div className="flex flex-col gap-10 px-10  xl:px-[160px] 2xl:px-[250px]">
          <h2 className="text-center text-[60px] text-[#F1F1F1]">
            Get{" "}
            <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Custom Headshots
            </span>
          </h2>

          <div className="container rounded-xl flex justify-center">

            <LazyLoadImage alt=""
              src={`https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021539/headgen/ko9jishea8ovmtycv4zi.webp`}
              className="w-full rounded-xl"
            />

          </div>
        </div>

        <div className="flex flex-col gap-10 px-10  xl:px-[160px] 2xl:px-[250px]">
          <h2 className="text-center text-[60px] text-[#F1F1F1]">
            Create{" "}
            <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Custom Prompts
            </span>
          </h2>

          <div className="container rounded-xl flex justify-center">

            <LazyLoadImage alt=""
              src={`https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030853/promptSection_brdsnx.png`}
              className="w-full rounded-xl"
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
