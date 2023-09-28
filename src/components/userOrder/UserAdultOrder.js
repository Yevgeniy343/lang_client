import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const UserAdultOrder = ({ orderId }) => {
  const { events, adultOrders } = useSelector((store) => store.user);

  const thisOrder = adultOrders.find((adult) => adult._id === orderId);

  return <Wrapper>{orderId}</Wrapper>;
};

const Wrapper = styled.div`
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
export default UserAdultOrder;
