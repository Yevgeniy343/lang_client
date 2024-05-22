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
            image={e.image}
            pdf={e.pdf}
            id={e._id}
            extra1={e.extra1}
            extra2={e.extra2}
            extra3={e.extra3}
            tarif_1={e.tarif_1}
            tarif_2={e.tarif_2}
            tarif_3={e.tarif_3}
            tarif_1a={e.tarif_1a}
            tarif_2a={e.tarif_2a}
            tarif_3a={e.tarif_3a}
            supervisor={e.supervisor}
            diplom={e.diplom}
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
