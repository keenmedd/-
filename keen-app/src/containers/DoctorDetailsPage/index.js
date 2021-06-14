import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { rootApiUrl } from "../../consts";
import ReactStars from "react-stars";

export default function DoctorDetailsPage() {
  const [doctor, setDoctor] = useState();
  const [feedback, setFeedback] = useState();
  const { id } = useParams();

  useEffect(async () => {
    if (!doctor && id) {
      const response = await axios({
        method: "GET",
        url: `${rootApiUrl}/doctor/${id}`,
      });
      setDoctor(response.data);
    }
    if (!feedback && id) {
      const response = await axios({
        method: "GET",
        url: `${rootApiUrl}/doctor/${id}/feedback`,
      });
      setFeedback(response.data);
    }
  }, []);

  return (
    <div className="patients__container">
      <Header />

      {doctor && (
        <div className="doctor_container">
          <div className="main">
            <img src={doctor.image} />
            <div className="main_info">
              <div className="text_header main_info_name">{doctor.name}</div>
              <div>
                <span className="text_bold">{doctor.speciality} </span>
                <span>{doctor.category}</span>
                <div className="text_bold">
                  {doctor.yearsOfExperience} лет стажа
                </div>
                <div>
                  <span className="text_bold">г. {doctor.city}</span>{" "}
                  <span className="text_bold">{doctor.workplace}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="main_rating_container">
                <div className="main_rating">{doctor.rating}</div>
                <ReactStars
                  count={5}
                  onChange={(e) => console.log(e)}
                  size={24}
                  value={doctor.rating}
                />
              </div>
              <div>
                <span className="text_bold">{doctor.feedbackAmount}</span>{" "}
                отзывов
              </div>
              <div>
                <span className="text_bold">
                  {doctor.secondaryVisitPercent}%{" "}
                </span>
                приходят снова
              </div>

              <div className="feedback_button">Оставить отзыв</div>
              <div className="thank_button">Поблагодарить</div>
            </div>
          </div>

          <section>
            <div className="text_header">Образование</div>
            {doctor.education?.map((item) => (
              <>
                <div>
                  <span className="text_bold">{item.year} </span>
                  <span>{item.authority} </span>
                </div>
                <div>{item.note}</div>
              </>
            ))}
          </section>
          <section>
            <div className="text_header">Опыт работы</div>
            {doctor.workExperience?.map((item) => (
              <div className="block_item">
                <div>
                  <span className="text_bold">
                    {new Date(item.start).toISOString().split("T")[0]}
                  </span>
                  ---
                  <span className="text_bold">
                    {new Date(item.end).toISOString().split("T")[0]}
                  </span>
                </div>
                <div className="text_bold">{item.position}</div>

                <div>{item.workplace}</div>
                <div>
                  {item.competencies?.map((c) => (
                    <div>{c}</div>
                  ))}
                </div>
              </div>
            ))}
          </section>
          <section>
            <div className="text_header">Дополнительная информация</div>
            <div>
              {doctor.extraInfo?.map((info) => (
                <div className="text_bold">{info}</div>
              ))}
            </div>
          </section>
        </div>
      )}

      <div className="block">
        <div className="text_header_big">Отзывы</div>
        <div className="feedback_button">Оставить отзыв</div>
      </div>

      {feedback && (
        <div className="feedback_list">
          {feedback.map((item) => (
            <div className="feedback_item">
              <div className="block">
                <div className="text_header">{item.authorName} </div>
                <ReactStars count={5} size={24} value={item.rating} />
                <div>{item.isFirstVisit ? "Первичный" : "Повторный"} прием</div>
                <div className="text_bold">
                  {new Date(item.visitDate).toISOString().split("T")[0]}
                </div>
              </div>
              <div className="block">
                <div>
                  <div>Пунктуальность</div>
                  <ReactStars count={5} size={24} value={item.punctuality} />
                </div>
                <div>
                  <div>Вежливость и учтивость</div>
                  <ReactStars count={5} size={24} value={item.politeness} />
                </div>
                <div>
                  <div>Понятность назнaчений</div>
                  <ReactStars count={5} size={24} value={item.clearity} />
                </div>
              </div>
              <div>{item.comment}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
