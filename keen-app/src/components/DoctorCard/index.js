import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../consts";

export default function DoctorCard() {
  return (
    <div className="doctor_card">
    <button className="details_button">
      <div className="rectangle">
      </div>
      <div className="details_text">Подробнее</div>
    </button>
    <div className="message_icon">
      <div className="subtruct">
        <div className="icon"></div>
        <div className="vector"></div>
      </div>
    </div>
    <div className="favorite_icon">
      <div className="icon"></div>
    </div>
    <div className="doctor_photo"></div>
      <p className="likes_counter counter">135</p>
      <p className="msg_counter counter">100</p>
      <p className="doctor_description description">Врач-терапевт высшей категории <br></br> 7 лет стажа <br></br>г. Минск 10 поликлиника</p>
    <div className="doctor_name">Иванова Иванна Ивановна</div>
  </div>

  );
}
