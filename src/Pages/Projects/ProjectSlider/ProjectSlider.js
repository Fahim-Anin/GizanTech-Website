import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './ProjectSlider.css';
import Banner3 from '../../../Assets/Images/Banner3.png';
// import required modules
import { EffectCards } from 'swiper';
//import { Image } from 'react-bootstrap';

const ProjectSlider = () => {
  return (
    <div>
      <>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="generalImage2" src={Banner3} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default ProjectSlider;
