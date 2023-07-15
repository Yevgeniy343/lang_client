import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { smallMenuHandler } from "../features/user/userSlise";

const SmallMenu = ({ item }) => {
  const { currentSmallMenu } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper
      className={item === currentSmallMenu ? "active" : null}
      onClick={() => dispatch(smallMenuHandler(item))}
    >
      <p>{item}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition2);
  cursor: pointer;
  :hover {
    background-color: var(--main-2);
    color: var(--gray-0);
  }
  P {
    margin: 0;
    font-size: 1rem;
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
export default SmallMenu;
