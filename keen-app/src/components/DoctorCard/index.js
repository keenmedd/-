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
  image,
  id
}) {
  return (
    <div className="doctor_card">
      <button className="details_button">
        <div className="rectangle"></div>
        <Link to={`${routes.doctor}/${id}`} className="details_text">
          Подробнее
        </Link>
        {/* <div className="details_text">Подробнее</div> */}
      </button>

      <div className="favorite_icon">
        <div className="icon"></div>
      </div>
      <img className="doctor_photo" src={image} alt={name}></img>
      <div className="group">
        <div className="rating_image">
          <div className="rating_number">{rating}</div>
          <div className="feedback_number">{feedbackAmount}</div>
          <div className="percent_number">{secondaryVisitPercent}%</div>
        </div>
      </div>
      <p className="doctor_description description">
        {speciality} {category}
        <br></br>Опыт работы: {experience}
        <br></br>
        {city} {workplace}
      </p>
      <div className="doctor_name">{name}</div>
    </div>
  );
}
