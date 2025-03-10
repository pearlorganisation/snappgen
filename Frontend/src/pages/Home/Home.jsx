import React, { lazy, useEffect, useState } from "react";
import axios from "axios";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import InfinitySlider from "../../components/InfinitySlider/InfinitySlider";
import FaqAccordian from "../../components/FaqAccordian/FaqAccordian";
import Carousel from "../../components/Carousel/Carousel";
import BlogCards from "../../components/BlogCards/BlogCards";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import { FaLinkedin } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import InfinityTextSlider from "../../components/InfinitySlider/InfinityTextSlider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import AIHeadshot from "./AI-HEADSHOT-EVERYONE/AI-headshot";
const AsSeenOn = lazy(() => import("../../components/AsSeenOn/AsSeenOn"));
const PricingCards = lazy(() => import("./unbelivablePrice/UnbelivablePrice"));
const PriceTable = lazy(() => import("./price&TImetable/price&TimeTable"));
import { Modal } from "@mui/material";




const Home = () => {
  const [blogData, setBlogData] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const imgData1 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722235149/HeadGen_AI_HeadShots_7_vqu14t.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722235053/HeadGen_AI_HeadShots_6_mws1op.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234954/HeadGen_AI_HeadShots_5_ur8a05.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234896/HeadGen_AI_HeadShots_2_cueds0.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234895/HeadGen_AI_HeadShots_gkz5mj.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234891/HeadGen_AI_HeadShots_9_tzkq9v.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234890/HeadGen_AI_HeadShots_8_tpqcon.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722235149/HeadGen_AI_HeadShots_7_vqu14t.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722235053/HeadGen_AI_HeadShots_6_mws1op.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234954/HeadGen_AI_HeadShots_5_ur8a05.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234896/HeadGen_AI_HeadShots_2_cueds0.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234895/HeadGen_AI_HeadShots_gkz5mj.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234891/HeadGen_AI_HeadShots_9_tzkq9v.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234890/HeadGen_AI_HeadShots_8_tpqcon.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234954/HeadGen_AI_HeadShots_5_ur8a05.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234896/HeadGen_AI_HeadShots_2_cueds0.webp",
    },
  ];

  const imgData2 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685090/Ai-image-gnereator15_bzgx6y.webp",
    },

    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685089/Ai-image-gnereator14_m0hwwb.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685089/Ai-image-gnereator13_p2dhmx.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685089/Ai-image-gnereator12_pitldr.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685088/Ai-image-gnereator11_czbkiz.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685088/Ai-image-gnereator10_lojag9.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685088/Ai-image-gnereator9_so34wp.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685088/Ai-image-gnereator8_azzxkj.webp",
    },

    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator7_ryaykr.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator5_rju1kc.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator6_j35qqi.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator4_m47q7g.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator3_hqypcq.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator2_gznrf0.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685087/Ai-image-gnereator1_fbuwex.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729685088/Ai-image-gnereator11_czbkiz.webp",
    },
  ];

  const imgData3 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021885/headgen/Home/Slideshow/bottom%20line/tpirpoyitgrl4vfv68hl.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/bc3scfh9dumbjsdfadzt.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/tww7sdgdqvmuek36vd1w.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/w5wyqi4uo7gwbwnsatn1.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/iehygz7sggohrm5rm96n.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/sbg4pzoyg7b4g3hblp4x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021883/headgen/Home/Slideshow/bottom%20line/rfguoodg3tliid18hl8d.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021885/headgen/Home/Slideshow/bottom%20line/tpirpoyitgrl4vfv68hl.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/bc3scfh9dumbjsdfadzt.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/tww7sdgdqvmuek36vd1w.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/w5wyqi4uo7gwbwnsatn1.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/iehygz7sggohrm5rm96n.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/sbg4pzoyg7b4g3hblp4x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021883/headgen/Home/Slideshow/bottom%20line/rfguoodg3tliid18hl8d.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/tww7sdgdqvmuek36vd1w.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/w5wyqi4uo7gwbwnsatn1.webp",
    },
  ];

  const moneyBackPics = [
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022097/headgen/Home/Money%20back%20gurantee/mh4pbzrezfbb0c6h2fki.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022096/headgen/Home/Money%20back%20gurantee/pakwoghifmonib07cipj.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022096/headgen/Home/Money%20back%20gurantee/ivcwzdxztugzg5fshux0.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022095/headgen/Home/Money%20back%20gurantee/zanf4vzveklxcbugmrmn.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022095/headgen/Home/Money%20back%20gurantee/rb9auh0w4d9j7xnjnvqo.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022097/headgen/Home/Money%20back%20gurantee/uvmpoflavstne9sorqu2.webp",
    },
  ];

  const reviewData1 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/vwbntgy7jljdhbtrkp7c.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/ywyfovbxccxsvgc3agjw.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022021/headgen/Home/Our%20clients%20love%20the%20results/b91fnysczhfba8levtv1.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022021/headgen/Home/Our%20clients%20love%20the%20results/sqfclgos56luoi1ovxfc.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022021/headgen/Home/Our%20clients%20love%20the%20results/jb2hxeaie6hb4g57yjbd.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022020/headgen/Home/Our%20clients%20love%20the%20results/zwdiqyh7ksawl9ax4esc.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022020/headgen/Home/Our%20clients%20love%20the%20results/jfak2rpzwygegm0rjah4.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022020/headgen/Home/Our%20clients%20love%20the%20results/wvguod1hcf57rti8m4ks.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022019/headgen/Home/Our%20clients%20love%20the%20results/jyjefhfjfv4vdjwf3vrj.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022019/headgen/Home/Our%20clients%20love%20the%20results/xuff5bngwkzvsdpstc0p.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022019/headgen/Home/Our%20clients%20love%20the%20results/uozy5ccz1nqsj1gpbsf6.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022018/headgen/Home/Our%20clients%20love%20the%20results/mi6wb89csg7mnkscix09.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022018/headgen/Home/Our%20clients%20love%20the%20results/jicl9xctg1ziwgbnxpqv.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022018/headgen/Home/Our%20clients%20love%20the%20results/wkrbcto2sdsyptrcwnhu.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/vwbntgy7jljdhbtrkp7c.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/ywyfovbxccxsvgc3agjw.webp",
    },
  ];

  const cardData = [
    {
      title: "Upload a selfie",
      content:
        "Start your professional AI image generation experience by uploading your selfie.",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234855/HeadGen_AI_15_f5art0.webp",
    },
    {
      title: "Make Payment",
      content:
        "Make your payment to unlock the power of AI and transform your image into stunning professional images.",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234854/HeadGen_AI_16_zrurrd.webp",
    },
    {
      title: "Get Professional Images",
      content:
        "Get professional images all delivered to you within a swift window of time.",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1722234854/HeadGen_AI_17_arw1w9.webp",
    },
  ];

  const carouselData = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022036/headgen/Home/Premium%20Professional%20headshots%20generator/g7fykguwuqjjxprepn0x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022035/headgen/Home/Premium%20Professional%20headshots%20generator/cnmto5awa2jiqbxtvw2x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022035/headgen/Home/Premium%20Professional%20headshots%20generator/xsly9xjgpfktdh8iqumf.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/vsrc9d7otttfvjwecr9v.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/fmevs4u03kmavhsbgvp6.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/fubziz4smd7vus5jvfju.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/wbkcqoubmcby8vtm1p4g.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022033/headgen/Home/Premium%20Professional%20headshots%20generator/wgkmix0qjzhch1a1if22.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022033/headgen/Home/Premium%20Professional%20headshots%20generator/h1lzh4bbavbbn4ku8ui8.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022032/headgen/Home/Premium%20Professional%20headshots%20generator/rqjm2uom2pfpocnisj8y.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022032/headgen/Home/Premium%20Professional%20headshots%20generator/syycc7szgushtu0ya2zk.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022032/headgen/Home/Premium%20Professional%20headshots%20generator/ddxaqslt8tqfj14jrnpl.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022031/headgen/Home/Premium%20Professional%20headshots%20generator/n6nsrl9jjadmjh4esfx7.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022031/headgen/Home/Premium%20Professional%20headshots%20generator/rszo33twyvwjqiinifxu.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022031/headgen/Home/Premium%20Professional%20headshots%20generator/hicuaotiab66d7tdqksg.webp",
    },
  ];

  const useCaseData = [
    {
      title: "Linkedin Photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1723101550/HeadGen_AI_HeadShots_9_lhlcoo.webp",
      svg: (
        <>
          <FaLinkedin size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Resume",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1723101549/HeadGen_AI_HeadShots_8_lmyrof.webp",
      svg: (
        <>
          <IoDocumentTextOutline size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Team photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021927/headgen/Home/use%20cases/tdpnwk5o2ursaeocr453.webp",
      svg: (
        <>
          <MdGroups size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Portfolio Website",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1723101550/HeadGen_AI_HeadShots_10_doxubx.webp",
      svg: (
        <>
          <LazyLoadImage
            alt=""
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021927/headgen/Home/use%20cases/tyyoog6ul8umehqzkb3m.webp"
            className="w-[22px] h-[22px]"
            height={"22px"}
            width={"22px"}
          />
        </>
      ),
    },
    {
      title: "Job Portal",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1723101551/HeadGen_AI_HeadShots_zazqd5.webp",
      svg: (
        <>
          <LazyLoadImage
            alt=""
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728031057/Indeed_logo_cvpykw.png"
            className="h-[16px]"
            height={"16px"}
            width={"50px"}
          />
        </>
      ),
    },
  ];

  const howitworks = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251125/14_1_lb0ptb.webp",
      title: "Upload a Selfie",
    },

    {
      id: 2,
      img: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251125/15_1_kdhxuf.webp",
      title: "Select Attire & Background",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251126/16_1_m5xxlu.webp",
      title: "HeadGen AI gets to work",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251126/17_1_ksomyw.webp",
      title: "Recieve AI Headshots via E-mail",
    },
  ];

  const privacyFirstData = [
    {
      title: "Advanced Encryption",
      content:
        "Your data deserves the best protection. We encrypt all sensitive user data",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030952/encryption_e1volq.webp",
    },
    {
      title: "Secured Data",
      content: "HeadGen.ai will never sell your data to any third party.",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030951/secure_auiiz0.webp",
    },
    {
      title: "You’re in Control",
      content: "We will never use your photos  to train our AI model .",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030951/control_vkdhtx.webp",
    },
    {
      title: "Live Support",
      content: "E-mail us anytime. We respond Monday-Saturday.",
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1728030951/support_ktdvai.webp",
    },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs/recent`)
      .then((res) => {
        setBlogData(res.data.blogsData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          HeadGen AI | AI Image Generator for Realistic AI Headshots &
          High-Quality AI Photos
        </title>
        <meta
          name="description"
          content="HeadGen AI’s AI image generator creates professional, realistic headshots for resumes, teams, doctors, and LinkedIn. Using our AI photo generator, we deliver the best AI Generated images with ease."
        />
      </Helmet>
      <div className="w-full py-20  flex flex-col bg-gradient-to-b gradientBg gap-5 md:gap-5 overflow-x-hidden">
        {/* hero */}
        {/* btn */}
        <div className="flex items-center mx-auto mt-20">
          <div className="p-[2px] bg-gradient-to-r from-[#002487] to-[#A300E5] rounded-full">
            <button className="bg-[#002487] text-[#e4e7ee] rounded-full px-3 py-2 text-sm md:text-base md:px-4 md:py-3 hover:opacity-90  ease-in-out hover:bg-[#1d2838] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500">
              Most Realistic AI Headshot Generator
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-[1.45rem] sm:text-4xl md:text-5xl text-white text-center px-8 leading-tight">
            <span className="font-semibold">Convert your selfies into Professional </span>
            <span className="font-bold text-[#00B9C8]">AI Headshots</span>
          </h1>
        </div>

        <div className="mx-auto max-w-2xl">
          <h1 className="text-[9px] md:text-base text-white font-light text-center px-8 leading-tight">
            <span>Get Professional Images for your LinkedIn , Doctor , Student or Dating Profile</span>
          </h1>
        </div>


        <div className="mx-auto">
          <Link
            to="/corporate-ai-headshots"
            className={`w-48 px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500`}
          >
            Get your photos for €9
          </Link>
        </div>

        <div>
          <div className="w-full overflow-hidden bg-[002C61]">
            <InfinitySlider imgData1={imgData1} />
          </div>
        </div>
      </div>

      <AsSeenOn />

      <div className="bg-gradient-to-b gradientBg text-white px-4 py-20 pb-20">
        <div className="mx-auto text-center space-y-8 border-red-500">
          <h2 className="text-4xl text-center font-bold px-16">
            How it <span className="text-blue-500">works</span>
          </h2>
          <div className="overflow-auto p-2 py-5 no-scrollbar">
            <div className="flex flex-row md:justify-center items-center w-full gap-8">
              {howitworks?.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-64 bg-[#111428] border border-[#143f76] hover:shadow-[0_0_0_1px_#2563EB] rounded-xl md:hover:-translate-y-4 cursor-pointer transition duration-300 px-6 py-8">
                    <div className="w-full h-56">
                      <LazyLoadImage
                        alt={item?.title || "Image"} // Optional title for accessibility
                        src={item?.img}
                        className="w-full h-full object-cover rounded-t-xl"
                        height={250}
                        width={250}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between text-start gap-4">
                    <div className="flex flex-col items-center justify-center mt-4 text-white font-semibold rounded-full text-center h-8 w-8 border-2 border-[#8bceed] shadow-[0_0_8px#529cde] ">
                      <span>{index + 1}</span>
                    </div>
                    <div className=" mt-5 text-center text-sm md:text-[16px]">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-14 rounded-md">
        <AIHeadshot />
      </div>

      <div className="pb-20 px-10 md:px-16 2xl:px-[200px] gradientBg">
        <div className="w-full flex mt-28 py-8 lg:py-24 rounded-lg ">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mx-auto">
            {/* Text Section */}
            <div className="w-full lg:w-4/5 text-center lg:text-left">
              <h1 className="text-white text-xl text-center md:text-left md:text-2xl font-semibold  lg:text-4xl xl:text-5xl leading-snug max-w-2xl mx-auto lg:mx-0">
                Get Corporate AI Headshots for your LinkedIn Profile
              </h1>
              <p className="text-white mt-4 text-base lg:text-lg">
                Get stunning AI Headshots to Boost your Professional Career
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                <Link
                  to="/corporate-ai-headshots"
                  className="hover:squeezyBtn flex justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-white rounded-lg w-full sm:w-auto px-6 py-3 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
                >
                  Get Started
                </Link>
                <button
                  to="/corporate-ai-headshots"
                  className="hover:squeezyBtn flex justify-center items-center border-2 border-[#dadde2] shadow-md hover:bg-[#1d2838] text-white rounded-lg w-full sm:w-auto px-6 py-3 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
                  onClick={() => handleOpen()}
                >
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-[250px] h-[250px] flex-shrink-0">
              <img
                alt="Corporate AI Headshots"
                src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251126/HeadGen_New_Images_1_bh9da7.webp"
                className="w-full h-full object-cover rounded-lg md:hover:-translate-y-4 cursor-pointer transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>



      <div className="pb-20">
        <InfinityTextSlider />
      </div>

      <div className="mx-auto text-center space-y-10 border-red-500">
        <h2 className="text-xl text-center md:text-[45px] font-semibold lg:font-normal lg:text-[64px] text-white">
          <span className="text-blue-500">Swipe</span> to see Headgen AI Results
        </h2>
        <div className="">
          <div className="px-10 md:px-16 2xl:px-[200px] flex flex-row flex-wrap justify-center gap-5">
            <div className="bg-[#111428] shadow-[0_0_0_1px_#2563EB] rounded-xl px-4 py-8 h-fit w-fit">
              <BeforeAfterSlider
                img1={
                  "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738327056/17_3_qkcq94.webp"
                }
                img2={
                  "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738327059/20_1_ud2smx.webp"
                }
              />
            </div>

            <div className="bg-[#111428] shadow-[0_0_0_1px_#2563EB] rounded-xl px-4 py-8 h-fit w-fit">
              <BeforeAfterSlider
                img1={
                  "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251126/HeadGen_New_Images_2_ulenkv.webp"
                }
                img2={
                  "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1736251126/HeadGen_New_Images_3_pjophi.png"
                }
              />
            </div>

            <div className="bg-[#111428] shadow-[0_0_0_1px_#2563EB] rounded-xl px-4 py-8 h-fit w-fit">
              <BeforeAfterSlider
                img1={
                  "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738327057/18_1_nvpokc.webp"
                }
                img2={
                  "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738327058/19_1_jj6f2l.webp"
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Unbeatable Prices */}
      <div className="pt-20 py-10 px-10 md:px-16 2xl:px-[200px] ">
        <PricingCards />
      </div>
      <div className="py-10 md:px-16 2xl:px-[200px]">
        <PriceTable />
      </div>

      <div className="gradientBackground">
        <div className="px-10 md:px-16 2xl:px-[200px]">
          <h2 className="flex flex-col items-center gap-6 pt-20">
            <div className="text-white text-2xl text-center md:text-[45px] font-semibold lg:font-normal lg:text-[64px]">
              High Quality Images
            </div>
            <div className="w-full max-w-[90%] flex flex-col gap-6 items-center">
              <div className="text-center text-white text-[16px]">
                We take our Quality very seriously Our Engineers ensure that
                almost all the images generated can be used in a profesional
                setting
              </div>
              <div className="flex flex-col gap-4 w-full md:w-1/2 items-center">
                <Link
                  to="/corporate-ai-headshots"
                  className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full py-2 px-4  md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
                >
                  Get your photos for €9
                </Link>
                <span className="flex flex-col text-center text-[19px] text-[#f1f1f1]">
                  <span>
                    Payment handled by{" "}
                    <strong className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text ">
                      Stripe
                    </strong>
                  </span>
                  <span className="text-[14px]">
                    We do not store your payment details
                  </span>
                </span>
              </div>
            </div>
          </h2>
        </div>

        <div className="py-8 md:py-16">
          <InfinitySlider imgData1={imgData2} imgData2={imgData3} />
        </div>



        {/* turn your selfie info card */}
        <div className="px-10 md:px-16 2xl:px-[200px]">
          <div className="w-full grid md:grid-cols-2 gap-4 bg-gradient-to-r from-[#131270] via-[#161497] to-[#1f1db3] mt-28 py-5 lg:py-10 rounded-xl shadow-[0_0_1px_1px#1d5eb3]  ">
            <div className="flex w-full flex-col  items-center md:items-start justify-evenly gap-2 md:gap-4 px-10">
              <h3 className="text-xl md:text-[22px] lg:text-[32px] xl:text-[48px] 2xl:text-4xl text-[#F1F1F1]">
                Turn your selfie into
              </h3>
              <div className=" text-center w-full md:text-left text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl  bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                Professional Headshots
              </div>
              <div className="text-xl md:text-3xl text-center md:text-left text-[#F1F1F1]">
                AI Headshots
              </div>
              <div>
                <Link
                  to="/corporate-ai-headshots"
                  className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full px-6 py-2 md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
                >
                  Get your photos for €9
                </Link>
              </div>
            </div>
            <div className="w-full object-contain">
              <LazyLoadImage
                alt=""
                src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738917641/ai_image_generator_headgen_ai_ehojfw.webp"
                className="w-full h-full"
                height={"250px"}
                width={"430px"}
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {/* dating hero section */}
        <div className="px-10 md:px-16 2xl:px-[200px]">
          <div className="flex justify-center py-20 ">
            <DatingHero />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 px-10 md:px-16 2xl:px-[200px]">
        <div className="w-full relative">
          <div className="flex flex-col items-center md:items-start justify-center gap-2 md:gap-6 top-0">
            <h2 className=" text-[#F1F1F1] md:grid space-x-3 md:space-x-0  w-full text-center md:text-left text-xl sm:text-2xl md:text-4xl xl:text-6xl font-medium">
              <span>Frequently</span>

              <span>Asked</span>

              <span>Questions</span>
            </h2>
            <div className="text-[#F1F1F1] text-center text-[13px] md:text-[14px]">
              E-mail is at support@headgen.ai <br /> we are available round the clock.
            </div>
          </div>
        </div>
        <div className="w-full">
          <FaqAccordian />
        </div>
      </div>
      <div className="flex space-y-4 flex-col  py-10">
        <div className="px-10 md:px-16 2xl:px-[200px]">
          <h2 className="text-center text-xl sm:text-2xl md:text-4xl xl:text-6xl  text-[#F1F1F1]">
            <span className=" bg-gradient-to-r md:leading-[5rem] from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Our Clients love
            </span>{" "}
            Our Results
          </h2>
        </div>
        <InfinitySlider
          imgData1={reviewData1}
          imgData2={reviewData1}
          height={"400px"}
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-10 py-10">
        <h2 className="text-center text-lg sm:text-xl md:text-3xl xl:text-5xl text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Privacy First
          </span>{" "}
          to Protect Your Data
        </h2>
        <div className="flex flex-wrap justify-center gap-4  px-10 md:px-16 2xl:px-[200px] ">
          {privacyFirstData &&
            privacyFirstData?.map((item) => (
              <div className=" w-[70%] md:w-[33%] xl:w-[22%] rounded-2xl p-4 py-6 bg-transparent hover:!bg-gradient-to-b hover:!from-[#02AFDC] hover:!to-[#2563EB] flex flex-col justify-between items-center text-[#F1F1F1] shadow-[0_0_2px_1px_#1d5eb3] hover:shadow-[0_0_5px_1px_#2563EB] hover:scale-[0.98] cursor-default transition duration-500">
                <div className="w-1/3">
                  <LazyLoadImage
                    alt=""
                    src={item?.imgPath}
                    className="w-full"
                    height={"100px"}
                    width={"100px"}
                  />
                </div>
                <div className="2xl:text-lg">{item?.title}</div>
                <div className="text-xs 2xl:text-base text-center">
                  {item?.content}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 py-10">
        <h2 className="text-center text-xl md:text-4xl xl:text-6xl text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Premium Professional
          </span>{" "}
          Image Generator
        </h2>
        <div className="text-center text-[#f1f1f1] text-[15px]">
          Swipe to see more images
        </div>
        <Carousel carouselData={carouselData} />
        <div className="text-center text-[#f1f1f1] text-[12px]">
          AI Generated Images using HeadGen
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 px-10 md:px-16 2xl:px-[200px] py-10">
        <div className="w-full flex flex-col items-center gap-1">
          <div className="flex w-2/3  gap-1">
            <div className="w-2/3 max-w-[300px]">
              <LazyLoadImage
                alt=""
                src={`${moneyBackPics[0].path}`}
                className="h-full !max-h-[300px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={"300px"}
                width={"300px"}
              />
            </div>
            <div className="w-1/3 max-w-[150px] flex flex-col gap-1">
              <LazyLoadImage
                alt=""
                src={`${moneyBackPics[1].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={"150px"}
                width={"150px"}
              />
              <LazyLoadImage
                alt=""
                src={`${moneyBackPics[2].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={"150px"}
                width={"150px"}
              />
            </div>
          </div>
          <div className="flex w-2/3   gap-1">
            <div className="w-1/3 max-w-[150px] flex flex-col gap-1">
              <LazyLoadImage
                alt=""
                src={`${moneyBackPics[3].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={"150px"}
                width={"150px"}
              />
              <LazyLoadImage
                alt=""
                src={`${moneyBackPics[4].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={"150px"}
                width={"150px"}
              />
            </div>
            <div className="w-2/3 max-w-[300px]">
              <LazyLoadImage
                alt=""
                src={`${moneyBackPics[5].path}`}
                className="h-full !max-h-[300px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={"300px"}
                width={"300px"}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 top-0">
            <h2 className="text-center space-x-3 md:space-x-0 md:grid text-[#F1F1F1] text-xl sm:text-[32px] md:text-[42px] lg:text-[52px] 2xl:text-[60px] font-medium">
              <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                Money-Back
              </span>
              <span>Guarantee</span>
            </h2>
            <div className="text-[#F1F1F1] text-center text-[10px] md:text-[14px]">
              Try Headgen.ai with confidence. Our results are Mind blowing.
            </div>
            <Link
              to="/corporate-ai-headshots"
              className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full md:w-2/3 py-2  md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
            >
              Get your photos for €9
            </Link>
          </div>
        </div>
      </div>
      {blogData && blogData?.length > 0 && (
        <div className="flex flex-col gap-24 px-10 md:px-16 2xl:px-[200px]">
          <h2 className="text-center text-xl md:text-4xl xl:text-6xl text-[#F1F1F1]">
            <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              HeadGen
            </span>{" "}
            AI Blog
          </h2>
          <div>
            <BlogCards data={blogData} />
          </div>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="relative w-[95vw] md:w-fit rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 focus:none">
          <iframe
            src="https://res.cloudinary.com/dj2fvzfmm/video/upload/v1738928785/HeadGen_AI_-_How_to_Use_Video_nvohts.mp4"
            width="100%"
            height="100%"
            className="rounded-2xl h-[200px] sm:w-[500px] sm:h-[300px] md:h-[300px] md:w-[640px] 2xl:h-[400px] 2xl:w-[700px]"
            title="how it works video"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default Home;
