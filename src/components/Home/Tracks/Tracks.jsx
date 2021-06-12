import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./style.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

const SData = [
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    imgsrc : "./assets/trackimage.png",
    pname : "TRACK 1",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
];

function slide(val) {
  return(
    <SwiperSlide>
        <div className="container">
          <img className="track_image" src={val.imgsrc} alt="Track-Image" />
          <h2 className="container_heading">{val.pname}</h2>
          <p className="para_container">{val.para}</p>
        </div>
    </SwiperSlide>
  );
}


export default function Swp() {
  
  return (
    <>
    <div className="tracks">
        <h1 className="heading">Tracks</h1>
        <div className="sw-contain">
            <Swiper effect={'coverflow'} spaceBetween={30} speed={1200} grabCursor={true} centeredSlides={true} slidesPerView={'3'} 
            coverflowEffect={{
                "rotate": 0,
                "stretch": 1,
                "depth": 0,
                "modifier": 0,
                "slideShadows": true}} 
                loop={true} pagination={false} navigation={true} className="mySwiper">
                    {SData.map(slide)}    
            </Swiper>
        </div>
    </div>
    </>
  );
}