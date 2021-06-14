import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import PresentCard from "../../components/MainCard";
import { routes } from "../../consts";
//import { changeSearchQuery } from "../../reducers/doctorSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const [searchQuery, setSearchQuery] = useState("");

  // const lookForDoctors = () => {
  //   dispatch(changeSearchQuery(searchQuery));
  //   history.push(routes.doctors);
  // };

  return (
    
    <div className="Home__container"> 
    <Header />
    
    <div className="present">
      <div className="frame_one">
      <div class="textcols">
	<div class="textcols-item">
					</div>
          
	<div class="textcols-item">
  	</div>
		
	<div class="textcols-item">
		
      <button className="details_button"> 
        <div className="details_text">Закрыть</div>
      </button></div>

     <div className="text_title">
         <p>Будем рады узнать ваше мнение</p>
         </div>         
          <div className="text"><p>Ваша общее впечатление</p>
          <div className="imagen"></div></div>       
         <div className="text"><p>Пунктуальность</p>
         <div className="imagen"></div></div>
         <div className="text"><p>Вежливость и учтивость</p>
         <div className="imagen"></div></div>
         <div className="text"><p>Понятность назначений</p>
         <div className="imagen"></div></div>
         <div className="text"><p>Это ваш первый прием у доктора?</p>
         <div className="rectengle">Да<div className="rectengle">Нет</div></div></div>
         <div className="text"><p>Имя которое будет указано в отзыве</p>
         <div class="text-input">
         <input name="Name" placeholder="Имя"></input>
  </div>
  </div>
         <div className="text">Дата приема</div>
         <div class="text-input">
  
1
<input type="date" class="form-control" id="date" name="date" placeholder="Дата" required></input>
  </div>
         <div className="text">Ваш отзыв</div>
         <div class="text-input">
  <input type="text"></input>
  </div>
         <div className="text">Телефон на который будет выслано смс для проверки</div>
         <div className="text_subtitle">Мы не сохраним его, он используетс для проверки уникальности</div>
         <div class="textcols">
	<div class="textcols-item">
  <input name="Name" placeholder="Телефон"></input></div>
          <button className="rectengle"> 
	<div class="textcols-item"><div className="rectengle_1"><div className="details_text_1">Получить код</div></div>
  	</div></button>
	
		
	<div class="textcols-item">
  <input name="Name" placeholder="Код"></input>
			</div>
</div>
     <button className="rectengle"> 
        <div className="details_text_1">Продолжить</div>
      </button>
     </div>
     
     </div>  
</div>
    </div>   
   
  );
    }