import './Contact.css'
import Button from '../Button/Button'
import bgimg from './Contact.img/bgimg.jpg'
import { t } from 'i18next'

function Contact() {
  

  return (
    <div className="contact" id="Contacts" style={{backgroundImage:`url(${bgimg})`}}>
      <div className="container">
  <p className="contact__text">{t("contact.title")}</p>
      <hr className="contact__hr"/>
  <h1 className="contact__title">{t("contact.name")}</h1>
        <Button title={t("contact.btn")} wh={"150px"} ht={"45px"} />
        <ul className="contact__list">
          <li className="contact__item">
          <i class="fa-solid fa-phone"></i>
  <h3 className="contact__subtitle">{t("contact.text1")}</h3>
          <a className="contact__link" href="tel:+998 99 299 99 96">+998 99 299 99 96</a>
          </li>
          <li className="contact__item">
          <i class="fa-solid fa-envelope"></i>
          <h3 className="contact__subtitle">{t("contact.text2")}</h3>
          <a className="contact__link" href="mailto:zamonbiznestour@mail.ru">zamonbiznestour@mail.ru</a>
          </li>
          <li className="contact__item">
          <i class="fa-solid fa-location-dot"></i>
          <h3 className="contact__subtitle">{t("contact.text3")}</h3>
          <a className="contact__link" href="/">15/25, Chilanzar - 9, Tashkent city</a>
          </li>
        </ul>
      </div>
  
    </div>
  )
}

export default Contact