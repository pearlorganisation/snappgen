import React, { useEffect, useState } from "react";
import PromptTab from "./PromptTab";
import UserDetails from "../UserDetails/UserDetails";
import ImageSection from "../ImageSection/ImageSection";
import PriceCards from "../PriceCards/PriceCards";
import OrderDetails from "../OrderDetails/OrderDetails";
import { BeatLoader } from "react-spinners";

const Prompt = ({
  userData,
  setUserData,
  setErrors,
  errors,
  fileErrorMsg,
  setFileErrorMsg,
  files,
  setFiles,
  tabContentRef,
  isLoading,
  handlePayment,
  type,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const promptPriceCardData = [
    {
      title: "CUSTOM PROMPT PACK",
      originalPrice: "€250",
      price: "€200",
      features: ["Premium Quality"],
      packName: "Custom Prompt Pack",
      tag: "",
    },
  ];

  const promptData = [
    {
      idx: 0,
      ele: (
        <>
          <PromptTab
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            type={type}
          />
        </>
      ),
    },

    {
      idx: 1,
      ele: (
        <>
          <UserDetails
            userData={userData}
            setUserData={setUserData}
            errors={errors}
          />
        </>
      ),
    },

    {
      idx: 2,
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
      idx: 3,
      ele: (
        <>
          <div>
            <PriceCards
              data={promptPriceCardData}
              userData={userData}
              setUserData={setUserData}
              type={type}
              errors={errors}
            />
          </div>
        </>
      ),
    },

    {
      idx: 4,
      ele: (
        <>
          <div>
            <OrderDetails userData={userData} files={files} type="Dating" />
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 5 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);
    if (newIndex > 0 && newIndex <= 1 && val > 0) {
      if (userData?.promptData && userData?.promptData?.length > 0) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setErrors({ prompt: "Please enter a prompt to continue." });
        return;
      }
    } else if (newIndex > 1 && newIndex <= 2 && val > 0) {
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
        setErrors({
          email: "Incorrect/Missing email",
          gender: "Please select a gender",
        });
        return;
      }
    } else if (newIndex > 2 && newIndex <= 3 && val > 0) {
      if (files.length > 0 && files.length <= 4) {
        setFileErrorMsg();
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setCurrentIndex(newIndex);
      } else {
        setFileErrorMsg("Please upload 1-4 images to continue");
      }
      return;
    } else if (newIndex > 3 && val > 0) {
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
    } else {
      if (maxIndex === currentIndex && val > 0) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserData((prev) => {
        if (type === "Dating") {
          return {
            email: "",
            gender: "",
            files: "",
            generationType: "datingPrompt",
          };
        }
        return {
          email: "",
          gender: "",
          files: "",
        };
      });
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("userImgs", files);
    }
  }, [files]);
  return (
    <>
      <div
        className="flex flex-col justify-between h-full gap-8"
        ref={tabContentRef}
      >
        {promptData &&
          promptData?.map((item, idx) => {
            if (item?.idx === currentIndex) {
              return (
                <div className="h-[90%] w-full" key={`customizeData${idx}`}>
                  {item?.ele}
                </div>
              );
            }
          })}

        <div className="flex flex-wrap-reverse justify-center gap-2">
          {currentIndex > 0 && (
            <button
              className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3 ${
                type === "Dating"
                  ? " "
                  : "bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57]"
              } shadow-[0_0_0_1px_#babcbf80] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
              onClick={() => updateIndex(-1)}
            >
              Back
            </button>
          )}
          {currentIndex >= 0 && currentIndex < maxIndex && (
            <button
              className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3 ${
                type === "Dating"
                  ? " bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57]"
                  : "bg-[#1f58ad] hover:bg-[#1f58ad94]"
              }  hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
              onClick={() => {
                updateIndex(1);
              }}
            >
              Next
            </button>
          )}

          {currentIndex === maxIndex && (
            <button
              className={`w-full sm:w-auto hover:squeezyBtn flex justify-center items-center px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
              onClick={() => {
                handlePayment("prompt");
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
    </>
  );
};

export default Prompt;
