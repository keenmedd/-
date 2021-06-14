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
      <button className="details_button"> 
        <div className="details_text">Закрыть</div>
      </button>
     <div className="text_title">
         <p>Вы можете поблагодарить доктора</p>
         </div>
          <div className="text_subtitle">
         <p>Врач получит сумму в денежном эквиваленте</p>
         </div>
   
     <div className="circle__container">
      <div className="circle_1">
      <div className="text__container"></div>
            <div className="text_1">
              <p>2р</p></div></div>
     
     <div className="circle_2">
            <div className="text_2">
              <p>5р</p></div></div>
     
     <div className="circle_3">

    
     <div className="text_3">
       <p>?р</p></div>
     </div>
     </div>
       <div className="text">Ввести другую сумму</div>
                
    <button className="rectengle"> 
        <div className="details_text_1">Продолжить</div>
      </button>
     </div>
     </div>
     
</div>
 );
    }
  