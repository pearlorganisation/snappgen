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
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742109921/SnappGen_AI_Headshots_for_LinkedIn_hn6ibi.webp"
              alt=""
              className="min-w-[200px] w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742109921/AI_Images_o79xkw.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742109921/SnappGen_Corporate_AI_headshots_ctsh3t.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742109921/AI_Headshots_mmlmwt.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110157/Doctor_AI_Headshots_evk0su.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110156/Doctor_AI_Headshots_India_h4ghvi.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110147/AI_Headshots_for_Practo_b3hxfn.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110147/AI_Headshots_for_Doctors_ryyos5.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110559/Tinder_AI_Headshots_vynnth.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110462/Bumble_AI_Headshots_udz7yj.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110462/AI_Headshots_for_Dating_Profile_i0afns.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742110461/41_hh4mod.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-row md:px-10  gap-6  py-4 md:justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742127602/Student___AI_Image_Generator_sed79w.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742127602/AI_Images_for_Resume_zqkx9q.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742127602/Student___AI___Headshots_nufbva.webp"
              alt=""
              className="min-w-[200px]  w-[200px] h-[200px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1742127602/AI_Headshots_For_Resumes_om3ljh.webp"
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
