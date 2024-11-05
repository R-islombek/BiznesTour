import './Navbar.css'
import logo from './Navbar.img/logo.svg';
import React from 'react';
import {useTranslation} from 'react-i18next'



function Navbar() {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event)

  }

  return (
    <div className="navbar">
        <div className="container navbar__container">
           <a className="navbar__link-logo" href="/"><img className="navbar__img" src={logo} alt="logo"/></a>
           <nav className="navbar__nav">
  <a className="navbar__link" href="/">{t("navbar.home")}</a>
  <a className="navbar__link" href="#About">{t("navbar.about")}</a>
  <a className="navbar__link" href="#Tours">{t("navbar.tour")}</a>
  <a className="navbar__link" href="#Contacts">{t("navbar.contact")}</a>
           </nav>
           <div className="navbar__box">
               <button onClick={()=>handleChange('uz')}   className="navbar__btn">UZ</button>
               <button onClick={()=>handleChange('en')}  className="navbar__btn">ENG</button>
               <button onClick={()=>handleChange('ru')}   className="navbar__btn">RU</button>
               <a className="navbar__sublink" href="https://t.me/zamonbiznestour"><i class="fa-brands fa-telegram"></i></a>
               <a className="navbar__sublink" href="https://www.instagram.com/zamontour"><i class="fa-brands fa-instagram"></i></a>
           </div>
        </div>
    </div>
  )
}

export default Navbar

