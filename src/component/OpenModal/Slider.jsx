import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/assets/project/home/harbar.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/project/home/harbar.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/project/home/harbar.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
