import axios from "axios";
import React, { useEffect, useState } from "react";
import { rootApiUrl } from "../../consts";
import { useHistory, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import ThankModal from "../ThankModal";
import Header from "../Header";

export default function AddFeedbackModal({ onClose }) {
  const { id } = useParams();
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const [punctuality, setPunctuality] = useState(0);
  const [politeness, setPoliteness] = useState(0);
  const [clearity, setClearity] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [authorName, setAuthorName] = useState("");
  const [visitDate, setVisitDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const [authorNumber, setAuthorNumber] = useState("");
  const [showThankModal, setShowThankModal] = useState(false);

  const sendFeedback = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `${rootApiUrl}/feedback/${id}`,
      });
    } catch {}

    history.goBack();
  };

  return (
    <>
      <Header />
      {showThankModal && (
        <ThankModal
          fromDetails={false}
          onClose={async () => {
            setShowThankModal(false);
            await sendFeedback();
          }}
        />
      )}

      <div className="feedback_modal">
        {/* <div className="button_close" onClick={() => onClose()}>
          Закрыть
        </div> */}
        <div className="text_header_big">Будем рады узнать ваше мнение</div>
        <div className="form">
          <div className="feedback_block">
            <div className="text_header">Ваша общее впечатление</div>
            <ReactStars
              count={5}
              onChange={(e) => setRating(e)}
              size={24}
              value={rating}
            />
          </div>
          <div className="feedback_block">
            <div className="text_header">Пунктуальность</div>
            <ReactStars
              count={5}
              onChange={(e) => setPunctuality(e)}
              size={24}
              value={punctuality}
            />
          </div>
          <div className="feedback_block">
            <div className="text_header">Вежливость и учтивость</div>
            <ReactStars
              count={5}
              onChange={(e) => setPoliteness(e)}
              size={24}
              value={politeness}
            />
          </div>
          <div className="feedback_block">
            <div className="text_header">Понятность назнaчений</div>
            <ReactStars
              count={5}
              onChange={(e) => setClearity(e)}
              size={24}
              value={clearity}
            />
          </div>
          <div className="feedback_block">
            <div className="text_header">
              Это ваш первый прием у этого доктора?
            </div>
            <div className="toggle">
              <div
                className={isFirstVisit ? "toggle_active" : ""}
                onClick={() => setIsFirstVisit(true)}
              >
                Да
              </div>
              <div
                className={!isFirstVisit ? "toggle_active" : ""}
                onClick={() => setIsFirstVisit(false)}
              >
                Нет
              </div>
            </div>
          </div>
          <div className="feedback_block">
            <div className="text_header">
              Имя которое будет указано в отзыве
            </div>
            <input
              type="text"
              value={authorName}
              placeholder="Имя"
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="feedback_block">
            <div className="text_header">Дата приема</div>
            <input
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
            />
          </div>
          <div>
            <div className="text_header">Ваш отзыв</div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>
          <div>
            <div className="text_header">
              Телефон на который будет выслано смс для проверки
            </div>
            <div>
              Мы не сохраним его, он используетс для проверки уникальности
            </div>
          </div>
          <div className="feedback_block">
            <input
              type="text"
              placeholder="Номер телефона"
              value={authorNumber}
              onChange={(e) => setAuthorNumber(e.target.value)}
            />
            <div>Получить код</div>
            <input placeholder="Код" />
          </div>
        </div>
        <div
          className="feedback_button next"
          onClick={() => setShowThankModal(true)}
        >
          Продолжить
        </div>
      </div>
    </>
  );
}
