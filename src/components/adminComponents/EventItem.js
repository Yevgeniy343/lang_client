import React from "react";
import styled from "styled-components";
const { REACT_APP_URL_API } = process.env;

const EventItem = ({ name, date1, date2, descriprion, image }) => {
  return (
    <Wrapper>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="date">
        <p>{date1}</p>
        <p>{date2}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
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
