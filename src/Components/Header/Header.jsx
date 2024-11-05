import './Header.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import shvetsariya from './Header.img/shvet.webp'
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../Button/Button';
import italiya from './Header.img/italiya.jpg'
import gavayi from './Header.img/gavayii.jpg'
import dubay from './Header.img/dubay.jpeg'
import { t } from 'i18next';

function Header() {
  

  return (
    <div className="header">
     <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <img className="header__img" src={italiya} alt=""/>
          <div className="header__wrap">
      <h3 className="header__title">{t("header.title")}</h3>
      <h1 className="header__name">{t("header.name1")}</h1>
          <Button title={t("header.btn1")} wh={"150px"} ht={"45px"}  />
          <ul className="header__list">
            <li className="header__item">
            <i class="fa-solid fa-user"></i>
            <div className="header__box">
      <p className="header__text">{t("header.text1")}</p>
              <p className="header__subtext">67.84M</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-globe"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text2")}</p>
              <p className="header__subtext">600.300KM2</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-house"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text3")}</p>
              <p className="header__subtext">$150.000</p>
            </div>
            </li>
            <Button title={t("header.btn2")} wh={"170px"} ht={"45px"} />
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="header__img" src={shvetsariya} alt=""/>
          <div className="header__wrap">
          <h3 className="header__title">{t("header.title")}</h3>
          <h1 className="header__name">{t("header.name2")}</h1>
          <Button title={t("header.btn1")} wh={"150px"} ht={"45px"}  />
          <ul className="header__list">
            <li className="header__item">
            <i class="fa-solid fa-user"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text1")}</p>
              <p className="header__subtext">56.34M</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-globe"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text2")}</p>
              <p className="header__subtext">400.345KM2</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-house"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text3")}</p>
              <p className="header__subtext">$125.600</p>
            </div>
            </li>
            <Button title={t("header.btn2")} wh={"170px"} ht={"45px"}/>
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className="header__img" src={gavayi} alt=""/>
          <div className="header__wrap">
          <h3 className="header__title">{t("header.title")}</h3>
          <h1 className="header__name">{t("header.name3")}</h1>
          <Button title={t("header.btn1")} wh={"150px"} ht={"45px"} />
          <ul className="header__list">
            <li className="header__item">
            <i class="fa-solid fa-user"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text1")}</p>
              <p className="header__subtext">134.84M</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-globe"></i>
            <div className="header__box">
              <p className="header__text">T{t("header.text2")}</p>
              <p className="header__subtext">875.76KM2</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-house"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text3")}</p>
              <p className="header__subtext">$230.000</p>
            </div>
            </li>
            <Button title={t("header.btn2")} wh={"170px"} ht={"45px"}/>
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className="header__img" src={dubay} alt=""/>
          <div className="header__wrap">
          <h3 className="header__title">{t("header.title")}</h3>
          <h1 className="header__name">{t("header.name4")}</h1>
          <Button title={t("header.btn1")} wh={"150px"} ht={"45px"}  />
          <ul className="header__list">
            <li className="header__item">
            <i class="fa-solid fa-user"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text1")}</p>
              <p className="header__subtext">244.84M</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-globe"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text2")}</p>
              <p className="header__subtext">875.76KM2</p>
            </div>
            </li>
            <li className="header__item">
            <i class="fa-solid fa-house"></i>
            <div className="header__box">
              <p className="header__text">{t("header.text3")}</p>
              <p className="header__subtext">$490.000</p>
            </div>
            </li>
            <Button title={t("header.btn2")} wh={"170px"} ht={"45px"} />
            
          </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Header