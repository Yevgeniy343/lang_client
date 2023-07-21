import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai";
import { orderModalHandler } from "../../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";
import picture from "../../images/—Pngtree—handwritten question mark_5453243.png";
import FileDownload from "js-file-download";
import Axios from "axios";

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
          <p>дата начала: {currentOrder.date1}</p>
          <p>дата окончания: {currentOrder.date2}</p>
        </div>
        <div className="description">
          <p>Постановление: </p>
          <p>{currentOrder.description}</p>
        </div>
        <div className="file" onClick={downloadHandler}>
          <AiOutlineFilePdf />
          <p>скачать pdf</p>
        </div>
        <div className="choose">
          <p
            className={choose === "adult" ? "active" : null}
            onClick={() => setChoose("adult")}
          >
            заявка на педагога
          </p>
          <p
            className={choose === "child" ? "active" : null}
            onClick={() => setChoose("child")}
          >
            заявка на ребенка
          </p>
        </div>
        <div className="question">
          <p>Выберете тип заявки</p>
          <img src={picture} />
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
    justify-content: space-around;
    height: 50px;
    align-items: center;
    p {
      display: flex;
      align-items: center;
      background-color: var(--gray-0);
      font-size: 1rem;
      cursor: pointer;
      height: 100%;
      width: 100%;
      justify-content: center;
      margin: 0;
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
  .question {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    img {
      width: 200px;
    }
    p {
      font-size: 1.3rem;
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
  .file {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      transition: var(--transition2);
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
  }
  @media (min-width: 768px) {
    .choose {
      display: flex;
      justify-content: space-around;
      p {
        font-size: 1.3rem;
      }
    }
  }
  @media (min-width: 992px) {
    .modal {
      width: 580px;
      padding: 1rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default UserModalOrder;
