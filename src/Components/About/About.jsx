import './About.css'
import afr from './About.img/afr.jpg'
import Button from '../Button/Button'
import plane from './About.img/plane.jpg'
import { t } from 'i18next'

function About() {
  

  return (
    <div className="about" id="About">
      <div className="container">
  <h1 className="about__title">{t("about.title")}</h1>
  <p className="about__text">{t("about.text1")}</p>
        <ul className="about__list">
          <li className="about__item">
            <img className="about__img" src={afr} alt="afr"/>
            <div className="about__wrap">
              <div className="about__box">
              <span>
  <h2 className="about__subtitle">{t("about.name1")}</h2>
  <p className="about__text">{t("about.text2")}</p>
              </span>
              <Button title={t("about.btn")} wh={"170px"} ht={"40px"}/>
              </div>
              <p className="about__text">
              {t("about.text3")}             </p>
            </div>
          </li>
          <hr className="about__hr"/>
          <li className="about__item">
            <img className="about__img" src={plane} alt="afr"/>
            <div className="about__wrap">
              <div className="about__box">
              <span>
              <h2 className="about__subtitle">{t("about.name2")}</h2>
              <p className="about__text">{t("about.text4")}</p>
              </span>
              <Button title={t("about.btn")} wh={"170px"} ht={"40px"}/>
              </div>
              <p className="about__text">
              {t("about.text5")}
              </p>
            </div>
          </li>
          <hr className="about__hr"/>

        </ul>

      </div>
  
    </div>
  )
}

export default About