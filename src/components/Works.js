import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import JuruOrders from "./JuruOrders";

const Works = () => {
  const { adultOrders, childOrders } = useSelector((store) => store.jury);

  return (
    <Wrapper>
      <p>жюри доступны все заявки</p>
      {adultOrders.map((order) => (
        <JuruOrders
          key={order._id}
          id={order._id}
          number={order.number}
          link={order.link}
          file={order.file}
          nomPul={order.nomPul}
          type="adult"
          juryOrder={order.jury}
        />
      ))}
      {childOrders.map((order) => (
        <JuruOrders
          key={order._id}
          id={order._id}
          number={order.number}
          link={order.link}
          file={order.file}
          age={order.age}
          nomPul={order.nomPul}
          type="child"
          juryOrder={order.jury}
        />
      ))}
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
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Works;
