import React, { useEffect, useRef } from "react";
import { useState } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import ImageSection from "../../components/ImageSection/ImageSection";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const FreeHeadshotsTab = () => {
  const [successMsg, setSuccessMsg] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    gender: "Male",
  });
  const [errors, setErrors] = useState({});
  const [fileErrorMsg, setFileErrorMsg] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const tabContentRef = useRef(null);

  const indivdualData = [
    {
      idx: 0,
      ele: (
        <>
          <UserDetails
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            type="Refular"
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
            maxUploads={1}
            type="freeHeadshot"
          />
        </>
      ),
    },

    {
      idx: 2,
      ele: (
        <>
          <div>
            <OrderDetails
              userData={userData}
              files={files}
              type="freeHeadshot"
            />
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 3 - 1;

  const updateIndex = (val) => {

    let newIndex = Math.max(currentIndex + val, 0);

  // console.log(val, newIndex)

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
        
        setErrors(() => {
        // console.log(error);
          return error;
        });
        return;
      }
    }
    if (newIndex > 1 && val > 0) {
      if (files.length > 0 && files.length <= 4) {
        setFileErrorMsg();
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setFileErrorMsg("Please upload an image to continue");
      }
      return;
    } else {
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

  const handleFreeHeashotReq = async () => {
    setIsLoading(true);
    let newFiles = await convertFiles();
    let formData = new FormData();

    for (let i = 0; i < newFiles.length; i++) {
      formData.append("images", newFiles[i]);
    }
    formData.append("email", userData.email);
    formData.append("gender", userData.gender);

    axios
      .post(`${import.meta.env.VITE_API_URL}/freeHeadshot`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data) {
          setSuccessMsg("Free Headshot request successfully submitted");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>
          Free AI Headshots | Try HeadGen AI’s Free AI Image Generator & AI
          Photo Generator
        </title>
        <meta
          name="description"
          content="Get free AI Generated images with HeadGen AI’s advanced AI image generator. Create professional photos for resumes, teams, or LinkedIn with our easy-to-use AI headshot generator"
        />
      </Helmet>
      <div className="flex flex-col items-center gap-10 px-10 2xl:px-[80px] gradientBg py-20 lg:py-36">
        <div className="shadow-[0_0_0_1px_#babcbf80] rounded-xl px-4 sm:px-10 2xl:px-24 py-12 w-full 2xl:w-[1200px] min-h-[600px] bg-gradient-to-br from-[#1d2838] to-[#1d283880]">
          <div className="text-white text-3xl h-full ">
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

              {successMsg && (
                <div className="w-full text-center text-green-500 text-xl ">
                  {successMsg}
                </div>
              )}
              {!successMsg && (
                <div className="flex flex-wrap-reverse justify-center gap-2">
                  {currentIndex > 0 && (
                    <button
                      className={`hover:squeezyBtn px-8 py-3   shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                      onClick={() => updateIndex(-1)}
                    >
                      Back
                    </button>
                  )}
                  {currentIndex >= 0 && currentIndex < maxIndex && (
                    <button
                      className={`hover:squeezyBtn px-8 py-3 bg-[#224cc2] hover:bg-[#1d2838] hover:shadow-[0_0_0_1px_#ffffff]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                      onClick={() => {
                        updateIndex(1);
                      }}
                    >
                      Next
                    </button>
                  )}

                  {currentIndex === maxIndex && (
                    <button
                      className={`hover:squeezyBtn px-8 py-3 bg-gradient-to-b bg-[#224cc2] hover:bg-[#1d2838] hover:shadow-[0_0_0_1px_#ffffff]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                      onClick={() => {
                        handleFreeHeashotReq();
                      }}
                    >
                      {isLoading ? (
                        <BeatLoader color="#ffffff" />
                      ) : (
                        "Submit request"
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeHeadshotsTab;
