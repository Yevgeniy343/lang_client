import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { isChildOrderHandler } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components-special/Input";
import TextArea from "../../components/TextArea";
import _ from "lodash";
import Button from "../../components-special/Button";
import moment from "moment";
import ruLocale from "moment/locale/ru";
import {
  editChildrenOrder,
  editStausOrder,
  getReasons,
} from "../../features/adminSlice";
import FileDownload from "js-file-download";
import Axios from "axios";
import toast from "react-hot-toast";

const { REACT_APP_URL_API } = process.env;

const AdminEditChildOrder = () => {
  moment.locale("ru", ruLocale);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReasons());
  }, []);

  const { currentChildOrder, childOrders, events, reasons } = useSelector(
    (store) => store.admin
  );

  const [state, setState] = useState();

  if (state === "Одобрить") {
    toast.success("Заявка одобрена");
  }

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const thisOrder = childOrders.find(
    (order) => order._id === currentChildOrder
  );

  // const thisEvent = events.find((ev) => ev._id === thisOrder.eventId);

  const initialState = {
    name: thisOrder?.name,
    subject: thisOrder?.subject,
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
  const formattedDate = moment(thisOrder?.createdAt).format("lll");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editChildrenOrder({
        orderId: currentChildOrder,
        name: values.name,
        name2: values.name2,
        name3: values.name3,
        tarif: values.tarif,
        part: values.part,
        curatorsAmount: values.curatorsAmount,
        cur: values.cur,
        age: values.age,
        subject: values.subject,
        punct: values.punct,
        graduate: values.graduate,
        nomPul: values.nomPul,
        language: values.language,
        language2: values.language2,
        link: values.link,
        email: values.email,
        phone: values.phone,
        extra1: values.extra1,
        extra2: values.extra2,
        extra3: values.extra3,
        decline: "",
      })
    );
    setState("");
  };

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${thisOrder.file}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, thisOrder.file);
    });
  };

  const declineHandler = (e) => {
    e.preventDefault();
    if (!values.decline) {
      toast.error("Введите причину отказа");
      return;
    } else {
      dispatch(
        editStausOrder({
          status: "declined",
          orderId: currentChildOrder,
          decline: values.decline,
          email: values.email,
        })
      );
      toast.success("Заявка отклонена !");
      setTimeout(() => {
        dispatch(isChildOrderHandler(false));
      }, 1000);
    }
  };

  const okHandler = () => {
    dispatch(editStausOrder({ status: "ok", orderId: currentChildOrder }));
    setState("Одобрена");
    toast.success("Заявка одобрена !");

    setTimeout(() => {
      dispatch(isChildOrderHandler(false));
    }, 1000);
  };

  const handleDecline = (reason) => {
    setValues((prevState) => {
      return {
        ...prevState,
        decline: reason,
      };
    });
  };

  return (
    <Wrapper>
      <div className="modal">
        <div className="close">
          <div
            className="close"
            onClick={() => dispatch(isChildOrderHandler(false))}
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="panel">
          <Button text="К заявке" onClick={() => setState("")} />
          {thisOrder?.status === "pending" && (
            <Button text="Одобрить" onClick={okHandler} />
          )}

          {thisOrder?.status === "pending" && (
            <Button
              text="Отказать в одобрении"
              onClick={() => setState("Отказать в одобрении")}
            />
          )}
          <Button
            text="Редактировать"
            onClick={() => setState("Редактировать")}
          />
        </div>

        {state === "Отказать в одобрении" && (
          <div className="decline">
            <label>
              <span>*</span>
              Причина отказа
            </label>
            <TextArea
              type="text"
              name="decline"
              value={values.decline}
              onChange={changeHandler}
            />
            <div className="actions">
              <Button text="Отказать" onClick={declineHandler} />
            </div>
            <div className="reasons">
              {reasons.map((r) => (
                <p onClick={(e) => handleDecline(e.target.textContent)}>
                  {r.reason}
                </p>
              ))}
            </div>
          </div>
        )}

        {state !== "Отказать в одобрении" && state !== "Редактировать" && (
          <div className="info">
            <div className="element">
              <p className="key">Номинация</p>
              <p className="value">{initialState?.nomPul}</p>
            </div>
            <div className="element">
              <p className="key">Тариф</p>
              <p className="value">{initialState?.tarif}</p>
            </div>
            <div className="element">
              <p className="key">Фамилия и имя конкурсанта</p>
              <p className="value">{initialState?.name}</p>
            </div>
            <div className="element">
              <p className="key">Возрастная категория</p>
              <p className="value">{initialState?.age}</p>
            </div>
            <div className="element">
              <p className="key">Ссылка на работу</p>
              <p className="value">
                <a href={initialState?.link} target="_blank">
                  {initialState?.link}
                </a>
              </p>
            </div>
            {thisOrder?.file && (
              <div className="element">
                <p className="key">Работа</p>
                <p className="value link" onClick={downloadHandler}>
                  скачать
                </p>
              </div>
            )}
            {thisOrder?.file2 && (
              <div className="element">
                <p className="key">Квитанция</p>
                <p className="value link" onClick={downloadHandler}>
                  скачать
                </p>
              </div>
            )}
            <div className="element">
              <p className="key">Субъект Российской Федерации</p>
              <p className="value">{initialState?.subject}</p>
            </div>
            <div className="element">
              <p className="key">Населенный пункт</p>
              <p className="value">{initialState?.punct}</p>
            </div>

            <div className="element">
              <p className="key">Наименование учебного заведения</p>
              <p className="value">{initialState?.graduate}</p>
            </div>
            {initialState?.language && (
              <div className="element">
                <p className="key">Язык работы</p>
                <p className="value">{initialState?.language}</p>
              </div>
            )}
            {initialState?.language2 && (
              <div className="element">
                <p className="key">Язык работы</p>
                <p className="value">{initialState?.language2}</p>
              </div>
            )}
            <div className="element">
              <p className="key">Количество кураторов</p>
              <p className="value">{initialState?.curatorsAmount}</p>
            </div>
            <div className="element">
              <p className="key">Информация по кураторам</p>
              <p className="value">{initialState?.cur}</p>
            </div>
            <div className="element">
              <p className="key">email</p>
              <p className="value">{initialState?.email}</p>
            </div>
            <div className="element">
              <p className="key">телефон</p>
              <p className="value">{initialState?.phone}</p>
            </div>
            <div className="element">
              <p className="key">Фамилия и имя второго конкурсанта</p>
              <p className="value">{initialState?.name2}</p>
            </div>
            <div className="element">
              <p className="key">Фамилия и имя третьего конкурсанта</p>
              <p className="value">{initialState?.name3}</p>
            </div>
            <div className="element">
              <p className="key">Дополнительное поле 1</p>
              <p className="value">{initialState?.extra1}</p>
            </div>
            <div className="element">
              <p className="key">Дополнительное поле 2</p>
              <p className="value">{initialState?.extra2}</p>
            </div>
            <div className="element">
              <p className="key">Дополнительное поле 3</p>
              <p className="value">{initialState?.extra3}</p>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit}>
          {state === "Редактировать" && (
            <div>
              <div className="content">
                <div className="in in2">
                  <p>id заявки: {thisOrder?.number}</p>
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
                  <label>Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>Телефон</label>
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
                  <label>Дополнительное поле 2</label>
                  <Input
                    type="text"
                    name="extra2"
                    value={values.extra2}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>Дополнительное поле 3</label>
                  <Input
                    type="text"
                    name="extra3"
                    value={values.extra3}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="actions">
                <Button text="Сохранить" type="submit" />
              </div>
            </div>
          )}
        </form>
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
  .element {
    display: flex;
    p {
      margin: 0.5rem 0.3rem;
    }

    .value {
      color: var(--main-0);
      word-break: break-all;
    }
  }
  .link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .curators {
    display: flex;
    flex-direction: column;
  }
  .panel {
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .info {
    margin: 1rem;
  }
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
  span {
    color: var(--clr-red-dark);
  }
  .reasons {
    p {
      margin: 0.5rem;
      border: 1px dotted var(--main-0);
      padding: 0.5rem;
      transition: 1s;

      :hover {
        background: var(--declined-1);
        border: 1px solid var(--main-0);
        cursor: pointer;
      }
      :active {
        border: 1px dotted var(--main-0);
      }
    }
  }
  textarea {
    height: 150px;
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
export default AdminEditChildOrder;
