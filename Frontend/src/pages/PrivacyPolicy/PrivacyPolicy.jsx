import React from "react";
import Helmet from "react-helmet";

const PrivacyPolicy = () => {
  const policyContent = [
    {
      heading: "",
      content: [
        {
          subheading: "",
          content:
            "Welcome to SnappGen.in, a service provided by Playcloud Technologies Private Limited. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website and services. By using SnappGen.in, you agree to the terms outlined in this Privacy Policy. Please read this document carefully to understand how we handle your information.",
        },
      ],
    },
    {
      heading: "Information We Collect",
      content: [
        {
          subheading: "Personal Information",
          content:
            "When you use our service, we collect personal information such as your name, email address, and contact number.",
        },
        {
          subheading: "Image Data",
          content:
            "We temporarily collect and process the image you upload for the purpose of generating headshot images. However, we do not store these images once the generation process is complete.",
        },
        {
          subheading: "Payment Information",
          content:
            "We do not store any payment information on our platform. Our payment partner, Stripe, handles all payment transactions securely.",
        },
      ],
    },

    {
      heading: "How We Use Your Information",
      content: [
        {
          subheading: "Headshot Generation ",
          content:
            "We use the image data provided to generate professional headshot images as per your request.",
        },
        {
          subheading: "Communication ",
          content:
            "We may use your contact information to communicate with you regarding your service, updates, and relevant offers.",
        },
        {
          subheading: "Customer Support ",
          content:
            "Your information may be used to provide customer support services, including responding to inquiries and resolving issues.",
        },
      ],
    },

    {
      heading: "How We Share Your Information",
      content: [
        {
          subheading: "",
          content:
            "We do not share your personal information, image data, or any other data with third parties, except as required to provide the services you requested or as required by law. ",
        },
      ],
    },

    {
      heading: "Data Storage",
      content: [
        {
          subheading: "",
          content:
            "We do not store customer images or personal data beyond the time required to generate the headshot images. Once the images are generated, we do not retain any customer data.",
        },
      ],
    },

    {
      heading: "Security",
      content: [
        {
          subheading: "",
          content:
            "We take reasonable measures to protect your personal information and ensure data security. Our payment partner, Stripe, follows industry standard security practices.",
        },
      ],
    },

    {
      heading: "Contact Information",
      content: [
        {
          subheading: "",
          content:
            "If you have any questions or concerns about our privacy practices, you can contact us at: Customer Care Number: 9987357345, Email: support@SnappGen.in",
        },
      ],
    },

    {
      heading: "Changes to Privacy Policy",
      content: [
        {
          subheading: "",
          content:
            "We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage you to review it regularly",
        },
      ],
    },

    {
      heading: "Location of Processing",
      content: [
        {
          subheading: "",
          content:
            "Your personal information may be processed in Bangalore, India, where our main operations are based. By using SnappGen.in, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please refrain from using our services.",
        },
      ],
    },
  ];

  const contactContent = [
    {
      title: "Company Name:",
      heading: "Playcloud Technologies Private Limited",
      content: (
        <>
          Address:
          <br />
          10th floor, RMZ Latitude Commercial Building, Bellary Rd,
          Vinayakanagar, Byatarayanapura, Bengaluru, Karnataka 560024
          <br />
          Email: support@SnappGen.in
          <br />
          Date: 10-01-2024
        </>
      ),
    },
    {
      title: "Contact:",
      heading: "",
      content: (
        <>
          Playcloud Technologies Private Limited
          <br />
          10th floor, RMZ Latitude Commercial Building,Bellary Rd Vinayakanagar,
          Byatarayanapura, Bengaluru, Karnataka, 560024
          <br />
          support@SnappGen.in
          <br />
          Customer Care: +91 9820442749
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Privacy Policy | HeadGen AI - Protecting Your Data with Our AI Image
          Generator
        </title>
        {/* <meta
          name="description"
          content="Discover how HeadGen AI’s AI image generator creates professional, realistic headshots for resumes, teams, doctors, and LinkedIn. Using our AI photo generator, we deliver the best AI Generated images with ease."
        /> */}
      </Helmet>
      <div className="w-full text-white py-24 px-10 xl:px-[100px] bg-[#161616] flex flex-col gap-6 xl:gap-[3.5rem] tracking-wider">
        <h1 className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px]">
          Privacy Policy
        </h1>
        <div className="flex flex-col justify-between gap-6 text-[14px] md:text-[16px]  xl:text-[22px] text-[#e4e2e2] font-light h-full">
          {policyContent &&
            policyContent?.map((data, idx) => (
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold">
                  {data?.heading?.length > 0 && `${idx}. ${data?.heading}`}
                </h2>
                {data?.content &&
                  data?.content?.map((subData, idx2) => (
                    <div className="flex flex-col gap-6 ">
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
        <div className="flex gap-10 font-regular text-[#e4e2e2]">
          {contactContent &&
            contactContent?.map((item) => (
              <div className="w-[48%] flex flex-col gap-2 justify-between text-[14px] md:text-[16px]  xl:text-[22px]">
                <h3 className="flex gap-2">
                  <strong>{item?.title}</strong>
                  {item?.heading}
                </h3>
                <div className="leading-7 xl:leading-9 ">{item?.content}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
