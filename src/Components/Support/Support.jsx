import './Support.css'
import Swipercard from '../Swipercard/Swipercard'
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import belgiya from './Support.img/belgiya.jpg'
import china from './Support.img/china.jpg'
import india from './Support.img/india.jpg'
import islandiya from './Support.img/islandiya.jpeg'
import madrid from './Support.img/madrid.jpg'
import oman from './Support.img/oman.jpg'
import saudiya from './Support.img/saudiya.jpg'
import { t } from 'i18next';
import 'swiper/css/pagination';
function Support() {
  

  return (
    <div className="support">
      <div className="container">
      <h1 className="support__title">{t("support.title")}</h1>
  <p className="support__text">{t("support.text")}</p>
            <Swiper
            id="swiper" 
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        navigation ={true}
        loop={true}
        breakpoints={{
          820: {
            slidesPerView: 3,
            spaceBetween: 20,
            
          },
          720: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            
          },
          620: {
            slidesPerView: 1,
            spaceBetween: 20,
            
          },
          520: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
         
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[ Navigation,Autoplay,Pagination]}
        className="mySwiper"
      >
        <div className="support__slide"><SwiperSlide><Swipercard img={belgiya} title={t("swipercard.title1")}  subtitle={t("swipercard.subtext")}/></SwiperSlide>
        <SwiperSlide><Swipercard img={china} title={t("swipercard.title2")} subtitle={"Benefits of our Visa Support service:"}/></SwiperSlide>
        <SwiperSlide><Swipercard img={india} title={t("swipercard.title3")}  subtitle={"Benefits of our Visa Support service:"}/></SwiperSlide>
        <SwiperSlide><Swipercard img={islandiya} title={t("swipercard.title4")}  subtitle={"Benefits of our Visa Support service:"}/></SwiperSlide>
        <SwiperSlide><Swipercard img={oman} title={t("swipercard.title5")}  subtitle={"Benefits of our Visa Support service:"}/></SwiperSlide>
        <SwiperSlide><Swipercard img={madrid} title={t("swipercard.title6")}  subtitle={"Benefits of our Visa Support service:"}/></SwiperSlide>
        <SwiperSlide><Swipercard img={saudiya} title={t("swipercard.title7")}  subtitle={"Benefits of our Visa Support service:"}/></SwiperSlide>
        </div>
      </Swiper>
      <hr className="support__hr"/>
  
    </div>
    </div>
  )
}

export default Support