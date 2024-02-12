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
import WrapperScale from "./WrapperScale";

const { REACT_APP_URL_API } = process.env;

const CHor = ({
  nomPul,
  type,
  link,
  file,
  id,
  passState,
  passStateAmount,
  passColapse,
}) => {
  const { jury } = useSelector((store) => store.jury);
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  const [amount1, setAmount1] = useState(false);
  const [amount2, setAmount2] = useState(false);
  const [amount3, setAmount3] = useState(false);
  const [amount4, setAmount4] = useState(false);
  const [amount5, setAmount5] = useState(false);
  const [amount6, setAmount6] = useState(false);

  const [totalAmount, setTotalAmount] = useState(NaN);

  useEffect(() => {
    const total_amount =
      parseInt(amount1) +
      parseInt(amount2) +
      parseInt(amount3) +
      parseInt(amount4) +
      parseInt(amount5) +
      parseInt(amount6);
    setTotalAmount(total_amount);
    passStateAmount(total_amount);
  }, [amount1, amount2, amount3, amount4, amount5, amount6]);

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

  const checkHandler = () => {
    if (isNaN(totalAmount)) {
      return toast.error("Проставьте все оценки");
    } else {
      setStatus("Проверено");
      dispatch(check({ amount: totalAmount, orderId: id, juryId: jury._id }));
      passState(false);
    }
  };
  return (
    <WrapperScale>
      <div className="panel">
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
        <p className="scale">ШКАЛА ОЦЕНОК:</p>
        <p>ярко выражено - 5 баллов</p>
        <p>на достаточном уровне - 4 балла</p>
        <p>слабо вырадено - 3 балла</p>
        <p>очень слабо - 2 балла</p>
      </div>
      <div className="list2">
        <div className="in">
          <p>
            Техника исполнения: правильное использование движений для выражения
            основной мысли хореографического произведения
          </p>
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
          <p>
            Качество исполнения (объем, качество движений, проученность
            движений)
          </p>
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
          <p>
            Композиция танца: перемещение по площадке, выбор танцевальных
            элементов, фигуры танца, рациональное использование танцевальной
            площадки, взаимодействие танцоров друг с другом.
          </p>
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
            Имидж: контакт со зрителем, реквизит, артистизм, костюм,
            самопрезентация, наличие поклона, уход со сцены  
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
            Качество записи (со штатива, правильное освещение, хорошая
            фонограмма и т.п.)
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
          <p>
            Соответствие движений национальному колориту танца, следование его
            особенностям и традициям{" "}
          </p>
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
      </div>
      <div className="actions2">
        <Button text="РАБОТА ПРОВЕРЕНА" onClick={checkHandler} />
        <p className="collapse" onClick={() => passColapse(false)}>
          СВЕРНУТЬ
        </p>
        {!isNaN(totalAmount) && <p className="amount">{totalAmount}</p>}
      </div>
    </WrapperScale>
  );
};

export default CHor;
