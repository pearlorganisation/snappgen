import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const PriceTable = () => {

  const tableData = [
    {
      category: "Cost",
      withAI: `€9`,
      traditional: "€1000",
    },
    {
      category: "Time",
      withAI: "2 Hours",
      traditional: "2 - 3 Days",
    },
    {
      category: "Process",
      withAI: "Easy",
      traditional: "Tedious",
    },
  ];
  return (
    <div className="py-10 px-4 text-white">
      <div className="overflow-x-auto">
        <div className="grid grid-cols-3 md:grid-cols-3">
          <div className="text-white text-center font-bold py-3 md:px-6 boder border-white border-r border-b"> </div>
          <div className="text-white text-center text-sm md:text-2xl font-bold py-3 md:px-6 boder border-white  border-b border-r">
            with HeadGen AI
          </div>
          <div className="text-white text-center text-sm md:text-2xl font-bold py-3 md:px-6 boder border-white  border-b">
            <div className="text-center">
              Traditional <br /> Photoshoot
            </div>
          </div>

          {
            tableData?.map((row, index) => (
              <React.Fragment key={index}>
                <div className="border-b border-r border-white py-4 md:px-6 text-center">{row.category}</div>
                <div className="flex flex-row justify-center items-center gap-2 border-b border-r border-white py-4 md:px-6 text-center">
                  <span className="flex flex-row justify-center items-center gap-2">
                    <FaCheckCircle color="#00ff00" />{row.withAI}
                  </span>
                </div>
                <div className="border-b  border-white py-4 md:px-6 text-center">
                  <span className="flex flex-row justify-center items-center gap-2">
                    <IoMdCloseCircle color="#ff0000" size={20} />
                    {row.traditional}
                  </span>
                </div>
              </React.Fragment>
            ))
          }

        </div>
      </div>
    </div>

  );
};

export default PriceTable;
