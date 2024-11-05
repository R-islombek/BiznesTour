import './Footer.css'
import Button from '../Button/Button'
import img from './Footer.img/img.jpg'
import { t } from 'i18next'

function Footer() {
  

  return (
    <div className="footer" style={{backgroundImage:`url(${img})`}}>
      <div className="container">
        <div className="footer__wrap" >
          <div className="footer__box">
  <h1 className="footer__title">{t("footer.title")}</h1>
  <h3 className="footer__name">{t("footer.name")}</h3>
          </div>
          <Button title={t("footer.btn")} wh={"200px"} ht={"45px"}   />
        </div>
      </div>
      <div className="footer__wrapper">
  <a className="footer__link" href="/">{t("footer.text")}</a>
        </div>
    </div>
  )
}

export default Footer