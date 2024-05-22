import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const DiplomDownload = () => {
  const { user, isLoading, childOrders, adultOrders } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h4>Все мероприятия</h4>
      <div className="content">efrvfer</div>
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
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default DiplomDownload;
