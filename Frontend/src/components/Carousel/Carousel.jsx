import React from 'react';
import style from './styles.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Carousel({ carouselData }) {
  return (

    <div className={style.carousel_container}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >

        {carouselData && carouselData?.map((item) => (
          <SwiperSlide className='!w-fit py-1'>
            <img alt=""  src={item?.path} className='h-[300px] rounded-md hover:shadow-[0_0_0_1px#d1d1d1] tranisiton duration-300' width={300} height={300} />
          </SwiperSlide>
        ))}


      </Swiper>
     
    </div>
  );
}

export default Carousel;