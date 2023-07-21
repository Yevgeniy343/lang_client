import React from "react";
import styled from "styled-components";
import Button from "../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  orderModalHandler,
  currentOrderHandler,
} from "../features/user/userSlise";

const { REACT_APP_URL_API } = process.env;

const UserEvent = ({ name, date1, date2, description, image, pdf }) => {
  const { isOrderModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const orderHandler = () => {
    dispatch(orderModalHandler(true));
    dispatch(
      currentOrderHandler({
        name: name,
        date1: date1,
        date2: date2,
        description: description,
        image: image,
        pdf: pdf,
      })
    );
  };

  return (
    <Wrapper>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="date">
        <p>{date1}</p>
        <p>{date2}</p>
      </div>

      <div className="results">
        <p>публикация результатов</p>
      </div>
      <div className="diploms">
        <p>скачивание дипломов</p>
      </div>
      <div className="image">
        <img src={`${REACT_APP_URL_API}/${image}`} alt="" />
      </div>
      <div className="actives">
        <Button text="Принять участие" onClick={orderHandler} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  box-shadow: var(--dark-shadow);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--main-2);
  transition: var(--transition2);

  /* :hover {
    box-shadow: var(--dark-shadow2);
  } */
  .name {
    p {
      color: var(--main-0);
      font-size: 1.3rem;
    }
  }
  .date {
    margin: 0.5rem 0;
    p {
      color: var(--gray-6);
    }
  }
  img {
    width: 200px;
  }
  .date {
    display: flex;

    justify-content: space-between;
  }
  .actives {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: end;

    /* align-items: end; */
    /* margin: auto; */
  }
  button {
    /* box-shadow: var(--dark-shadow); */
    transition: var(--transition2);
    padding: 0.5rem 0.8rem;
    :hover {
      box-shadow: var(--dark-shadow2);
    }
    :active {
      box-shadow: none;
    }
  }
  .results,
  .diploms {
    margin-bottom: 0.5rem;
    cursor: pointer;
    p {
      transition: var(--transition2);
      font-size: 1rem;
      color: var(--main-0);
      :hover {
        color: var(--main-1);
        text-decoration: underline;
      }
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default UserEvent;
