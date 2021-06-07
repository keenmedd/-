import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { fetchDoctors } from "../../reducers/doctorSlice";

export default function DoctorsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchQuery = useSelector((state) => state.doctor.searchQuery);

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchDoctors({ searchQuery }));
    }
  }, []);

  return (
    <div className="home__container">
      <Header />
    </div>
  );
}
