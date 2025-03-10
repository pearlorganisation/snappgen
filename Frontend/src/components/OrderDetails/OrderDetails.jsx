import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderDetails = ({ userData, files, type }) => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 md:gap-0 justify-between flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <div className="flex justify-center">
            <dl className="w-full text-white divide-y divide-gray-200">
              <div className="flex flex-col pb-3">
                <div className="mb-1 text-white md:text-lg ">Email address</div>
                <div className="text-lg font-semibold">{userData?.email}</div>
              </div>
              <div className="flex flex-col py-3">
                <div className="mb-1 text-gray-400 md:text-lg ">Gender</div>
                <div className="text-lg font-semibold">{userData?.gender}</div>
              </div>

              {userData?.promptData ? (
                <div className="flex flex-col pt-3">
                  <div className="mb-1 text-gray-400 md:text-lg ">Prompt</div>
                  <dd className="text-lg font-semibold">{userData?.promptData}</dd>
                </div>
              ) : userData?.customizeData ? (
                <div className="flex flex-col pt-3">
                  <div className="mb-1 text-gray-400 md:text-lg ">Customize</div>
                  <dd className="text-lg font-semibold">{userData?.customizeData?.section} - {userData?.customizeData?.subSection}</dd>
                </div>
              ) : type === 'freeHeadshot' ? (
                <div className="flex flex-col pt-3">
                  <div className="mb-1 text-gray-400 md:text-lg ">Headshot Type</div>
                  <dd className="text-lg font-semibold">Free Headshot</dd>
                </div>
              ) : (
                <div className="flex flex-col pt-3">
                  <div className="mb-1 text-gray-400 md:text-lg ">Headshot Type</div>
                  <dd className="text-lg font-semibold">{userData?.headshotType}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
        {type !== "freeHeadshot" && (
          <div className="w-full md:w-1/2 overflow-auto px-2">
            <div className="flex justify-center py-2 gap-2">
              <div
                className={`w-[300px] !bg-gradient-to-br ${type === "Dating"
                  ? "from-[#8a0815] shadow-[0_0_0_2px_#ffffff]"
                  : "from-[#0d2e756c] to-[#031b4e] shadow-[0_0_0_2px_#ffffff]"
                  } rounded-3xl p-4 flex flex-col gap-2 justify-evenly items-center min-h-[400px] relative transition duration-300`}
              >
                <div
                  className={`text-[22px]  bg-gradient-to-r ${type === "Dating"
                    ? "from-[#e73e71] to-[#af1040]"
                    : "from-[#afc5f5] to-[#6495ff]"
                    }  inline-block text-transparent bg-clip-text font-bold`}
                >
                  {userData?.selectedPlan?.title}
                </div>
                <div className="text-[36px] line-through text-[#dad4d4]">
                  {userData?.selectedPlan?.originalPrice}
                </div>
                <div className="text-[75px] font-bold">
                  {userData?.selectedPlan?.price}
                </div>
                <div className="flex flex-col items-center gap-4">
                  {userData?.selectedPlan?.features &&
                    userData?.selectedPlan?.features?.map((e, idx1) => (
                      <div
                        key={`PriceCardFeature${idx1}`}
                        className="flex justify-center gap-2  w-full"
                      >
                        <span className="flex flex-col w-auto justify-center">
                          <FaCheckCircle
                            size={18}
                            className={` ${type === "Dating"
                              ? "text-[#af1040]"
                              : " text-[#2563EB] "
                              }`}
                          />
                        </span>
                        <span className="text-lg text-wrap">{e}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="w-full overflow-auto">
          <div className="flex gap-2 bg-[#1d2838]">
            {files &&
              files?.map((item) => <img alt=""  src={item} className="h-[200px]" />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails
