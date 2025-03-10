import React from "react";
import Helmet from "react-helmet";

const CancellationAndRefunds = () => {
  const CancellationContent = [
    {
      heading: "",
      content: [
        {
          subheading: "",
          content:
            "Welcome to Headgen.ai, a service provided by Playcloud Technologies Private Limited. This Cancellation and Refund Policy outlines the terms and conditions regarding the cancellation and refund process for our services.",
        },
      ],
    },
    {
      heading: "Service Description",
      content: [
        {
          subheading: "",
          content:
            "Headgen.ai provides users with the ability to upload a selfie and receive 8 professional headshot images for LinkedIn or corporate use.",
        },
      ],
    },

    {
      heading: "Payment and Pricing",
      content: [
        {
          subheading: "",
          content:
            "We charge €9 US Dollars for individuals and €9 US Dollars for team headshots. Payments are processed securely through our payment partner, Stripe. We do not store any payment information on our platform.",
        },
      ],
    },

    {
      heading: "Cancellation Policy",
      content: [
        {
          subheading: "",
          content:
            "Once a user has submitted an image for headshot generation, the process begins immediately. Therefore, cancellations are not possible after the image has been submitted.",
        },
      ],
    },

    {
      heading: "Refund Policy",
      content: [
        {
          subheading: "",
          content:
            "We do not provide automatic refunds for our services. In case of any issues or dissatisfaction with the generated headshot images, customers can contact us at support@headgen.ai within 7 days of receiving the images. Customers should provide detailed information about the issue along with relevant screenshots. Refunds will be considered on a case-by-case basis. If the issue is deemed valid, we may offer a refund or other appropriate resolution.",
        },
      ],
    },

    {
      heading: "Contact Information",
      content: [
        {
          subheading: "",
          content: (
            <>
              For any concerns or issues related to cancellations and refunds,
              <br /> customers can contact us at: Customer Care <br /> Number:
              9987357345 <br />
              Email: support@headgen.ai
            </>
          ),
        },
      ],
    },

    {
      heading: "Changes to Policy",
      content: [
        {
          subheading: "",
          content:
            "We reserve the right to update and modify this Cancellation and Refund Policy as needed. Any changes will be effective immediately and will be reflected on our website. By using Headgen.ai, you acknowledge that you have read and understood this Cancellation and Refund Policy. If you do not agree with our policies, please refrain from using our services.",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
        Cancellation & Refund Policy | HeadGen AI - AI Headshot Generator & AI Photo Services
        </title>
        {/* <meta
          name="description"
          content="Discover how HeadGen AI’s AI image generator creates professional, realistic headshots for resumes, teams, doctors, and LinkedIn. Using our AI photo generator, we deliver the best AI Generated images with ease."
        /> */}
      </Helmet>
      <div className="w-full text-white py-24 px-10 xl:px-[250px] bg-[#161616] flex flex-col gap-6 xl:gap-[3.5rem] tracking-wider">
        <h1 className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px]">
          Cancellation & Refund Policy
        </h1>
        <div className="flex flex-col justify-between gap-6 text-[14px] md:text-[16px]  xl:text-[22px] text-[#e4e2e2] font-light h-full">
          {CancellationContent &&
            CancellationContent?.map((data, idx) => (
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold">
                  {data?.heading?.length > 0 && `${idx}. ${data?.heading}`}
                </h2>
                {data?.content &&
                  data?.content?.map((subData, idx2) => (
                    <div className="flex flex-col gap-6">
                      {subData?.subheading?.length > 0 && (
                        <h3>
                          {idx}.{idx2} {subData?.subheading}
                        </h3>
                      )}
                      <div>{subData?.content}</div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CancellationAndRefunds;
