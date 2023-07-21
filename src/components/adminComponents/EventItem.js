import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import {
  eventModalHandler,
  currentEventHandler,
} from "../../features/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const { REACT_APP_URL_API } = process.env;

const EventItem = ({ name, date1, date2, description, image, id, pdf }) => {
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(eventModalHandler(true));
    dispatch(
      currentEventHandler({
        name: name,
        date1: date1,
        date2: date2,
        description: description,
        image: image,
        pdf: pdf,
        id: id,
      })
    );
  };

  return (
    <Wrapper onClick={modalHandler}>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="date">
        <p>{date1}</p>
        <p>{date2}</p>
      </div>

      {/* <div className="description">
        <p>{description}</p>
      </div> */}
      <div className="image">
        <img src={`${REACT_APP_URL_API}/${image}`} alt="" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
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
    max-width: 200px;
    p {
      color: var(--main-0);
      font-size: 1.3rem;
      word-break: break-all;
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

export default EventItem;
