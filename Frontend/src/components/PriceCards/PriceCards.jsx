import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PriceCards = ({ data, userData, setUserData, type, errors }) => {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(userData?.selectedPlan);
  useEffect(() => {
    const updatedUserData = { ...userData };
    updatedUserData.selectedPlan = selectedPlan;
    setUserData(updatedUserData);
  }, [selectedPlan]);

  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="pb-4">Select a plan:</div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {data &&
          data?.map((item, idx) => (
            <div
              onClick={() => {
                if (item?.link) {
                  navigate(item?.link)
                } else {
                  setSelectedPlan(item)
                }
              }}
              key={`priceCard${idx}`}
              className={`w-full group md:w-[32%] max-w-[400px] !glassMorphism !bg-gradient-to-br ${selectedPlan?.title === item?.title
                ? (type != 'Dating' ? " from-[#02AFDC] to-[#2563EB] text-white shadow-[0_0_0_2px_#ffffff]" : "from-[#8a0815] shadow-[0_0_0_2px_#ffffff]")
                : "!from-[#10151dde] to-[#121720de] shadow-[0_0_0_1px_#babcbf80]"
                } rounded-3xl p-4 flex flex-col gap-2 justify-evenly items-center cursor-pointer  hover:!bg-gradient-to-b hover:!from-[#02AFDC] hover:!to-[#2563EB] hover:shadow-[0_0_0_2px_#ffffff] min-h-[400px] relative transition duration-300`}
            >
              {item?.tag?.length > 0 && (
                <div
                  className={`absolute rounded-full text-white text-[12px] md:text-[14px] font-bold bg-gradient-to-r ${type != "Dating"
                    ? "from-[#02AFDC] to-[#2563EB]"
                    : "from-[#e73e71] to-[#af1040] "
                    } px-4 -top-2 -translate-y-2 left-1/2 -translate-x-1/2 w-[150px] text-center`}
                >
                  {item?.tag}
                </div>
              )}
              <div
                className={`text-[22px] bg-gradient-to-r ${type != "Dating"
                  ? "from-[#02AFDC] to-[#2563EB]"
                  : "from-[#e73e71] to-[#af1040] "
                  }                  
                  ${selectedPlan?.title === item?.title ? "from-[#ffffff] to-[#ffffff]" : ""}
                  group-hover:from-[#ffffff] group-hover:to-[#ffffff]   inline-block text-transparent bg-clip-text font-bold`}
              >
                {item?.title}
              </div>

              <div className="text-[75px] font-bold">{item?.price}</div>
              <div className="flex flex-col items-center gap-4">
                {item?.features &&
                  item?.features?.map((e, idx1) => (
                    <div
                      key={`PriceCardFeature${idx1}`}
                      className="flex justify-center gap-2  w-full"
                    >
                      <span className="flex flex-col w-auto justify-center">
                        <FaCheckCircle
                          size={18}
                          className={`${type != "Dating"
                            ? "text-[#2563EB]"
                            : "text-[#af1040]"
                            }
                            ${selectedPlan?.title === item?.title ? "from-[#ffffff] to-[#ffffff]" : ""}
                            group-hover:text-[#ffffff]`}
                        />
                      </span>
                      <span className="text-lg text-wrap">{e}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
      {errors?.selectedPlan && (
        <div className="text-red-500 text-base text-center">{errors?.selectedPlan}</div>
      )}
    </div>
  );
};

export default PriceCards;
