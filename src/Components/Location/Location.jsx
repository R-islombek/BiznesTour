import './Location.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import  local1 from './Location.img/local1.jpg'
import local2 from './Location.img/local2.jpg'
import local3 from './Location.img/local3.jpg'
import local4 from './Location.img/local4.jpg'
import local5 from './Location.img/local5.jpg'
import oman from './Location.img/oman.jpg'
import turkiya from './Location.img/turkiya.webp'
import yaponiya from './Location.img/yaponiya.webp'
import chexiya from './Location.img/chexiya.jpg'
import { t } from 'i18next';



function Location() {

  

  return (
    <div className="location">
      <div className="container location__container">
  <h1 className="location__title">{t("location.title")}</h1>
  <p className="location__text">{t("location.text")}</p>
  <Swiper
        id="local__swiper"
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   519: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   520: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   600: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },

        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="location__img" src={local1} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={local2} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={local3} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={local4} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={local5} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={oman} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={yaponiya} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={turkiya} alt=""/></SwiperSlide>
        <SwiperSlide><img className="location__img" src={chexiya} alt=""/></SwiperSlide>
      </Swiper>
      </div>
  
    </div>
  )
}

export default Location
