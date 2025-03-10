import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomizeTabs = ({ setUserData, userData, type }) => {
  const temp = [
    {
      section: "Formal",
      icon: (
        <>
          <FaUserTie className="text-lg md:text-xl lg:text-3xl" />
        </>
      ),
      subSection: [
        {
          title: "Outdoor Park",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022432/Outdoor_Park_Formal_AI_Headshots_2_hwybsx.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022431/Outdoor_Park_Formal_AI_Headshots_1_j32tml.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022431/Outdoor_Park_Formal_AI_Headshots_4_ymvfrv.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022430/Outdoor_Park_Formal_AI_Headshots_3_yzrmwh.webp",
            },
          ],
        },
        {
          title: "Indoor Office",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022466/Indoor_Office_Formal_AI_Headshots_1_a8nwg9.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022465/Indoor_Office_Formal_AI_Headshots_4_mbr5da.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022464/Indoor_Office_Formal_AI_Headshots_3_iqtd1b.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022464/Indoor_Office_Formal_AI_Headshots_2_w5upsa.webp",
            },
          ],
        },
        {
          title: "Studio Grey",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022477/Studio_Grey_Formal_AI_Headshots_2_kjj3pw.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022477/Studio_Grey_Formal_AI_Headshots_1_rrauks.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022476/Studio_Grey_Formal_AI_Headshots_4_aw6yyo.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022475/Studio_Grey_Formal_AI_Headshots_3_u4xae2.webp",
            },
          ],
        },
        {
          title: "Studio White",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022490/Studio_White_Formal_AI_Headshots_2_oh7epr.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022489/Studio_White_Formal_AI_Headshots_1_bnl0yv.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022488/Studio_White_Formal_AI_Headshots_4_zuiveh.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022487/Studio_White_Formal_AI_Headshots_3_xop4yo.webp",
            },
          ],
        },
        {
          title: "Black & White",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022496/Black_White_AI_Headshots_1_oiukwk.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022495/Black_White_AI_Headshots_4_fqvxil.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022494/Black_White_AI_Headshots_3_umm95z.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022493/Black_White_AI_Headshots_2_jxctih.webp",
            },
          ],
        },
      ],
    },
    {
      section: "Casual",
      icon: (
        <>
          <IoShirtSharp className="text-lg md:text-xl lg:text-3xl" />
        </>
      ),
      subSection: [
        {
          title: "Outdoor Park",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022550/Outdoor_Park_Casual_AI_Headshots_2_y8lbst.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022549/Outdoor_Park_Casual_AI_Headshots_1_dtzbks.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022548/Outdoor_Park_Casual_AI_Headshots_4_wdyblv.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022547/Outdoor_Park_Casual_AI_Headshots_3_fvkmk9.webp",
            },
          ],
        },
        {
          title: "Indoor Office",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022543/Indoor_Office_Casual_AI_Headshots_2_qq4ch7.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022542/Indoor_Office_Casual_AI_Headshots_1_oljdix.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022541/Indoor_Office_Casual_AI_Headshots_4_lee18t.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022541/Indoor_Office_Casual_AI_Headshots_3_w6ubbp.webp",
            },
          ],
        },
        {
          title: "Studio Grey",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022556/Studio_Grey_AI_Headshots_2_rjkqnv.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022554/Studio_Grey_AI_Headshots_1_fz6chh.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022553/Studio_Grey_AI_Headshots_4_vmrm2s.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022552/Studio_Grey_AI_Headshots_3_knuflq.webp",
            },
          ],
        },
        {
          title: "Studio White",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022563/Studio_white_AI_Headshots_2_fidgrx.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022562/Studio_white_AI_Headshots_1_rgm51w.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022561/Studio_white_AI_Headshots_4_vwnzzr.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022559/Studio_white_AI_Headshots_3_e2dnlk.webp",
            },
          ],
        },
        {
          title: "Black & White",
          images: [
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022537/Black_and_white_casual_AI_Headshots_2_nvehwj.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022536/Black_and_white_casual_AI_Headshots_1_zlpbds.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022535/Black_and_white_casual_AI_Headshots_4_nmxx1k.webp",
            },
            {
              name: "",
              path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022534/Black_and_white_casual_AI_Headshots_3_cwpmjn.webp",
            },
          ],
        },
      ],
    },
  ];

  const [subSectionData, setSubSectionData] = useState(
    temp[0]?.subSection || []
  );
  const [subSectionImages, setSubSectionImages] = useState(
    temp[0]?.subSection[0]?.images || []
  );
  const [data, setData] = useState({
    section: temp[0].section,
    subSection: temp[0].subSection[0].title,
  });


  useEffect(() => {
    if (data?.section?.length > 0 && data?.subSection?.length > 0) {
      setUserData((prevData) => {
        let tempData = { ...prevData };
        tempData.customizeData = data;
        return tempData;
      });
    }
  }, [data]);

  return (
    <>
      <div className="text-[#121212]  h-fit space-y-5 md:space-y-8 bg-[#f1f1f1] px-2 py-3 md:p-10 rounded-2xl">
        <div className="w-full md:w-1/2 mx-auto grid grid-cols-2 place-items-center ">
          {temp?.map((item, idx) => {
            return (
              <div className="w-full " key={`category${idx}`}>
                <input
                  name="sectionName"
                  className="peer hidden"
                  type="radio"
                  value={item?.section}
                  id={`${item?.section}`}
                  defaultChecked={idx === 0}
                />
                <label
                  onClick={() => {
                    setSubSectionData(item?.subSection);
                    setData((prev) => {
                      
                      let data = {
                        section: item?.section,
                        subSection: prev?.subSection,
                      };

                      const subSection = item?.subSection?.find(
                        (e) => e.title === prev?.subSection
                      );
                      if (subSection) {
                        setSubSectionImages(subSection?.images);
                      }
                      return data;
                    });
                  }}
                  className={`px-6 py-2 text-sm md:text-xl lg:text-3xl  flex justify-center items-center gap-2
                   ${
                     type === "Dating"
                       ? " hover:text-[#E23A6D] peer-checked:text-white peer-checked:bg-gradient-to-r peer-checked:from-[#e73e71]  peer-checked:to-[#af1040] hover:shadow-[0_3px#E23A6D]"
                       : "hover:text-[#0000FF] peer-checked:text-white peer-checked:bg-gradient-to-r peer-checked:from-[#3183ff] peer-checked:to-[#0c4cac] hover:shadow-[0_3px#0000FF] "
                   } peer-checked:rounded-full font-normal cursor-pointer transition duration-300`}
                  htmlFor={item?.section}
                >
                  <span>{item?.icon}</span>
                  {item?.section}{" "}
                </label>
              </div>
            );
          })}
        </div>
        <section className="flex flex-wrap justify-center items-center p-2 text-sm md:text-lg gap-3">
          {subSectionData?.map((item, idx) => {
            return (
              <div className="relative " key={`subCategory${idx}`}>
                <input
                  name="subSectionTitle"
                  className="peer hidden"
                  type="radio"
                  value={item?.title}
                  id={`${item?.title}`}
                  defaultChecked={idx === 0}
                />
                <label
                  onClick={() => {
                    setSubSectionImages(item?.images);
                    setData((prev) => {
                      let data = {
                        section: prev?.section,
                        subSection: item?.title,
                      };
                      return data;
                    });
                  }}
                  className={`px-6 py-2  flex justify-center items-center gap-2
                   ${
                     type === "Dating"
                       ? " hover:text-[#E23A6D] peer-checked:text-white peer-checked:bg-gradient-to-r peer-checked:from-[#e73e71]  peer-checked:to-[#af1040] hover:shadow-[0_3px#E23A6D]"
                       : "hover:text-[#0000FF] peer-checked:text-white peer-checked:bg-gradient-to-r peer-checked:from-[#3183ff] peer-checked:to-[#0c4cac] hover:shadow-[0_3px#0000FF] "
                   } peer-checked:rounded-full font-normal cursor-pointer transition duration-300`}
                  htmlFor={item?.title}
                >
                  {item?.title}{" "}
                </label>
              </div>
            );
          })}
        </section>
        <section className="flex justify-around gap-4 items-center flex-wrap">
          {subSectionImages?.map((item) => {
            return (
              <LazyLoadImage alt="" 
                src={item?.path}
                className="object-contain w-full max-w-[200px] max-h-[200px] cursor-pointer hover:shadow-[0_0_0_1px#ffffff] rounded-xl transition duration-300"
                width={200}
                height={200}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default CustomizeTabs;
