import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FileDownload from "js-file-download";
import Axios from "axios";
import CheckboxAmount from "../components-special/CheckboxAmount";
import toast from "react-hot-toast";
import { check } from "../features/jury/jurySlice";
import Button from "../components-special/Button";
import { amount } from "../data/data-order";
import { useDispatch, useSelector } from "react-redux";

const { REACT_APP_URL_API } = process.env;

const CVid = ({ nomPul, type, link, file, id }) => {
  const { jury } = useSelector((store) => store.jury);
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  const [amount1, setAmount1] = useState(false);
  const [amount2, setAmount2] = useState(false);
  const [amount3, setAmount3] = useState(false);
  const [amount4, setAmount4] = useState(false);
  const [amount5, setAmount5] = useState(false);
  const [amount6, setAmount6] = useState(false);
  const [amount7, setAmount7] = useState(false);
  const [totalAmount, setTotalAmount] = useState(NaN);

  useEffect(() => {
    const total_amount =
      parseInt(amount1) +
      parseInt(amount2) +
      parseInt(amount3) +
      parseInt(amount4) +
      parseInt(amount5) +
      parseInt(amount6) +
      parseInt(amount7);
    setTotalAmount(total_amount);
  }, [amount1, amount2, amount3, amount4, amount5, amount6, amount7]);

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${file}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, file);
    });
  };

  const amountHandler1 = (a) => {
    setAmount1(a);
  };
  const amountHandler2 = (a) => {
    setAmount2(a);
  };
  const amountHandler3 = (a) => {
    setAmount3(a);
  };
  const amountHandler4 = (a) => {
    setAmount4(a);
  };
  const amountHandler5 = (a) => {
    setAmount5(a);
  };
  const amountHandler6 = (a) => {
    setAmount6(a);
  };
  const amountHandler7 = (a) => {
    setAmount7(a);
  };
  const checkHandler = () => {
    if (isNaN(totalAmount)) {
      return toast.error("Проставьте все оценки");
    } else {
      setStatus("Проверено");
      dispatch(check({ amount: totalAmount, orderId: id, juryId: jury._id }));
    }
  };
  return (
    <Wrapper>
      <div className="panel">
        <p>{nomPul}</p>
        <p>{type}</p>
        <a href={link} target="blank">
          ссылка: {link}
        </a>
        {file && (
          <p className="value link" onClick={downloadHandler}>
            скачать работу
          </p>
        )}
      </div>
      <div className="list">
        <p>Шкала оценок:</p>
        <p>ярко выражено - 5 баллов</p>
        <p>на достаточном уровне - 4 балла</p>
        <p>слабо вырадено - 3 балла</p>
        <p>очень слабо - 2 балла</p>
      </div>
      <div className="list2">
        <div className="in">
          <p>Соответствие теме конкурса</p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler1}
            indicator={amount1}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler1}
            indicator={amount1}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler1}
            indicator={amount1}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler1}
            indicator={amount1}
            label="2"
          />
        </div>
        <div className="in">
          <p>Качество видео (звук, статичность камеры, высокое разрешение)</p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler2}
            indicator={amount2}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler2}
            indicator={amount2}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler2}
            indicator={amount2}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler2}
            indicator={amount2}
            label="2"
          />
        </div>
        <div className="in">
          <p>Уровень владения языком, правильное литературное произношение</p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler3}
            indicator={amount3}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler3}
            indicator={amount3}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler3}
            indicator={amount3}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler3}
            indicator={amount3}
            label="2"
          />
        </div>
        <div className="in">
          <p>
            Исполнительский уровень актеров: дикция, постановка логического
            ударения, соблюдение нужной интонации
          </p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler4}
            indicator={amount4}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler4}
            indicator={amount4}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler4}
            indicator={amount4}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler4}
            indicator={amount4}
            label="2"
          />
        </div>
        <div className="in">
          <p>
            Выражение личного отношения, артистизм, яркость художественных
            образов, применение выразительных средств (мимики, жестов, движений)
          </p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler5}
            indicator={amount5}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler5}
            indicator={amount5}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler5}
            indicator={amount5}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler5}
            indicator={amount5}
            label="2"
          />
        </div>
        <div className="in">
          <p>Декорации, антураж</p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler6}
            indicator={amount6}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler6}
            indicator={amount6}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler6}
            indicator={amount6}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler6}
            indicator={amount6}
            label="2"
          />
        </div>
        <div className="in">
          <p>Общий бал</p>
        </div>
        <div className="in">
          <CheckboxAmount
            passState={amountHandler7}
            indicator={amount7}
            label="5"
          />
          <CheckboxAmount
            passState={amountHandler7}
            indicator={amount7}
            label="4"
          />
          <CheckboxAmount
            passState={amountHandler7}
            indicator={amount7}
            label="3"
          />
          <CheckboxAmount
            passState={amountHandler7}
            indicator={amount7}
            label="2"
          />
        </div>
      </div>
      <div className="actions">
        <p className="amount">{totalAmount}</p>
        <Button
          text="Оценить"
          onClick={checkHandler}
          //   disabled={status === "Проверено" ? true : false}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;

export default CVid;