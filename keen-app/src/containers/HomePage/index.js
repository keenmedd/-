import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { routes } from "../../consts";
import { changeSearchQuery } from "../../reducers/doctorSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const lookForDoctors = () => {
    dispatch(changeSearchQuery(searchQuery));
    history.push(routes.doctors);
  };

  return (
    <div className="home__container">
      <Header />

      <div className="home__input__container">
        <input
          className="home__input"
          placeholder="Введите фамилию врача"
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
        />
        <div className="home__input__icon" onClick={() => lookForDoctors()} />
      </div>
    </div>
  );
}
