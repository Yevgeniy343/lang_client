import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai";
import { orderModalHandler } from "../../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";
import FileDownload from "js-file-download";
import Axios from "axios";
import ChildrenOrder from "./ChildrenOrder";

const { REACT_APP_URL_API } = process.env;

const UserModalOrder = () => {
  const { isOrderModal, currentOrder } = useSelector((store) => store.user);
  const [choose, setChoose] = useState();
  const dispatch = useDispatch();

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${currentOrder.pdf}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, currentOrder.pdf);
    });
  };

  return (
    <Wrapper>
      <div className="modal">
        <div
          className="close"
          onClick={() => dispatch(orderModalHandler(false))}
        >
          <AiOutlineClose />
        </div>
        <div className="name">
          <p>{currentOrder.name}</p>
        </div>
        <div className="date">
          <p>Дата проведения:</p>
          <p>
            {" "}
            {currentOrder.date1} - {currentOrder.date2}
          </p>
        </div>
        <div className="date">
          <p>Побликация результатов на сайте:</p>
          <p>дата</p>
        </div>
        <div className="date">
          <p>Скачивание наградных документов в личном кабинете:</p>
          <p>дата</p>
        </div>
        <div className="description">
          <p className="desc-header">
            Перед тем, как принять участие в конкурсе, изучите положение{" "}
          </p>
          <p>{currentOrder.description}</p>
        </div>
        <div className="file" onClick={downloadHandler}>
          <AiOutlineFilePdf />
          <p>ПОЛОЖЕНИЕ</p>
        </div>
        <div className="choose">
          <div className="choose1">
            <p className="notice">
              Заполняется в конкурсах для детей и молодежи
            </p>
            <p
              className={
                choose === "adult" ? "active choose-button" : "choose-button"
              }
              onClick={() => setChoose("adult")}
            >
              Участник-ребёнок или молодёжь
            </p>
          </div>
          <div className="choose1">
            <p className="notice">Заполняется в конкурсах для педагогов</p>
            <p
              className={
                choose === "child" ? "active choose-button" : "choose-button"
              }
              onClick={() => setChoose("child")}
            >
              Участник-взрослый (педагог)
            </p>
          </div>
        </div>
        <ChildrenOrder />
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;
  .modal {
    overflow-x: hidden;
    background-color: white;
    width: 95vw;
    height: 90%;
    overflow-y: auto;
    border-radius: 10px;
    padding: 0.5rem 2rem;
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
  .choose {
    display: flex;
    justify-content: center;
    align-items: center;
    .choose1 {
      height: 50px;
      .notice {
        font-size: 0.9rem;
        height: 50px;
        margin-top: 1rem;
      }
      .choose-button {
        display: flex;
        align-items: center;
        background-color: var(--gray-0);
        font-size: 1rem;
        cursor: pointer;
        height: 100%;
        width: 100%;
        justify-content: center;
        margin-right: 0.5rem;
        padding-left: 0.5rem;
        transition: var(--transition2);
        :hover {
          background-color: var(--main-1);
          color: white;
        }
      }
      .active {
        background-color: var(--main-0);
        color: white;
      }
    }
  }

  .name {
    margin: 1rem;
    display: flex;
    justify-content: center;
    p {
      color: var(--main-0);
      font-size: 1.3rem;
    }
  }
  .date {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc-header {
      font-style: italic;
      margin-bottom: 1rem;
    }
  }
  .file {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
      transition: var(--transition2);
      color: var(--main-0);
    }
    svg {
      margin: 0.5rem;
      font-size: 2rem;
      color: var(--main-0);
      transition: var(--transition2);
    }
    :hover {
      svg {
        color: var(--main-1);
      }
      p {
        color: var(--main-1);
      }
    }
  }
  @media (min-width: 576px) {
    .choose {
      .choose1 {
        .notice {
          height: max-content;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .choose {
      display: flex;
      justify-content: space-around;
      .choose1 {
        .choose-button {
          font-size: 1.3rem;
        }
      }
    }
    .date {
      flex-direction: row;
      justify-content: flex-start;
      p {
        margin-right: 1rem;
      }
    }
  }
  @media (min-width: 992px) {
    .modal {
      width: 680px;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default UserModalOrder;
