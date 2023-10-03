import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { smallMenuHandler } from "../features/jury/jurySlice";

const JurySmallMenu = ({ item }) => {
  const { currentSmallMenu } = useSelector((store) => store.jury);
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
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition2);
  background-color: var(--gray-0);

  cursor: pointer;
  :hover {
    background-color: var(--main-2);
    color: var(--gray-0);
  }
  p {
    margin: 0;
    margin-left: 0.2rem;
    font-size: 1rem;
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    p {
      margin: 0;
    }
  }
  @media (min-width: 992px) {
    width: 100%;
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default JurySmallMenu;
