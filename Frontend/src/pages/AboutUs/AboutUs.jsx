import React from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";
import AsSeenOn from "../../components/AsSeenOn/AsSeenOn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Helmet from "react-helmet";

const AboutUs = () => {
  const aboutUsContent = (
    <>
      <Helmet>
        <title>About HeadGen AI | Leading AI Headshot & Photo Generator for Professional AI Headshots</title>
        <meta
          name="description"
          content="Learn how HeadGen AI’s AI image generator delivers professional, realistic headshots. Our AI Generated images and AI Headshot generator create polished photos for individuals and teams."
        />
      </Helmet>

      <div className="leading-relaxed flex flex-col gap-1">
        <h3 className="font-bold">Our Mission:</h3>

        <span>
          Harness the transformative power of generative AI to enhance everyday
          life. Democratize access to generative AI, making it accessible to
          everyone.
        </span>

        <h3 className="font-bold">About Us:</h3>

        <span>
          Playcloud Technologies Limited (HeadGen AI) is dedicated to perfecting
          AI-generated images. Situated at the crossroads of design,
          programming, and art. We craft exceptional digital tools and services
          leveraging generative AI.
        </span>

        <h3 className="font-bold">Founders:</h3>

        <span>
          Ruark Gordon: Film Director, Producer, and Serial Entrepreneur.
          <br />
          Krasia Gordon: Computer Engineer with a knack for visual design.
        </span>

        <h3 className="font-bold">Contact Us:</h3>

        <span>
          Email: support@headgen.ai <br />
          WhatsApp: +91 9820442749 (for collaborations or urgent requests)
          <br />
          We value your input and welcome your thoughts, feedback, and requests.
          Let's shape the future together!
        </span>
      </div>
    </>
  );

  const foundersContent = [
    {
      name: "Ruark Gordon",
      designation: "Founder & CEO.",
      imagePath: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030757/ruark_mkfzqh.png",
      socials: [
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/ruarkgordon/",
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/ruarkn/",
        },
      ],
      content: (
        <>
          Ruark Gordon is an experienced Film Director and Producer who has
          created over 700 ad films for 200 corporations over the past 11 years.
          As a serial entrepreneur, he has founded companies such as Affy
          Studios, Playcloud Technologies Limited, and Medzzi. With a deep
          passion for generative AI, Ruark has utilized his extensive experience
          as a photographer, during which he created print campaigns for
          numerous brands and corporations. This background has equipped him
          with the skills to craft the best prompts for generating the most
          realistic and high-quality AI images, tailored specifically for
          corporate needs and dating applications.
        </>
      ),
    },
    {
      name: "Krasia Gordon",
      designation: "Co-Founder & Design Lead.",
      imagePath: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030757/krasia_xvwlup.png",
      socials: [
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/krasia-noronha-76759721a/",
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/_dr_kiki__/",
        },
      ],

      content: (
        <>
          Krasia Gordon has a deep understanding and passion for generative AI
          and visual aesthetics. As a computer science graduate, she leveraged
          her technical knowledge to work alongside her brother, Ruark, in
          creating the most realistic AI headshot generator on the market.
          Krasia's strengths in computer science and visual design, combined
          with Ruark's vast experience as an entrepreneur and photographer, have
          created the perfect blend for HeadGen AI, resulting in a
          groundbreaking tool for generating high-quality AI images.
        </>
      ),
    },
  ];

  const logoData = [
    {
      name: "walmart logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1up3Y8G7BYQt4vFDeXYicUUbrnMDNz0QK&sz=s600",
    },
    {
      name: "microsoft logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=10vAAtNBCVa35oLUmY6NZKDwrq2kl8w6V&sz=s600",
    },
    {
      name: "google logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1T5_P_dHHDNxPdlN_oCp8lxcxAM7BXYEp&sz=s600",
    },
    {
      name: "airbnb logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1m45hPUM6sDgtDdC1hG89FKgd7MAmAwsi&sz=s600",
    },
    {
      name: "amazon logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1bupr8brSqprqrt5xDygIUbcTkxkc-uX0&sz=s600",
    },
  ];

  return (
    <div className="bg-[#161616]">
      <div className="relative w-full text-white py-14 xl:py-24 px-10 xl:px-[250px]  flex flex-col gap-8 xl:gap-[3.5rem] tracking-wider">
        <div className="mt-10">
          <LazyLoadImage alt="" 
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721024048/about_us_page_tzdcu9_nqiswz.webp"
            className="w-full rounded-xl shadow-[0_0_0_1px#d1d1d1]"
          />
        </div>
        <div className="flex justify-center my-10">
          <div className="flex flex-col md:flex-row flex-wrap md:justify-between w-full">
            <div className="w-full md:w-1/5 flex flex-col gap-4 justify-center items-center ">
              <h1 className="flex flow-row md:flex-col gap-1 w-fit text-5xl leading-[3.5rem] py-3 md:py-0 ">
                <div className="text-[#F1F1F1]  font-medium">Our</div>
                <div className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                  story
                </div>
              </h1>
            </div>
            <div className="w-full md:w-3/5 flex flex-col gap-6 items-center">
              {aboutUsContent && (
                <p className="text-justified xl:text-xl">{aboutUsContent}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <AsSeenOn />

      <div className="relative w-full text-white px-10 xl:px-[250px] py-20 bg-[#161616] flex flex-col gap-14 md:gap-8 xl:gap-[6rem] tracking-wider">
        <h2 className="text-[#F1F1F1] text-center text-3xl md:text-5xl font-medium">
          Meet the AI Founders of{" "}
          <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold py-5">
            Headgen
          </span>
        </h2>

        <div className="flex flex-col gap-6 md:gap-0 md:flex-row flex-wrap md:justify-between w-full ">
          <div className="w-full md:w-2/5 flex flex-col gap-4 justify-center items-start ">
            <div
              className={`flex flex-col mx-auto md:mx-0 justify-evenly items-center bg-gradient-to-b  from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
            >
              <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                <LazyLoadImage alt="" 
                  src={foundersContent[0]?.imagePath}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                className={`h-[50%] flex flex-col justify-between
                gap-4 items-center`}
              >
                <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl">
                  {foundersContent[0]?.name}
                </div>

                <div className="px-2 text-center font-bold text-[#F1F1F1] text-md">
                  {foundersContent[0]?.designation}
                </div>
                <div className="flex font-medium animatedReveal">
                  {foundersContent[0]?.socials?.map((e, idx) => (
                    <Link
                      key={`founder0${idx}`}
                      to={e?.link}
                      className="flex flex-col justify-center "
                    >
                      <AppSvgs name={e?.name} width={32} height={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-6 justify-center *:items-center">
            {foundersContent[0]?.content && (
              <p className="text-justified xl:text-xl">
                {foundersContent[0]?.content}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-6 md:gap-0 flex-wrap md:justify-between w-full">
          <div className="w-full order-2 md:order-none md:w-3/5 flex flex-col gap-6 justify-center *:items-center">
            {foundersContent[1]?.content && (
              <p className="text-justified xl:text-xl">
                {foundersContent[1]?.content}
              </p>
            )}
          </div>

          <div className="w-full md:w-2/5 flex flex-col gap-4 justify-center items-end ">
            <div
              className={`flex flex-col  mx-auto md:mx-0 justify-evenly items-center bg-gradient-to-b  from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
            >
              <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                <LazyLoadImage alt="" 
                  src={foundersContent[1]?.imagePath}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                className={`h-[50%] flex flex-col justify-between
                gap-4 items-center`}
              >
                <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl">
                  {foundersContent[1]?.name}
                </div>

                <div className="px-2 text-center font-bold text-[#F1F1F1] text-md">
                  {foundersContent[1]?.designation}
                </div>
                <div className="flex font-medium animatedReveal">
                  {foundersContent[1]?.socials?.map((e, idx) => (
                    <Link
                      key={`founder0${idx}`}
                      to={e?.link}
                      className="flex flex-col justify-center "
                    >
                      <AppSvgs name={e?.name} width={32} height={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/corporate-ai-headshots"
          className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full py-3 md:py-5 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
        >
          Get your photos for €9
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
