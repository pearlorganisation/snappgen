import React from "react";
import Helmet from "react-helmet";

const ContactUs = () => {
  const contactContent = [
    {
      title: "Company Name:",
      heading: "Playcloud Technologies Private Limited",
      content: (
        <>
          <span className="font-bold">UK Address:</span>
          <br />
          PLAYCLOUD TECHNOLOGIES LIMITED 15665808
          <br />
          61 Bridge Street,Kington,Hr5 3dj, Kington, United Kingdom HR5 3DJ.
          <br />
          Email:{" "}
          <a
            href="mailto:support@headgen.ai"
            className="text-[#e6e4e4] underline hover:text-[#ffffff]"
          >
            support@headgen.ai
          </a>
        </>
      ),
    },
    {
      title: "Address:",
      heading: "",
      content: (
        <>
          10th floor, RMZ Latitude Commercial Building, Bellary Rd,
          Vinayakanagar, Byatarayanapura, Bengaluru, Karnataka 560024
          <br />
          Email:{" "}
          <a
            href="mailto:support@headgen.ai"
            className="text-[#e6e4e4] underline hover:text-[#ffffff]"
          >
            support@headgen.ai
          </a>
          <br />
          Customer Care:{" "}
          <a
            href="tel:+919820442749"
            className="text-[#e6e4e4] underline hover:text-[#ffffff]"
          >
            +91 9820442749
          </a>
        </>
      ),
    },
  ];

  return (
    <>
    <Helmet>
        <title>
        Contact HeadGen AI | Get in Touch with Our AI Photo Generator Team
        </title>
        {/* <meta
          name="description"
          content="Discover how HeadGen AI’s AI image generator creates professional, realistic headshots for resumes, teams, doctors, and LinkedIn. Using our AI photo generator, we deliver the best AI Generated images with ease."
        /> */}
      </Helmet>
    <div className="w-full text-white py-24 px-10 xl:px-[250px] bg-[#161616] flex flex-col gap-6 xl:gap-[3.5rem] tracking-wider">
      <h1 className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px]">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row gap-10 font-regular text-[#f1f1f1]">
        {contactContent &&
          contactContent?.map((item) => (
            <div className="w-full md:w-[48%] shadow-[0_0_0_1px_#F1F1F1] rounded-xl p-6 flex flex-col gap-2  text-md bg-gradient-to-r from-[#295ac4] to-[#0a3797] cursor-default hover:-translate-y-2 transition duration-1000">
              <div className="flex flex-col sm:flex-row font-semibold gap-2">
                <div className="font-bold">{item?.title}</div>
                <h2 className="text-sm sm:text-base">{item?.heading}</h2>
              </div>
              <div className="text-sm sm:text-base leading-7 xl:leading-9  font-semibold">
                {item?.content}
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default ContactUs;
