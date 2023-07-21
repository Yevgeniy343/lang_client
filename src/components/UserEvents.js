import React from "react";
import styled from "styled-components";
import UserEvent from "./UserEvent";
import { useDispatch, useSelector } from "react-redux";

const UserEvents = () => {
  const { events } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <h4>Все мероприятия</h4>
      <div className="content">
        {events.map((e) => (
          <UserEvent
            key={e._id}
            name={e.name}
            date1={e.date1}
            date2={e.date2}
            description={e.description}
            image={e.image}
            pdf={e.pdf}
          />
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 2rem;
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  h4 {
    margin-bottom: 2rem;
    color: var(--main-0);
    /* text-align: center; */
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
export default UserEvents;
