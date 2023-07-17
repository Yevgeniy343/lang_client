import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import Event from "../../components/adminComponents/Event";

const AdminEvents = () => {
  return (
    <Wrapper>
      <div className="all-events">
        <div className="all-event-header">
          <p>все мероприятия</p>
          <MdAdd />
        </div>
      </div>
      <div className="event">
        <div className="event-header">
          <p>мероприятие</p>
        </div>
        <Event />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid gray;
  .all-events {
    border: 1px solid gray;
  }
  .event {
    border: 1px solid gray;
    width: 100%;
  }
  .all-event-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      color: var(--main-0);
    }
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
  .event-header {
    display: flex;
    /* height: 100%; */
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    p {
      color: var(--main-0);
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
    .all-events {
      width: 300px;
    }
    .event {
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default AdminEvents;
