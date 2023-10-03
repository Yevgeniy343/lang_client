import React from "react";
import styled from "styled-components";
import UserOrder from "./UserOrder";
import { useSelector, useDispatch } from "react-redux";

const UserOrders = () => {
  const { user, isLoading, childOrders, adultOrders } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {/* <div className="header">
        <p>статус</p>
        <p>конкурс</p>
        <p>имя конкурсанта</p>
        <p>номинация</p>
      </div> */}
      {childOrders.map((child) => (
        <UserOrder
          key={child._id}
          orderId={child._id}
          status={child.status}
          nomPul={child.nomPul}
          eventId={child.eventId}
          name={child.name}
          type="child"
        />
      ))}
      {adultOrders.map((adult) => (
        <UserOrder
          key={adult._id}
          orderId={adult._id}
          status={adult.status}
          nomPul={adult.nomPul}
          eventId={adult.eventId}
          name={adult.name}
          type="adult"
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-around;
    /* margin: 0.5rem 0; */
    width: 100%;
    p {
      padding: 0.5rem;
      width: 220px;
      min-width: 220px;
    }
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
export default UserOrders;
