import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { isAdultOrderHandler } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components-special/Input";
import TextArea from "../../components/TextArea";
import _ from "lodash";
import Button from "../../components-special/Button";
import moment from "moment";
import ruLocale from "moment/locale/ru";

const AdminEditAdultOrder = () => {
  moment.locale("ru", ruLocale);
  const dispatch = useDispatch();
  const { currentAdultOrder, adultOrders, events } = useSelector(
    (store) => store.admin
  );

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const thisOrder = adultOrders.find(
    (order) => order._id === currentAdultOrder
  );

  console.log(thisOrder);
  // const thisEvent = events.find((ev) => ev._id === thisOrder.eventId);

  const initialState = {
    name: thisOrder?.name,
    phone: thisOrder?.phone,
    email: thisOrder?.email,
    tarif: thisOrder?.tarif,
    name2: thisOrder?.name2,
    name3: thisOrder?.name3,
    punct: thisOrder?.punct,
    graduate: thisOrder?.graduate,
    language: thisOrder?.language,
    language2: thisOrder?.language2,
    link: thisOrder?.link,
    extra1: thisOrder?.extra,
    extra2: thisOrder?.extra2,
    extra3: thisOrder?.extra3,
    cur: thisOrder?.cur,
    pert: thisOrder?.part,
    age: thisOrder?.age,
    curatorsAmount: thisOrder?.curatorsAmount,
    nomPul: thisOrder?.nomPul,
  };

  const [values, setValues] = useState(initialState);
  const formattedDate = moment(thisOrder.createdAt).format("lll");

  return (
    <Wrapper>
      <div className="modal">
        <div className="close">
          <div
            className="close"
            onClick={() => dispatch(isAdultOrderHandler(false))}
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="content">
          <div className="in in2">
            <p>id заявки: {thisOrder.number}</p>
            <p>созданa: {formattedDate}</p>
          </div>
          <div className="in">
            <label>Фамилия и имя конкурсанта</label>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Возрастная категория</label>
            <Input
              type="text"
              name="age"
              value={values.age}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Cубъект Российской Федерации</label>
            <Input
              type="text"
              name="subject"
              value={values.subject}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Населенный пункт</label>
            <Input
              type="text"
              name="punct"
              value={values.punct}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Наименование учебного заведения</label>
            <Input
              type="text"
              name="punct"
              value={values.graduate}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Номинация</label>
            <Input
              type="text"
              name="nomPul"
              value={values.nomPul}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Язык работы</label>
            <Input
              type="text"
              name="language"
              value={values.language}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Язык работы</label>
            <Input
              type="text"
              name="language2"
              value={values.language2}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Ссылка на работу</label>
            <Input
              type="text"
              name="link"
              value={values.link}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Количество кураторов</label>
            <Input
              type="text"
              name="curatorsAmount"
              value={values.curatorsAmount}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Информация по кураторам</label>
            <TextArea
              type="text"
              name="cur"
              value={values.cur}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>email</label>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>телефон</label>
            <Input
              type="text"
              name="phone"
              value={values.phone}
              onChange={changeHandler}
            />
          </div>

          <div className="in">
            <label>Вариант участия</label>
            <Input
              type="text"
              name="tarif"
              value={values.tarif}
              onChange={changeHandler}
            />
          </div>
          {values.tarif !== "Коллективный" && (
            <div className="in">
              <label>Фамилия и имя второго конкурсанта</label>
              <Input
                type="text"
                name="name2"
                value={values.name2}
                onChange={changeHandler}
              />
            </div>
          )}
          {values.tarif !== "Коллективный" && (
            <div className="in">
              <label>Фамилия и имя третьего конкурсанта</label>
              <Input
                type="text"
                name="name3"
                value={values.name3}
                onChange={changeHandler}
              />
            </div>
          )}

          <div className="in">
            <label>Дополнительное поле 1</label>
            <Input
              type="text"
              name="extra1"
              value={values.extra1}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Дополнительное поле 1</label>
            <Input
              type="text"
              name="extra2"
              value={values.extra2}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <label>Дополнительное поле 1</label>
            <Input
              type="text"
              name="extra3"
              value={values.extra3}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="actions">
          <Button text="Сохранить" disabled={true} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;

  .modal {
    background-color: white;
    width: 95vw;
    height: 90%;
    overflow-y: auto;
    border-radius: 10px;
    padding: 0 2rem;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--main-0);
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--main-2);
      border-radius: 10px;
    }
  }
  .close {
    display: flex;
    justify-content: end;
    margin: 1rem;
    svg {
      font-size: 2rem;
      color: var(--main-0);
      transition: var(--transition2);
      cursor: pointer;
      :hover {
        color: var(--main-1);
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .in {
    width: 250px;
    margin: 0.5rem;
  }
  .in2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dotted var(--main-0);
    p {
      color: var(--main-0);
    }
  }
  label {
    margin-left: 1rem;
  }
  .actions {
    margin: 2rem;
    width: 95%;
    display: flex;
    justify-content: center;
  }
  input {
    height: 40px;
    padding: 0;
  }
  @media (min-width: 576px) {
    .in {
      width: 300px;
      margin: 1rem;
    }
  }
  input {
    height: 50px;
    padding: 1rem;
  }
  @media (min-width: 768px) {
    .in {
      width: 350px;
    }
  }

  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdminEditAdultOrder;
