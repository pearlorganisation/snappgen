import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab/Tab";
import DatingTab from "../../components/Dating/DatingTab/DatingTab";
import { Helmet } from "react-helmet";

const UploadPage = ({ section }) => {
  const [isDatingPage, setIsDatingPage] = useState(false);

  useEffect(() => {
    if (section === "dating") {
      setIsDatingPage(true);
    } else {
      setIsDatingPage(false);
    }
  }, [section]);

  const helmetData = [
    {
      name: "dating",
      title:
        "AI Dating Headshots | Find Your Match with Realistic AI Photos & AI Picture Generator",
      meta: "Use HeadGen AI’s AI image generator to create the perfect dating profile photo. Our AI Generated images are high-quality and personalized, ensuring you stand out from the crowd.",
    },
    {
      name: "Corporate Headshots",
      title:
        "AI Corporate Headshots Generator | Professional AI Headshots for LinkedIn & Teams",
      meta: "Generate professional corporate headshots with HeadGen AI’s AI images generator. Our AI photo generator delivers AI generated photos for LinkedIn profiles and teams, offering polished and professional results.",
    },
    {
      name: "Doctor Headshots",
      title:
        "AI Doctor Headshots | High-Quality AI Images for Medical Professionals & Virtual Photoshoot",
      meta: "Create polished doctor headshots with HeadGen AI’s AI Generated images. Our Professional AI Generator ensures professional headshots for ERAS and medical profiles and nurses using the latest AI Headshots technology",
    },
    {
      name: "Lawyer Headshots",
      title:
        "AI Lawyer Headshots Generator | Professional AI Photos & AI Headshot Generator for Lawyers",
      meta: "Use HeadGen AI’s AI image generator to create professional lawyer headshots. Our Professional AI generated images are perfect for legal profiles, business cards, and websites, offering professional-grade results.",
    },
    {
      name: "Sales Headshots",
      title:
        "AI Sales Headshots | Enhance Your Team with Professional AI Images & AI Headshot Generator",
      meta: "Boost your sales career with HeadGen AI’s AI Generated images. Our AI Headshot generator and Professional AI photo generator deliver polished, professional photos for resumes and LinkedIn profiles.",
    },
    {
      name: "Students Headshots",
      title:
        "AI Student Headshots Generator | Professional AI Photos for Resumes & Job Portals",
      meta: "Get professional AI-generated student headshots with HeadGen AI’s AI photo generator. Perfect for resumes and LinkedIn profiles, our Student Professionak AI Headshot Generator ensures high-quality, polished results.",
    },
    {
      name: "Teacher Headshots",
      title:
        "AI Teacher Headshots Generator | High-Quality AI Images for Educators & AI Photo Enhancement",
      meta: "Create professional AI Generated teacher headshots with HeadGen AI’s AI image generator. Our Professional AI Image generator ensures polished images for school websites, resumes, and LinkedIn profiles.",
    },
  ];

  return (
    <>
      
        {helmetData &&
          helmetData
            ?.filter((item) => {
              return item?.name === section;
            })
            .map((filteredItem, idx) => (
              <Helmet key={`helmet${idx}`}>
                <title>{filteredItem?.title}</title>
                <meta name="description" content={filteredItem?.meta} />
              </Helmet>
            ))}
   
      <div className="w-full py-28 flex flex-col bg-[#161616] gap-28">
        {isDatingPage ? (
          <DatingTab section={section} />
        ) : (
          <Tab section={section} />
        )}
      </div>
    </>
  );
};

export default UploadPage;
