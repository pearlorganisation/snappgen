import React, { useEffect, useRef } from "react";
// import "./DatingTab.css";
import { useState } from "react";
import PriceCards from "../../PriceCards/PriceCards";
import ImageSection from "../../ImageSection/ImageSection";
import Customize from "../../Customize/Customize";
import OrderDetails from "../../OrderDetails/OrderDetails";
import UserDetails from "../../UserDetails/UserDetails";
import axios from 'axios'
import Prompt from "../../Prompt/Prompt";
import DatingGenderSelection from "./DatingGenderSelection";
import { BeatLoader } from "react-spinners";


const DatingTab = () => {

  const [userData, setUserData] = useState({
    email: "",
    gender: "Male",
    files: "",
    generationType: "individualDating"
  });
  const [errors, setErrors] = useState({});
  const [fileErrorMsg, setFileErrorMsg] = useState(null);
  const [files, setFiles] = useState([]);
  const [tabSwitched, setTabSwitched] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const tabs = ["Individual", "Customize", "Prompts"];
  const [tabText, setTabText] = useState("Individual");
  const fieldsRef = useRef();

  const tabContentRef = useRef(null);
  




  const datingPriceIndividual = [
    {
      title: "STARTER PACK",
      originalPrice: "€18",
      price: "€9",
      features: ["4 Headshots ( BASIC )", "4 Hours generation Time"],
      packName: "Starter Pack",
      tag: "",
    },
    {
      title: "BASIC PACK",
      originalPrice: "€45",
      price: "€29",
      features: ["8 Headshots ( HD )", "2 Hours generation Time"],
      packName: "Basic Pack",
      tag: "83% pick this plan",
    },
    {
      title: "PREMIUM PACK",
      originalPrice: "€79",
      price: "€35",
      features: ["16 Headshots ( 4K ) ", "20 Minutes generation Time"],
      packName: "Premium Pack",
      tag: "Best Value",
    },
  ];

  const indivdualData = [
    {
      idx: 0,
      ele: (
        <>
          <DatingGenderSelection
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            type='Dating'
          />
        </>
      ),
    },



    {
      idx: 1,
      ele: (
        <>
          <ImageSection
            userData={userData}
            setUserData={setUserData}
            files={files}
            setFiles={setFiles}
            fileErrorMsg={fileErrorMsg}
            setFileErrorMsg={setFileErrorMsg}
          />
        </>
      ),
    },

    {
      idx: 2,
      ele: (
        <>
          <div>
            <PriceCards
              data={datingPriceIndividual}
              userData={userData}
              setUserData={setUserData}
              type='Dating'
              errors={errors}
            />
          </div>
        </>
      ),
    },

    {
      idx: 3,
      ele: (
        <>
          <div>
            <OrderDetails userData={userData} files={files} type='Dating' />
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 4 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);
  // console.log(newIndex, val)
    if (newIndex > 0 && newIndex < 2 && val > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        emailRegex.test(userData?.email) &&
        userData?.email?.length > 0 &&
        userData?.gender?.length > 0
      ) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        let error = { email: "", gender: "" };
        error.email = "Incorrect/Missing email";

        if (userData?.gender?.length == 0) {
          error.gender = "Please select a gender";
        }
        // console.log(userData?.gender?.length);
        setErrors(() => {
        // console.log(error);
          return error;
        });
        return;
      }
    }
    if (newIndex > 1 && newIndex <= 2 && val > 0) {
      if (files.length > 0 && files.length <= 4) {
        setFileErrorMsg();
        
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setFileErrorMsg("Please upload 1-4 images to continue");
      }
      return;
    }  else if (newIndex > 2 && val > 0) {
      if (userData?.selectedPlan) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setErrors({ selectedPlan: "Please select a pack to continue" });
        return;
      }
    }  else {
      if (maxIndex === currentIndex && val > 0) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

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

    setIsLoading(true);
    let newFiles = await convertFiles();
    let formData = new FormData();

    // console.log(newFiles)

    // let newArr = []

    for (let i = 0; i < newFiles.length; i++) {
      // newArr.push(newFiles[i])
      formData.append("images", newFiles[i]);
    }
    // formData.append("file", newArr);
    formData.append("email", userData.email);
    formData.append("selectedPlan", JSON.stringify(userData.selectedPlan));
    formData.append("gender", userData.gender);
    formData.append("generationType", userData?.generationType
    )

    if (type === 'individual') {
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
  }

  return (
    <div className="flex flex-col items-center gap-10 px-10 2xl:px-[80px] gradientBdRed">
    
      <div
        ref={fieldsRef}
        className="rounded-full  w-fit  bg-gradient-to-br from-[#1d2838] to-[#1d283880] p-1 px-2 relative h-[50px] flex justify-between"
      >
        {tabs?.map((item, idx) => {
          return (
            <div className="relative text-sm md:text-base" key={`tab${idx}`}>
              <div
                className={` ${
                  tabText === item ? "flex" : "hidden"
                }  absolute text-white h-full  `}
              >
                <span
                  className={` rounded-full h-full w-[5rem] sm:w-[8rem]  md:w-[10rem] cursor-pointer  flex flex-col justify-center text-center bg-gradient-to-b from-[#e73e71] to-[#af1040] z-[10] transition duration-300`}
                >
                  {item}
                </span>
              </div>

              <span
                className={` rounded-full h-full w-[5rem] sm:w-[8rem]  md:w-[10rem] cursor-pointer  flex flex-col justify-center text-center text-white  z-[10] transition duration-300`}
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
        <div className="text-white text-3xl h-full ">
          {tabText === "Individual" && (
            <div
              className="flex flex-col justify-between h-full gap-8"
              ref={tabContentRef}
            >
              {indivdualData &&
                indivdualData?.map((item, idx) => {
                  if (item?.idx === currentIndex) {
                    return (
                      <div
                        className="h-[90%] w-full"
                        key={`individualData${idx}`}
                      >
                        {item?.ele}
                      </div>
                    );
                  }
                })}

              <div className="flex flex-wrap-reverse justify-center gap-2">
                {currentIndex > 0 && (
                  <button
                    className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3   shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => updateIndex(-1)}
                  >
                    Back
                  </button>
                )}
                {currentIndex >= 0 && currentIndex < maxIndex && (
                  <button
                    className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3 bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57] hover:to-[#861436] hover:shadow-[0_0_0_1px_#ffffff]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => {
                      updateIndex(1);
                    }}
                  >
                    Next
                  </button>
                )}

                {currentIndex === maxIndex && (
                  <button
                    className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3 bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57] hover:to-[#861436] hover:shadow-[0_0_0_1px_#ffffff]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => {
                      handlePayment('individualDating');
                    }}
                  >
                    {isLoading ? (
                      <BeatLoader color="#ffffff" />
                    ) : (
                      "Proceed to Payment"
                    )}
                  </button>
                )}
              </div>
            </div>
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
                handlePayment={handlePayment}
                type='Dating'
              />
            </div>
          )}
          {tabText === "Prompts" && (
            <Prompt
              userData={userData}
              setUserData={setUserData}
              setErrors={setErrors}
              files={files}
              setFiles={setFiles}
              fileErrorMsg={fileErrorMsg}
              setFileErrorMsg={setFileErrorMsg}
              errors={errors}
              handlePayment={handlePayment}
              type='Dating'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DatingTab;
