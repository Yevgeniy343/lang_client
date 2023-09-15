import React from "react";
import styled from "styled-components";
import {
  eventModalHandler,
  currentEventHandler,
} from "../../features/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const { REACT_APP_URL_API } = process.env;

const EventItem = ({
  name,
  date1,
  date2,
  image,
  id,
  pdf,
  extra1,
  extra2,
  extra3,
  tarif_1,
  tarif_2,
  tarif_3,
  supervisor,
  tarif_1a,
  tarif_2a,
  tarif_3a,
  diplom,
  index,
}) => {
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(eventModalHandler(true));
    dispatch(
      currentEventHandler({
        name: name,
        date1: date1,
        date2: date2,
        image: image,
        pdf: pdf,
        id: id,
        extra1: extra1,
        extra2: extra2,
        extra3: extra3,
        tarif_1: tarif_1,
        tarif_2: tarif_2,
        tarif_3: tarif_3,
        supervisor: supervisor,
        tarif_1a: tarif_1a,
        tarif_2a: tarif_2a,
        tarif_3a: tarif_3a,
        diplom: diplom,
      })
    );
  };

  return (
    <Wrapper onClick={modalHandler}>
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
  cursor: pointer;
  :hover {
    box-shadow: var(--dark-shadow2);
  }
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

export default EventItem;
