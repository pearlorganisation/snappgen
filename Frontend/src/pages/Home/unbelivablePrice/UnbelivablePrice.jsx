import React from "react";
import PriceCards from "../../../components/PriceCards/PriceCards";

const plans = [
  {
    title: "Starter",
    buttonText: "",
    price: "€9",
    features: ["4 Headshots ( BASIC )", "4 Hours generation Time"],
    link: "/corporate-ai-headshots",
    buttonCTA: "Get Photos for € 9",
  },
  {
    title: "Basic",
    price: "€29",
    features: ["8 Headshots ( HD )", "2 Hours generation Time"],
    buttonText: "70% Pick this Plan",
    link: "/corporate-ai-headshots",
    buttonCTA: "Get Photos for € 29",
  },
  {
    title: "Premium",
    price: "€35",
    features: ["16 Headshots ( 4K ) ", "20 Minutes generation Time"],
    buttonText: "Best Value",
    link: "/corporate-ai-headshots",
    buttonCTA: "Get Photos for € 35",
  },
];

const PricingCards = () => {
  return (
    <div className="w-full rounded-2xl bg-[#282828] py-10 transition duration-500 mb-10 md:px-10 pt-10">
      <h1 className="text-white text-xl md:text-[45px] font-semibold lg:font-normal lg:text-[64px] leading-tight sm:leading-snug text-center max-w-xl sm:max-w-4xl mx-auto px-4 sm:px-5">
        <span>Premium Professional Images</span><br />
        <span>at</span>
        <span className="ml-2 sm:ml-4 bg-gradient-to-r from-[#00FFA6] via-[#33A9FF] to-[#0053F9] bg-clip-text text-transparent">
          Unbeatable Prices
        </span>
      </h1>

      <div className="w-full p-6 !text-white">
        <PriceCards
          data={plans}
          userData={{}}
          setUserData={() => { }}
          errors={{}}
        />

        {/* {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-[300px] h-[450px] border-2 border-[#03239A] bg-[#161616] px-6 py-10 rounded-lg"
          >
            <div className="flex flex-row justify-between items-center">
              <div
                className={`text-white ${
                  plan.title === "Starter" ? "text-start" : "text-center"
                } text-3xl`}
              >
                {plan.title}
              </div>
              {plan.buttonText ? (
                <div>
                  <button className="bg-[#002487] text-[#F9F9F9] rounded-full px-2 py-3 hover:opacity-90 ease-in-out hover:bg-[#1d2838] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 text-sm">
                    {plan.buttonText}
                  </button>
                </div>
              ) : null}
            </div>
            <div>
              <h1 className="text-white text-[104px] text-center mx-auto px-4 py-4 font-extrabold">
                €{plan.price}
              </h1>
            </div>
            <div className="w-full px-4">
              {plan.details.map((detail, i) => (
                <span
                  key={i}
                  className={`text-white ${
                    i === 0 ? "text-start" : "text-start"
                  } mx-auto block`}
                >
                  {detail}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to={plan.link}
                className="hover:squeezyBtn flex flex-col mx-auto justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-56 px-4 py-2 md:py-3 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
              >
                {plan.buttonCTA}
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default PricingCards;
