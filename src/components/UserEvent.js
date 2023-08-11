import React from "react";
import styled from "styled-components";
import Button from "../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  orderModalHandler,
  currentOrderHandler,
} from "../features/user/userSlise";

const { REACT_APP_URL_API } = process.env;

const UserEvent = ({ name, date1, date2, image, pdf, id }) => {
  const { isOrderModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const orderHandler = () => {
    dispatch(orderModalHandler(true));
    dispatch(
      currentOrderHandler({
        name: name,
        date1: date1,
        date2: date2,
        image: image,
        pdf: pdf,
        id: id,
      })
    );
  };

  return (
    <Wrapper>
      <div className="name">
        <p>{name}</p>
      </div>

      <div className="content2">
        <div className="left2">
          <p>{date1}</p>
          <p>{date2}</p>
        </div>
        <div className="right2">
          <img src={`${REACT_APP_URL_API}/${image}`} alt="" />
        </div>
      </div>
      <div className="actives">
        <Button text="Принять участие" onClick={orderHandler} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  box-shadow: var(--dark-shadow);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--main-2);
  transition: var(--transition2);

  .name {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    p {
      color: var(--main-0);
      font-size: 1.3rem;
    }
  }
  .content2 {
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: space-around;

    .left2 {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* height: 100%; */
      p {
        font-size: 1rem;
        margin: 0.5rem;
      }
    }
    .right2 {
      width: 250px;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      margin: 0;
    }
  }

  img {
    height: 150px;
    width: 240px;
  }

  .actives {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: end;
  }
  button {
    transition: var(--transition2);
    padding: 0.5rem 0.8rem;
    :hover {
      box-shadow: var(--dark-shadow2);
    }
    :active {
      box-shadow: none;
    }
  }

  @media (min-width: 576px) {
    width: 450px;
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
