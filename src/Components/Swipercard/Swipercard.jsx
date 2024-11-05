import './Swipercard.css'
import Button from '../Button/Button'
import { t } from 'i18next'

function Swipercard({img,title,subtitle}) {
  

  return (
    <div className="Swipercard">
    <img className="Swipercard__img" src={img} alt=""/>
    <ul className="Swipercard__list">
        <li className="Swipercard__item">
<h2 className="Swipercard__title">{title}</h2>
        </li>
        <li className="Swipercard__item">
        <i class="fa-solid fa-users"></i>
  <p className="Swipercard__text">{t("swipercard.text1")}</p>
        </li>
        <hr className="Swipercard__hr"/>
        <li className="Swipercard__item">
<p className="Swipercard__subtext">{subtitle}</p>
        </li>
        <li className="Swipercard__item">
        <i class="fa-solid fa-tag"></i>
            <p className="Swipercard__text">{t("swipercard.text2")}</p>
        </li>
        <li className="Swipercard__item">
        <i class="fa-solid fa-clock"></i>
            <p className="Swipercard__text"> {t("swipercard.text3")}</p>
        </li>
        <li className="Swipercard__item">
        <i class="fa-solid fa-check"></i>
            <p className="Swipercard__text"> {t("swipercard.text4")}</p>
        </li>
        <Button title={t("swipercard.btn")} wh={"210px"} ht={"45px"}/>
    </ul>
</div>
  )
}

export default Swipercard