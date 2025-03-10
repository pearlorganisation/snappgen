import React, { useState } from "react";

function AIHeadshot() {
  const [activeTab, setActiveTab] = useState("Corporate");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326070/HeadGen_AI_Corporate_2_nmtwci.webp"
              alt=""
              className="min-w-[200px] w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326070/HeadGen_AI_Corporate_4_luw4ea.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326070/HeadGen_AI_Corporate_3_hm7qgs.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326070/HeadGen_Corporate_1_dmiwms.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326121/Doctor_AI_Headshots_4_ht3cw4.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326110/Doctor_AI_Headshots_3_acq4fl.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326088/Doctor_AI_Headshots_1_o1y8vt.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326100/Doctor_AI_Headshots_2_xqdqyh.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326217/16_2_bztxlb.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326216/15_2_ooaewu.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326215/13_gv0mxc.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326216/14_2_jien4d.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326135/student_cwwfmp.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326134/HeadGen_AI_Student_Headshot_3_uwyohq.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326133/HeadGen_AI_Student_1_gdc7ep.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738326133/HeadGen_AI_Studetn_HEadshot_3_rlp5v8.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      default:
        return <div>No content</div>; // Fixed default case to return valid JSX
    }
  };

  return (
    <div className="text-white text-center space-y-10">
      <div>
        <h2 className="text-2xl text-center md:text-[45px] font-semibold lg:font-normal lg:text-[64px]">
          AI Headshots for <span className="text-blue-500">Everyone</span>
        </h2>
      </div>

      <div className="p-4 md:p-8 rounded-t-xl cursor-default transition duration-200 mx-auto   border border-[#143f76] bg-[#0f1121] rounded-md py-4">
        <div className="w-full flex justify-center ">
          <div className="bg-[#1c2431] w-3/4 h-fit rounded-2xl">
        <div className="flex flex-row flex-wrap  justify-evenly p-1">
          <button
            className={`w-full sm:w-1/2 md:w-1/4 text-center transition duration-200 py-2  ${
              activeTab === "Corporate"
                ? "bg-[#01346F] text-white border border-[#3b7db6] shadow-[0_0_3px#143f76] rounded-2xl"
                : "bg-[#1c2431]"
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Corporate");
              setActiveTabIndex(0);
            }}
          >
            Corporate
          </button>

          <button
            className={`w-full sm:w-1/2 md:w-1/4 text-center transition duration-200 py-2 ${
              activeTab === "Doctor"
                ? " bg-[#01346F] text-white border border-[#3b7db6] shadow-[0_0_3px#143f76] rounded-2xl "
                : "bg-[#1c2431]"
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Doctor");
              setActiveTabIndex(1);
            }}
          >
            Doctor
          </button>

          <button
            className={`w-full sm:w-1/2 md:w-1/4 text-center transition duration-200  py-2 ${
              activeTab === "Dating"
                ? " bg-[#01346F] text-white border border-[#3b7db6] shadow-[0_0_3px#143f76] rounded-2xl"
                : "bg-[#1c2431]"
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Dating");
              setActiveTabIndex(2);
            }}
          >
            Dating
          </button>
          <button
            className={`w-full sm:w-1/2 md:w-1/4 text-center transition duration-200  py-2  ${
              activeTab === "Student"
                ? " bg-[#01346F] text-white  border border-[#3b7db6] shadow-[0_0_3px#143f76] rounded-2xl"
                : "bg-[#1c2431] "
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Student");
              setActiveTabIndex(3);
            }}
          >
            Student
          </button>
        </div>
          </div>
        </div>

        <div className="overflow-auto">{tabContent()}</div>
      </div>
    </div>
  );
}

export default AIHeadshot;
