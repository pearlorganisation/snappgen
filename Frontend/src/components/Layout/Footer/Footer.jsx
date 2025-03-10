import React from "react";
import { Link } from "react-router-dom";
import AppSvgs from "../../AppSvgs/AppSvgs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  const footerContent = [
    {
      title: "AI Headshots",
      multiList: [
        [
          {
            title: "Corporate",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Doctor",
            link: "/doctor-ai-headshots",
          },
          {
            title: "Lawyer",
            link: "/lawyer-ai-headshots",
          },
          {
            name: "Sales",
            path: "/salesman-ai-headshots",
          },
          {
            name: "Students",
            path: "/students-ai-headshots",
          },
          {
            title: "Teacher",
            link: "/teacher-ai-headshots",
          },
        ],
        [
          {
            title: "Dating",
            link: "/dating-ai-headshot-generator",
          },
          {
            title: "Custom",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Prompts",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Teams",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Blogs",
            link: "/blogs",
          },
          // {
          //   title: "Sitemap",
          //   link: "/sitemap.xml",
          // },
        ],
      ],
    },

    {
      title: "Company",
      list: [
        {
          title: "About Us",
          link: "/about-us",
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Terms & Conditions",
          link: "/terms-and-conditions",
        },
        {
          title: "Cancellation & Refunds",
          link: "/cancellation-and-refunds",
        },
      ],
    },
    {
      title: "Support",
      list: [
        {
          title: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Support@headgen.ai",
          link: "mailto:support@headgen.ai",
        },
        {
          title: "+91 9820442749",
          link: "tel:+919820442749",
        },
        {
          link: "https://www.producthunt.com/products/headgen-ai",
          title: "product hunt logo",
          alt: "product hunt",
          imgPath:
            "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1720504906/Untitled_design_71_yhk24p.jpg",
        },
      ],
    },
  ];

  return (
    <div
      id="footer"
      className="flex flex-col items-center gap-20 px-10 2xl:px-[250px] py-10"
    >
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 w-full">
        <div className="w-[300px] xl:w-[380px] hidden rounded-2xl lg:flex flex-col justify-start items-center relative">
          <img
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022117/headgen/Home/Footer/om5r1nxxq4cbjmcqmdet.webp"
            alt=""
            className="w-full h-[90%] rounded-2xl shadow-[0_0_0_5px#5636F3]"
          />
          <div className="flex flex-col gap-1">
            <div className="w-[90%] px-2 py-3 bg-gradient-to-r from-[#59caff] to-[#5636F3] rounded-xl text-[#f1f1f1] text-[15px] font-medium transition duration-300 absolute -bottom-4 left-1/2 -translate-x-1/2">
              <LazyLoadImage
                alt=""
                src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738921221/Your_paragraph_text_-_2025-02-07T150932.516_t2m5p2.webp"
                width={"240px"}
                height={"58px"}
              />
            </div>
          </div>
        </div>

        <div className="py-16 px-8 oswald md:px-16  w-full rounded-2xl bg-[#000000] grid grid-cols-1 md:grid-cols-4 gap-2 md:justify-center shadow-[0_0_0_5px#000000]">
          {footerContent &&
            footerContent?.map((fc, idx) => (
              <div
                key={`fc${idx}`}
                className={`flex flex-col  gap-3 md:gap-1 ${fc?.multiList && "md:col-span-2"
                  }`}
              >
                <div
                  className={`text-2xl xl:text-[2.4rem] md:h-[80px] oswald text-blue-600`}
                >
                  {fc?.title}
                </div>
                {fc?.multiList ? (
                  <div className="grid md:grid-cols-2 text-[#f1f1f1] text-xl xl:text-[1.7rem] leading-[1.3] ">
                    {fc?.multiList?.map((item, idx1) => (
                      <div key={`fcml${idx1}`} className="flex flex-col gap-1">
                        {item &&
                          item?.map((item, idx2) => (
                            <Link
                              key={`fcsml${idx2}`}
                              to={item?.link}
                              className="oswald hover:text-blue-600 transition duration-300"
                              aria-label={item?.title}
                            >
                              {item?.title}
                            </Link>
                          ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 text-[#f1f1f1] text-xl xl:text-[1.7rem] leading-[1.3]  ">
                    {fc?.list &&
                      fc?.list?.map((item, idx2) => (
                        <Link
                          to={item?.link}
                          key={`fcl${idx2}`}
                          className="oswald hover:text-blue-600 transition duration-300"
                          aria-label={item?.title}
                        >
                          {item?.imgPath ? (
                            <LazyLoadImage
                              src={`${item?.imgPath}`}
                              alt={item?.alt}
                              className="w-full max-w-[242px] rounded-lg shadow-[0_0_0_1px#ffffff] mt-1"
                              width={"60px"}
                              height={"242px"}
                            />
                          ) : (
                            item?.title
                          )}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-2 sm:gap-0 justify-center sm:justify-between">
        <div className="text-[11px] sm:text-sm text-[#f1f1f1]">
          Copyright 2024 Playcloud Technologies Private Limited.
        </div>
        <div className="flex flex-row gap-4">
          <Link
            to="https://www.linkedin.com/company/headgen-ai/"
            aria-label="LinkedIn"
          >
            <AppSvgs name="linkedIn" />
          </Link>

          <Link to="https://www.youtube.com/@HeadGen_AI" aria-label="YouTube">
            <AppSvgs name="youtube" />
          </Link>
          <Link to="https://x.com/HeadGenAI" aria-label="Twitter">
            <AppSvgs name="x" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
