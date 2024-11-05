import './Tours.css'
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slidercard from '../Slidercard/Slidercard';
import canada from './Tours.img/canada.jpg'
import germaniya from './Tours.img/germaniya.jpg'
import parij from './Tours.img/parij.jpg'
import turkiya from './Tours.img/turkiya.webp'
import avstraliya from './Tours.img/avstraliya.jpg'
import chexiya from './Tours.img/chexiya.jpg'
import madrid from './Tours.img/madrid.jpg'
import yaponiya from './Tours.img/yaponiya.webp'
import islandiya from './Tours.img/islandiya.jpeg'
import { t } from 'i18next';

function Tours() {
  

  return (
    <div className="tour" id="Tours">
      <div className="container">
            <h1 className="tour__title">{t("tour.title")}</h1>
  <p className="tour__text">{t("tour.text")}</p>
            <Swiper
            id="slider" 
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        navigation ={false}
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
        <SwiperSlide><Slidercard img={canada} title={t("tour.cardtitle1")} number={"$300"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={yaponiya} title={t("tour.cardtitle2")} number={"$340"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={avstraliya} title={t("tour.cardtitle3")} number={"$500"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={chexiya} title={t("tour.cardtitle4")} number={"$650"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={germaniya} title={t("tour.cardtitle5")} number={"$530"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={madrid} title={t("tour.cardtitle6")} number={"$854"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={parij} title={t("tour.cardtitle7")} number={"$326"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={turkiya} title={t("tour.cardtitle8")} number={"$652"} subtitle={t("tour.cardtext")}/></SwiperSlide>
        <SwiperSlide><Slidercard img={islandiya} title={t("tour.cardtitle9")} number={"$560"} subtitle={t("tour.cardtext")}/></SwiperSlide>
      </Swiper>
        <hr className="tour__hr"/>
    </div>
    </div>
  )
}

export default Tours