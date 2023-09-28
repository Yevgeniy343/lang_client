import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import FileDownload from "js-file-download";
import Axios from "axios";
import { motion } from "framer-motion";
import { VscEdit } from "react-icons/vsc";

const { REACT_APP_URL_API } = process.env;

const UserChildOrder = ({ orderId }) => {
  const { events, childOrders } = useSelector((store) => store.user);

  const thisOrder = childOrders.find((child) => child._id === orderId);

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

  return (
    <Wrapper>
      <div className="element">
        <p className="key">Фамилия и имя конкурсанта</p>
        <p className="value">{initialState?.name}</p>
      </div>
      <div className="element">
        <p className="key">Номинация</p>
        <p className="value">{initialState?.nomPul}</p>
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
        <p className="key">Возрастная категория</p>
        <p className="value">{initialState?.age}</p>
      </div>
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
        <p className="key">Вариант участия</p>
        <p className="value">{initialState?.tarif}</p>
      </div>
      {initialState?.name2 && (
        <div className="element">
          <p className="key">Фамилия и имя второго конкурсанта</p>
          <p className="value">{initialState?.name2}</p>
        </div>
      )}
      {initialState?.name3 && (
        <div className="element">
          <p className="key">Фамилия и имя третьего конкурсанта</p>
          <p className="value">{initialState?.name3}</p>
        </div>
      )}
      {initialState?.extra1 && (
        <div className="element">
          <p className="key">Дополнительное поле 1</p>
          <p className="value">{initialState?.extra1}</p>
        </div>
      )}
      {initialState?.extra2 && (
        <div className="element">
          <p className="key">Дополнительное поле 2</p>
          <p className="value">{initialState?.extra2}</p>
        </div>
      )}
      {initialState?.extra3 && (
        <div className="element">
          <p className="key">Дополнительное поле 3</p>
          <p className="value">{initialState?.extra3}</p>
        </div>
      )}
      <motion.div className="edit">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{ duration: 3, delay: 2 }}
          className="icon"
        >
          <VscEdit />
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 410px;
  overflow-y: auto;
  margin: 1rem;
  position: relative;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--main-0);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--main-2);
    border-radius: 5px;
  }
  .info {
    margin: 1rem;
  }
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
  .edit {
    position: sticky;
    bottom: 40px;
    display: flex;
    justify-content: flex-end;
    margin-right: 4rem;
    .icon {
      border: 1px solid var(--main-0);
      border-radius: 50%;
      box-shadow: var(--bsh-1);
      transition: box-shadow 0.6s;
      :hover {
        box-shadow: var(--bsh-2);
      }
      :active {
        box-shadow: var(--bsh-1);
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        color: var(--main-0);
        margin: 0.7rem;
      }
    }
  }
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
export default UserChildOrder;
