import './Slidercard.css'
import Button from '../Button/Button'
import { t } from 'i18next'

function Slidercard({img,title,number,subtitle}) {
  

  return (
    <div className="Slidercard">
        <img className="Slidercard__img" src={img} alt=""/>
        <ul className="Slidercard__list">
            <li className="Slidercard__item">
  <h2 className="Slidercard__title">{title}</h2>
  <p className="Slidercard__num">{number}</p>
            </li>
            <li className="Slidercard__item">
            <i class="fa-solid fa-users"></i>
  <p className="Slidercard__text">{t("slidercard.title")}</p>
  <p className="Slidercard__text">{t("slidercard.name")}</p>
            </li>
            <hr className="Slidercard__hr"/>
            <li className="Slidercard__item">
  <p className="Slidercard__subtext">{subtitle}</p>
            </li>
            <li className="Slidercard__item">
               <i class="fa-solid fa-car"></i>
  <p className="Slidercard__text"> {t("slidercard.text1")}</p>
            </li>
            <li className="Slidercard__item">
            <i class="fa-solid fa-plane"></i>
                <p className="Slidercard__text"> {t("slidercard.text2")}</p>
            </li>
            <li className="Slidercard__item">
            <i class="fa-solid fa-building"></i>
                <p className="Slidercard__text"> {t("slidercard.text3")}</p>
            </li>
            <Button title={t("slidercard.btn")} wh={"210px"} ht={"45px"}/>
        </ul>
    </div>
  )
}

export default Slidercard