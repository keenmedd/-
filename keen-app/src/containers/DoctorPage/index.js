import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import DoctorCard from "../../components/DoctorCard";
import { routes } from "../../consts";
import { fetchPatients } from "../../reducers/patientsSlice";

export default function DoctorPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchQuery = useSelector((state) => state.patient?.searchQuery);
  const doctorsList = useSelector((state) => state.patient?.list);

  useEffect(() => {
    if (true) {
      dispatch(fetchPatients({ searchQuery }));
    }
  }, []);

  return (
    
    <div className="patients__container">
    <Header />
  
    <div className="doctor_list"> 
    
    {
      doctorsList?
      doctorsList.map(doctor=>(
        <DoctorCard name={doctor.name}/>)): "Nope"
    }

        
    </div> 
          
    <div className="patients_paginaton"> Всего результатов <b>20</b>, отображены с <b>1</b> по <b>5</b>. Страницы: <b>1</b> 2 3 </div>
    </div>
   
  );
}
