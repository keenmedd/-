import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { rootApiUrl } from "../../consts";

export default function ThankModal({ onClose, fromDetails = true }) {
  const { id } = useParams();
  const history = useHistory();
  const [sum, setSum] = useState(0);
  const [anotherSum, setAnotherSum] = useState();

  const sendThank = async () => {
    // const response = await axios({
    //   method: "POST",
    //   url: `${rootApiUrl}/thank`,
    // });
    onClose();
  };

  return (
    <div className="backdrop">
      <div className="thank_modal">
        <div className="text_header_big">Вы можете поблагодарить доктора</div>
        <div className="text_header">
          Врач получит сумму в денежном эквиваленте
        </div>
        <div className="feedback_block">
          <div
            className={`thank_block ${sum == 2 ? "thank_block_active" : ""}`}
          >
            <div className="text_header" onClick={() => setSum(2)}>
              2p
            </div>
          </div>

          <div
            className={`thank_block ${sum === 5 ? "thank_block_active" : ""}`}
          >
            <div className="text_header" onClick={() => setSum(5)}>
              5p
            </div>
          </div>
          <input
            className={`thank_block text_default ${
              sum === anotherSum ? "thank_block_active" : ""
            }`}
            type="text"
            placeholder="? p"
            value={anotherSum}
            onChange={(e) => {
              setAnotherSum(e.target.value);
              setSum(e.target.value);
            }}
          />
        </div>

        <div
          className="feedback_button next"
          onClick={async () => await sendThank()}
        >
          Продолжить
        </div>
        <div className="button_close" onClick={() => onClose()}>
          {fromDetails ? "Закрыть" : "Продолжить без благодарности"}
        </div>
      </div>
    </div>
  );
}
