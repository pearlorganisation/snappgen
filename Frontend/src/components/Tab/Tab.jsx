import React, { useEffect, useRef } from "react";
// import "./Tab.css";
import { useState } from "react";
import Customize from "../Customize/Customize";
import Teams from "./Teams/Teams";
import axios from "axios";
import Prompt from "../Prompt/Prompt";
import IndividualTab from "../IndividualTab/IndividualTab";

const Tab = ({ section }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    gender: "",
    files: "",
  });

  const [errors, setErrors] = useState({});
  const [fileErrorMsg, setFileErrorMsg] = useState(null);
  const [files, setFiles] = useState([]);
  const [tabSwitched, setTabSwitched] = useState(true);

  const tabs = ["Individual", "Teams", "Customize", "Prompts"];
  const [tabText, setTabText] = useState("Individual");
  const fieldsRef = useRef();

  const tabContentRef = useRef(null);

  const headshots = [
    {
      name: "Corporate Headshots",
      link: "/corporate-ai-headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022217/headgen/Headshots/Banners/ypsqnt8jj4rdbkphzkgj.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022265/headgen/Headshots/Image%20to%20appear%20on%20click/haybecoslhl5oawukalb.webp",
      info: (
        <div>
          <strong>
            Corporate:{" "}
          </strong>
          Suit & tie, indoor office background.
        </div>
      )
    },
    {
      name: "Doctor Headshots",
      link: "/doctor-ai-headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022218/headgen/Headshots/Banners/gvvvyfx5myikud4df6zb.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022266/headgen/Headshots/Image%20to%20appear%20on%20click/l3stzd5y9i3jjt371sol.webp",
      info: (
        <div>
          <strong>
            Doctor:{" "}
          </strong>
          Lab Coat, Stethoscope, Medical Background.
        </div>
      )
    },
    {
      name: "Lawyer Headshots",
      link: "/lawyer-ai-headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022219/headgen/Headshots/Banners/anfy7t5v3ml6iecxljn8.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022267/headgen/Headshots/Image%20to%20appear%20on%20click/jxk2vge6mx4a2xgdvkvh.webp",
      info: (
        <div>
          <strong>
            Lawyer:{" "}
          </strong>
          Suit & Tie, Plain White Background.
        </div>
      )
    },
    {
      name: "Sales Headshots",
      link: "/salesman-ai-headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022219/headgen/Headshots/Banners/j6er2wouvgyqujpws6fw.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022267/headgen/Headshots/Image%20to%20appear%20on%20click/iqmmj3zciq7v0gkueumu.webp",
      info: (
        <div>
          <strong>
            Sales:{" "}
          </strong>
          Suit with Formal Shirt (no tie), Indoor office Background.
        </div>
      )
    },
    {
      name: "Students Headshots",
      link: "/students-ai-headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022220/headgen/Headshots/Banners/ztfzaecdn0qryd0i7m4t.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/kgzajygbfhmsbmupz7gv.webp",
      info: (
        <div>
          <strong>
            Student:{" "}
          </strong>
          Semi-formal, university background.
        </div>
      )
    },
    {
      name: "Teacher Headshots",
      link: "/teacher-ai-headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022220/headgen/Headshots/Banners/gcswieneujqynonujwdd.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/rwe5vljldwisdqyihe2s.webp",
      info: (
        <div>
          <strong>
            Teacher:{" "}
          </strong>
          Formal attire, classroom background.
        </div>
      )
    },
  ];

  // useEffect(() => {
  //   // console.log(userData)
  //   localStorage.setItem("userData", JSON.stringify(userData));
  // }, [userData]);

  useEffect(() => {
    let data = { ...userData };
    data.headshotType = section;
    setUserData(data)
  }, [section])

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("userImgs", files);
    }
  }, [files]);

  const convertFiles = () => {
    return new Promise((resolve, reject) => {
      let newFiles = [];
      let myFiles = [...files];
      let promises = [];

      myFiles.forEach((element, idx) => {
        promises.push(
          fetch(element)
            .then((res) => res.blob())
            .then((blob) => {
              let extension = blob.type.split("/");

              const file = new File([blob], `${idx}.${extension[1]}`);
              // console.log(file);
              newFiles.push(file);
            })
            .catch((error) => reject(error))
        );
      });

      Promise.all(promises)
        .then(() => resolve(newFiles))
        .catch((error) => reject(error));
    });
  };

  const handlePayment = async (type) => {
    if (isLoading) return;
    setIsLoading(true);
    let newFiles = await convertFiles();
    let formData = new FormData();

    for (let i = 0; i < newFiles.length; i++) {
      formData.append("images", newFiles[i]);
    }
    formData.append("email", userData.email);
    formData.append("selectedPlan", JSON.stringify(userData.selectedPlan));
    formData.append("gender", userData.gender);
    formData.append("generationType", userData?.generationType || type);

    if (type === "individual") {
      formData.append("headshotType", userData.headshotType);
    }
    if (type === "customize") {
      formData.append("customizeData", JSON.stringify(userData?.customizeData));
    } else if (type === "prompt") {
      formData.append("promptData", JSON.stringify(userData?.promptData));
    }

    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.sessionUrl) {
          window.location.href = res.data.sessionUrl;
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);

        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center gap-10 px-10 2xl:px-[80px]">
      <div
        ref={fieldsRef}
        className="rounded-full  w-fit  bg-gradient-to-br from-[#1d2838] to-[#1d283880] p-1 px-2 relative h-[50px] flex justify-between"
      >
        {tabs?.map((item, idx) => {
          return (
            <div className="relative text-xs sm:text-sm md:text-base" key={`tab${idx}`}>
              <div
                className={` ${tabText === item ? "flex" : "hidden"
                  }  absolute text-white h-full`}
              >
                <span
                  className={` rounded-full h-full w-[4.1rem] sm:w-[8rem]  md:w-[10rem] cursor-pointer  flex flex-col justify-center text-center bg-gradient-to-r from-[#3183ff] to-[#0c4cac] z-[10] transition duration-300`}
                >
                  {item}
                </span>
              </div>

              <span
                className={` rounded-full h-full w-[4.1rem] sm:w-[8rem]  md:w-[10rem] cursor-pointer  flex flex-col justify-center text-center text-white  z-[10] transition duration-300`}
                onClick={() => {
                  setTabSwitched(true);
                  setTabText(item);
                }}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
      <div className="shadow-[0_0_0_1px_#babcbf80] rounded-xl px-6 md:px-20 2xl:px-24 py-12 w-full 2xl:w-[1200px] min-h-[700px] bg-gradient-to-br from-[#1d2838] to-[#1d283880]">
        <div className="text-white text-3xl h-auto ">
          {tabText === "Individual" && (
            <IndividualTab
              userData={userData}
              setUserData={setUserData}
              setErrors={setErrors}
              files={files}
              setFiles={setFiles}
              fileErrorMsg={fileErrorMsg}
              setFileErrorMsg={setFileErrorMsg}
              errors={errors}
              headshots={headshots}
              tabContentRef={tabContentRef}
              isLoading={isLoading}
              handlePayment={handlePayment}
              section={section}
            />
          )}
          {tabText === "Teams" && (
            <Teams
              setUserData={setUserData}
              userData={userData}
              handlePayment={handlePayment}
              isLoading={isLoading}
            />
          )}
          {tabText === "Customize" && (
            <div>
              <Customize
                userData={userData}
                setUserData={setUserData}
                setErrors={setErrors}
                files={files}
                setFiles={setFiles}
                fileErrorMsg={fileErrorMsg}
                setFileErrorMsg={setFileErrorMsg}
                errors={errors}
                tabContentRef={tabContentRef}
                isLoading={isLoading}
                handlePayment={handlePayment}
              />
            </div>
          )}
          {tabText === "Prompts" && (
            <Prompt
              userData={userData}
              setUserData={setUserData}
              files={files}
              setFiles={setFiles}
              fileErrorMsg={fileErrorMsg}
              setFileErrorMsg={setFileErrorMsg}
              setErrors={setErrors}
              errors={errors}
              tabContentRef={tabContentRef}
              isLoading={isLoading}
              handlePayment={handlePayment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
