import React, { useEffect, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import PriceCards from "../PriceCards/PriceCards";
import CustomizeTabs from "./CustomizeTabs";
import UserDetails from "../UserDetails/UserDetails";
import ImageSection from "../ImageSection/ImageSection";
import { BeatLoader } from "react-spinners";

const Customize = ({
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

  const customizePriceCardData = [
    {
      title: "BASIC PACK",
      originalPrice: "€70",
      price: "€50",
      features: ["Basic Quality"],
      packName: "Basic Pack",
      tag: "",
    },
    {
      title: "PREMIUM PACK",
      originalPrice: "€100",
      price: "€100",
      features: ["High Quality"],
      packName: "Premium Pack",
      tag: "",
    },
  ];

  const customizeData = [
    {
      idx: 0,
      ele: (
        <>
          <CustomizeTabs
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
            type={type}
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
              data={customizePriceCardData}
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
            <OrderDetails userData={userData} files={files} type={type} />
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 5 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);
  // console.log(val, newIndex);
    if (newIndex >= 0 && newIndex < 2 && val > 0) {
      if (userData?.customizeData || userData?.customizeDatingData) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setErrors({ customize: "Select customize options" });
        return;
      }
    } else if (newIndex > 1 && newIndex <= 2 && val > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userData?.email) && userData?.email?.length > 0) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setErrors({ email: "Incorrect/Missing email" });
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
            generationType: "datingCustomize",
            customizeData: { section: "Formal", subSection: "Outdoor Park" },
          };
        }
        return {
          email: "",
          gender: "",
          files: "",
          customizeData: { section: "Formal", subSection: "Outdoor Park" },
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
        {customizeData &&
          customizeData?.map((item, idx) => {
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
              className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3  shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1]  text-[18px] font-medium transition duration-[0.4s]`}
              onClick={() => updateIndex(-1)}
            >
              Back
            </button>
          )}
          {currentIndex >= 0 && currentIndex < maxIndex && (
            <button
              className={`w-full sm:w-auto hover:squeezyBtn px-8 py-3  ${
                type != "Dating"
                  ? "bg-[#1f58ad]"
                  : "bg-[#b41f58] hover:bg-[#b41f58a8] "
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
                handlePayment("customize");
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

export default Customize;
