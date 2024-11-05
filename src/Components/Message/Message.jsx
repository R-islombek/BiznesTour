import './Message.css'
import { message } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { t } from 'i18next';


function Message() {
  const [loading,setloading] = useState(false);
  const sendMessage = (event) =>{
    setloading(true);
    event.preventDefault();
    const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
    const id = -1002022260815;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const guest = document.getElementById("guest").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const destination = document.getElementById("destination").value;
    const visa = document.getElementById("visa").value;
    const textContent = `Name: ${name} \n Guests: ${guest} \n Phone: ${phone} \n Date: ${date} \n Destination: ${destination} \n Visa: ${visa}`
    axios({
      url:url,
      method:'POST',
      data:{
        "chat_id": id,
        "text": textContent,
      }

    })
    .then((res) =>{
      document.getElementById("form").reset();
      message.success("Yuborildi")
    }).catch((error) =>{
      console.log("yuborishda xotilik yuz berdi",error);
      message.error("xatolik")
      console.log(error);
    }).finally(() =>{
      setloading(false);
    })

  }
  

  return (
    <div className="message">
      <div className="container message__container">
        <div className="message__row">
  <h1 className="message__name">{t("message.name1")}</h1>
          <h1 className="message__title">{t("message.title1")}</h1>
          <h1 className="message__name">{t("message.name2")}</h1>
          <h1 className="message__title">{t("message.title2")}</h1>
        </div>
        <form onSubmit={sendMessage} id="form">
          <div className="message__wrap">
          <div className="message__box">
  <label htmlFor="">{t("message.label1")}</label><br/>
            <input type="text" id="name" placeholder="Ex.John Smithee" required/>
          </div>
          <div className="message__box">
            <label htmlFor="">{t("message.label2")}</label><br/>
            <input type="text" id="phone" placeholder="Ex.+99895 55 55 05" required/>
          </div>
          </div>
          <div className="message__wrap">
            <div className="message__box">
              <label htmlFor="">{t("message.label3")}</label><br/>
              <select name="" id="guest" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            <div className="message__box">
              <label htmlFor="">{t("message.label4")}</label><br/>
              <input id="date" type="date" required/>
            </div>
          </div>
          <label htmlFor="">{t("message.label5")}</label><br/>
          <select name="" id="destination" required>
            <option value="Antaliya">Antaliya</option>
            <option value="Antaliya">Turkiya</option>
            <option value="Antaliya">Dubay</option>
            <option value="Antaliya">Avstraliya</option>
            <option value="Antaliya">Shvetsariya</option>
            <option value="Antaliya">Parij</option>
          </select>
          <label htmlFor="">{t("message.label6")}</label><br/>
          <select name="" id="visa" required>
            <option value="Country">Country</option>
            <option value="Country">USA</option>
            <option value="Country">Canada</option>
            <option value="Country">China</option>
            <option value="Country">India</option>
            <option value="Country">Yaponiya</option>
          </select>
  <button className="form__btn" type="submit"loading={loading}>{t("message.btn")}</button>
        </form>
      </div>
  
    </div>
  )
}

export default Message