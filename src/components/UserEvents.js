import React from "react";
import styled from "styled-components";
import UserEvent from "./UserEvent";
import { useDispatch, useSelector } from "react-redux";

const UserEvents = () => {
  const { events } = useSelector((store) => store.user);
  return (
    <Wrapper>
      {events.map((e) => (
        <UserEvent
          key={e._id}
          name={e.name}
          date1={e.date1}
          date2={e.date2}
          description={e.description}
          image={e.image}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
