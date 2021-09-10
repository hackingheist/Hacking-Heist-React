import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {FiLinkedin,FiInstagram,FiGithub,FiGlobe} from "react-icons/fi";
import {AiFillLinkedin} from "react-icons/ai"

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./style.scss";


import SwiperCore, {
  Autoplay,EffectCoverflow,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,EffectCoverflow,Pagination,Navigation]);

const SData = [
  {
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/1.jpeg",
    namep : "Nishant Mishra",
    workp : "Lead Organizer",
    linkedin : "https://www.linkedin.com/in/amnishant/",
    insta : "https://www.instagram.com/nishdrummer/",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/2.jpg",
    namep : "Hardik Kumar",
    workp : "Lead Organizer",
    linkedin : "https://www.linkedin.com/in/littleironical",
    insta : "https://instagram.com/littleironical",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/3.jpg",
    namep : "Ankit Kumar",
    workp : "Database Lead",
    linkedin : "https://www.linkedin.com/in/ankitkumarvaid/",
    insta : "https://instagram.com/totally_not_ankit",
    // git : "#",
    // web : "#"
},
{
  imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/4.jpeg",
  namep : "Heet Kumar",
  workp : "Technical Team",
  linkedin : "https://www.linkedin.com/in/heet-kumar-kothadiya-b6bb9b11a/",
  insta : "https://www.instagram.com/heet_kumar_k/",
  // git : "#",
  // web : "#"
},
{
  imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/5.jpg",
  namep : "Abhijeet Chatterjee",
  workp : "Technical Team",
  linkedin : "https://www.linkedin.com/in/abhijeet-chatterjee-445aa2195/",
  insta : "https://www.instagram.com/abhijeet.chatterjee.08/",
  // git : "#",
  // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/6.jpeg",
    namep : "Mohajit Paul",
    workp : "Community Member",
    linkedin : "http://linkedin.com/in/mohajit-paul-89434a201",
    insta : "https://instagram.com/mohahajit?r=nametag",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/7.jpg",
    namep : "Ansh Raizada",
    workp : "Marketing Team",
    linkedin : "https://www.linkedin.com/in/ansh-raizada",
    insta : "https://instagram.com/ansh_82881",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/8.jpg",
    namep : "Aryan Omkar Ashar",
    workp : "Content Lead",
    linkedin : "https://www.linkedin.com/in/aryanashar/",
    insta : "https://www.instagram.com/aryanashar__/",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://anushkrishna.rocks/assets/img/Anush.png",
    namep : "Anush Krishna",
    workp : "Sponsorship Lead",
    linkedin : "https://www.linkedin.com/in/anush-krishna-v-8270941a0/",
    insta : "#tracks",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/10.jpg",
    namep : "Mahika Agrawal",
    workp : "Sponsorship Team",
    linkedin : "https://www.linkedin.com/in/mahika-agrawal-b938471b1/",
    insta : "https://www.instagram.com/mahikkaaa/",
    // git : "#",
    // web : "#"
},
{
    imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/11.jpg",
    namep : "Prachi Jangid",
    workp : "Sponsorship Team",
    linkedin : "https://www.linkedin.com/in/prachi-jangid",
    insta : "https://www.instagram.com/prachi.jangid.7/",
    // git : "#",
    // web : "#"
},
{
  imgsrc : "https://raw.githubusercontent.com/hackingheist/Hacking-Heist-React/master/pictures/team/12.jpg",
  namep : "Divya Shukla",
  workp : "Lead Organizer",
  linkedin : "https://www.linkedin.com/in/divyashukla23",
  insta : "https://instagram.com/_divs23",
  // git : "#",
  // web : "#"
}
];

function slide(val) {
  return(
    <SwiperSlide >
          <div className="card_continer">
              <div className="black_container">
                  <img src={val.imgsrc} alt="Team Member Image" className="imge"/>
                      <div className="matter">
                          <h3 className="name">{val.namep}</h3>
                          <h5 className="work">{val.workp}</h5>
                          {/* <p className="m_work">{val.m_Workp}</p> */}
                          <ul className="social">
                              <li className="slogo"><a href={val.linkedin} target="_blank"><AiFillLinkedin size={35} color="#CFE4FC"/></a></li>
                              <li className="slogo"><a href={val.insta} target="_blank"><FiInstagram size={35} color="#CFE4FC"/></a></li>
                              {/* <li className="slogo"><a href={val.git} target="_blank"><FiGithub size={25} color="#2F84E5"/></a></li>
                              <li className="slogo"><a href={val.web} target="_blank"><FiGlobe size={25} color="#2F84E5"/></a></li> */}
                          </ul>
                      </div>
              </div>
          </div>
      </SwiperSlide>
  );
}


export default function Swp() {
  
  return (
    <>
    <div className="tracks">
        <h1 className="heading">Our Team</h1>
        <h2 className='subHeading'>Meet the spirited team that worked behind the scenes for Hacking Heist’s Success.</h2>
        <div className="sw-contain">
            <Swiper effect={'coverflow'} spaceBetween={0} speed={1200} grabCursor={true} centeredSlides={true} slidesPerView={3}
            
            autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }}
            
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

        <div className="sw-contain-mobile">
            <Swiper effect={'coverflow'} spaceBetween={30} speed={1200} grabCursor={true} centeredSlides={true} slidesPerView={1}
            
            autoplay={{
                "delay": 2000,
                "disableOnInteraction": false
            }}
            
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