import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { routes } from "../../consts";
import { fetchPatients } from "../../reducers/patientsSlice";

export default function PatientsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchQuery = useSelector((state) => state.patient.searchQuery);

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchPatients({ searchQuery }));
    }
  }, []);

  return (
    <body>
    <div className="patients__container">
    <Header />
  
    <div className="doctor_list"> 
      <div className="doctor_card">
        <button className="details_button">
          <div className="rectangle">
          </div>
          <div className="details_text">Подробнее</div>
        </button>
        <div claclassNamess="message_icon">
          <div className="subtruct">
            <div className="icon"></div>
            <div className="vector"></div>
          </div>
        </div>
        <div className="favorite_icon">
          <div className="icon"></div>
        </div>
        <div className="doctor_photo"></div>
          <p className="likes_counter counter">168</p>
          <p className="msg_counter counter">100</p>
          <p className="doctor_description description">Врач-терапевт высшей категории <br></br> 7 лет стажа <br></br>г. Минск 10 поликлиника</p>
        <div className="doctor_name">Иванова Иванна Ивановна</div>
      </div>
    </div>  
        
  
    <div className="patients_paginaton"> Всего результатов <b>20</b>, отображены с <b>1</b> по <b>5</b>. Страницы: <b>1</b> 2 3 </div>
    </div>
    </body> 
  );
}
