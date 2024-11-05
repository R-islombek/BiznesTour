import './Main.css'
import dubai from './Main.img/dubai.jpg'
import antali from './Main.img/antali.jpg'
import sharmshaix from './Main.img/sharmshaix.jpg'
import istanbul from './Main.img/istanbul.jpg'
import Button from '../Button/Button'
import { t } from 'i18next'

function Main() {
  

  return (
    <div className="main">
      <div className="container">
  <h1 className="main__title">{t("main.title")}</h1>
  <p className="main__text">{t("main.text1")}</p>
        <ul className="main__list">
          <li className="main__item">
            <img className="main__img" src={dubai} alt="dubay"/>
            <div className="main__wrap">
              <div className="main__box">
                <span>
  <h2 className="main__subtitle">{t("main.name1")}</h2>
  <p className="main__text">{t("main.text2")}</p>
                </span>
                <Button title={t("main.btn")} wh={"150px"} ht={"40px"}/>
              </div>
  <p className="main__text">{t("main.text3")}</p>
              <hr className="main__hr"/>
              <div className="main__box">
                <div className="main__wrapper">
                <i class="fa-solid fa-user"></i>
  <p className="main__text">8.66 {t("main.text4")}</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-globe"></i>
                <p className="main__text"> 41.290 km2</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-house"></i>
                <p className="main__text">  $1.100.200</p>
                </div>
              </div>
              <hr className="main__hr"/>
              <a className="main__link" href="#Contact">{t("main.link")}<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </li>
          <hr className="main__hr"/>
          <li className="main__item">
            <img className="main__pic" src={antali} alt="dubay"/>
            <div className="main__wrap">
              <div className="main__box">
                <span>
  <h2 className="main__subtitle">{t("main.name2")}</h2>
  <p className="main__text">{t("main.text5")}</p>
                </span>
                <Button title={t("main.btn")} wh={"150px"} ht={"40px"}/>
              </div>
              <p className="main__text">{t("main.text6")}.</p>
              <hr className="main__hr"/>
              <div className="main__box">
                <div className="main__wrapper">
                <i class="fa-solid fa-user"></i>
  <p className="main__text">44.48 {t("main.text4")}</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-globe"></i>
                <p className="main__text"> 275.400 km2</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-house"></i>
                <p className="main__text">$946.000</p>
                </div>
              </div>
              <hr className="main__hr"/>
              <a className="main__link" href="#Contact">{t("main.link")}<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </li>
          <hr className="main__hr"/>
          <li className="main__item">
            <img className="main__img" src={sharmshaix} alt="dubay"/>
            <div className="main__wrap">
              <div className="main__box">
                <span>
  <h2 className="main__subtitle">{t("main.name3")}</h2>
  <p className="main__text">{t("main.text7")}</p>
                </span>
                <Button title={t("main.btn")} wh={"150px"} ht={"40px"}/>
              </div>
  <p className="main__text"> {t("main.text8")}</p>
              <hr className="main__hr"/>
              <div className="main__box">
                <div className="main__wrapper">
                <i class="fa-solid fa-user"></i>
  <p className="main__text"> 67.41 {t("main.text4")}</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-globe"></i>
                <p className="main__text"> 551.500 km2</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-house"></i>
                <p className="main__text"> $425.600</p>
                </div>
              </div>
              <hr className="main__hr"/>
              <a className="main__link" href="#Contact">{t("main.link")} <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </li>
          <hr className="main__hr"/>
          <li className="main__item">
            <img className="main__img" src={istanbul} alt="dubay"/>
            <div className="main__wrap">
              <div className="main__box">
                <span>
  <h2 className="main__subtitle">{t("main.name4")}</h2>
  <p className="main__text">{t("main.text9")}</p>
                </span>
                <Button title={t("main.btn")} wh={"150px"} ht={"40px"}/>
              </div>
  <p className="main__text">{t("main.text10")}</p>
              <hr className="main__hr"/>
              <div className="main__box">
                <div className="main__wrapper">
                <i class="fa-solid fa-user"></i>
  <p className="main__text"> 67.41 {t("main.text4")}</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-globe"></i>
                <p className="main__text"> 551.500 km2</p>
                </div>
                <div className="main__wrapper">
                <i class="fa-solid fa-house"></i>
                <p className="main__text"> $655.600</p>
                </div>
              </div>
              <hr className="main__hr"/>
              <a className="main__link" href="#Contact">{t("main.link")}<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </li>


        </ul>


      </div>
  
    </div>
  )
}

export default Main