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
            childNom_1={e.childNom_1}
            childNom_2={e.childNom_2}
            childNom_3={e.childNom_3}
            childNom_4={e.childNom_4}
            childNom_5={e.childNom_5}
            childNom_6={e.childNom_6}
            childNom_7={e.childNom_7}
            childNom_8={e.childNom_8}
            childNom_9={e.childNom_9}
            childNom_10={e.childNom_10}
            adultNom_1={e.adultNom_1}
            adultNom_2={e.adultNom_2}
            adultNom_3={e.adultNom_3}
            adultNom_4={e.adultNom_4}
            adultNom_5={e.adultNom_5}
            adultNom_6={e.adultNom_6}
            adultNom_7={e.adultNom_7}
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
