import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { rootApiUrl } from "../../consts";

export default function DoctorsPage() {
  const filters = useState({ searchQuery: "" });
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(async() => {
    if (!doctorsList) {
      //вот так посылать АПИ запрос
      const response = await axios({
        method: "GET",
        url: `${rootApiUrl}/doctor?name=${filters.searchQuery}`,
      });
      setDoctorsList(response.data);
    }
  }, []);

  return (
    <div className="patients__container">
      <Header />

      <div className="doctor_list">
        {/* {doctorsList
          ? doctorsList.map((doctor) => <DoctorCard name={doctor.name} />)
          : "Nope"} */}
      </div>

      <div className="patients_paginaton">
        {" "}
        Всего результатов <b>20</b>, отображены с <b>1</b> по <b>5</b>.
        Страницы: <b>1</b> 2 3{" "}
      </div>
    </div>
  );
}
