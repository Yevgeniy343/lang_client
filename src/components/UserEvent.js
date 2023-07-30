import React from "react";
import styled from "styled-components";
import Button from "../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  orderModalHandler,
  currentOrderHandler,
} from "../features/user/userSlise";

const { REACT_APP_URL_API } = process.env;

const UserEvent = ({
  name,
  date1,
  date2,
  image,
  pdf,
  childNom_1,
  childNom_2,
  childNom_3,
  childNom_4,
  childNom_5,
  childNom_6,
  childNom_7,
  childNom_8,
  childNom_9,
  childNom_10,
  adultNom_1,
  adultNom_2,
  adultNom_3,
  adultNom_4,
  adultNom_5,
  adultNom_6,
  adultNom_7,
}) => {
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
        childNom_1: childNom_1,
        childNom_2: childNom_2,
        childNom_3: childNom_3,
        childNom_4: childNom_4,
        childNom_5: childNom_5,
        childNom_6: childNom_6,
        childNom_7: childNom_7,
        childNom_8: childNom_8,
        childNom_9: childNom_9,
        childNom_10: childNom_10,
        adultNom_1: adultNom_1,
        adultNom_2: adultNom_2,
        adultNom_3: adultNom_3,
        adultNom_4: adultNom_4,
        adultNom_5: adultNom_5,
        adultNom_6: adultNom_6,
        adultNom_7: adultNom_7,
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
