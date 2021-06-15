import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../consts";

export default function DoctorCard({
            name,
            speciality,
            category,
            experience,
            workplace,
            city,
            rating,
            feedbackAmount,
            secondaryVisitPercent,
            image
  }) {
    return (
<div className="doctor_card">
    <button className="details_button">
      <div className="rectangle">
      </div>
      <Link to={routes.doctor} className="details_text">
      Подробнее
      </Link>
      {/* <div className="details_text">Подробнее</div> */}
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
    <img src={image} alt=""/>
      <p className="likes_counter counter">{rating}</p>
      <p className="msg_counter counter">{feedbackAmount}</p>
      <p className="msg_counter counter">{secondaryVisitPercent}%</p>
      <p className="doctor_description description">Специальность: {speciality} {category}<br></br>Опыт работы: {experience}<br></br>{city} {workplace}</p>
    <div className="doctor_name">{name}</div>
  </div>
    );
}