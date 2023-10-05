import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Works = () => {
  const {} = useSelector((store) => store.user);

  return <Wrapper>works</Wrapper>;
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
