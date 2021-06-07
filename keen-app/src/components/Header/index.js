import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../consts";

export default function Header() {
  return (
    <div className="header__container">
      <Link to={routes.doctors} className="header__link">
        Врачи
      </Link>
      <Link to={routes.home} className="header__logo">
        KEEN MEDD
      </Link>
      <div className="header__link">Отзывы?</div>
    </div>
  );
}
