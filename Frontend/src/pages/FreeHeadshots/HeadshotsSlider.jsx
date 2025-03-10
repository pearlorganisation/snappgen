import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HeadshotsSlider = () => {
  const headshots = [
    {
      name: "Corporate Headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022217/headgen/Headshots/Banners/ypsqnt8jj4rdbkphzkgj.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022265/headgen/Headshots/Image%20to%20appear%20on%20click/haybecoslhl5oawukalb.webp",
    },
    {
      name: "Doctor Headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022218/headgen/Headshots/Banners/gvvvyfx5myikud4df6zb.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022266/headgen/Headshots/Image%20to%20appear%20on%20click/l3stzd5y9i3jjt371sol.webp",
    },
    {
      name: "Lawyer Headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022219/headgen/Headshots/Banners/anfy7t5v3ml6iecxljn8.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022267/headgen/Headshots/Image%20to%20appear%20on%20click/jxk2vge6mx4a2xgdvkvh.webp",
    },
    {
      name: "Sales Headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022219/headgen/Headshots/Banners/j6er2wouvgyqujpws6fw.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022267/headgen/Headshots/Image%20to%20appear%20on%20click/iqmmj3zciq7v0gkueumu.webp",
    },
    {
      name: "Students Headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022220/headgen/Headshots/Banners/ztfzaecdn0qryd0i7m4t.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/kgzajygbfhmsbmupz7gv.webp",
    },
    {
      name: "Teacher Headshots",
      headshotInfo: {
        imgPath:
          "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022220/headgen/Headshots/Banners/gcswieneujqynonujwdd.webp",
      },
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/rwe5vljldwisdqyihe2s.webp",
    },
  ];
  return (
    <div className="">
      <>
        <Swiper
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {headshots?.map((item) => {
            return (
              <SwiperSlide className="!w-full">
                <div className="flex justify-center gap-2">
                  <img
                    src={`${item?.headshotInfo?.imgPath}`}
                    className="w-full md:w-[60%] rounded-lg"
                    alt=""
                  />

                  <div className="hidden md:flex flex-col justify-center">
                    <span className="w-full text-center text-2xl">
                      What you'll get
                    </span>
                    <img 
                      className="rounded-lg w-[300px] h-[300px] "
                      src={item?.imgPreview}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default HeadshotsSlider;
