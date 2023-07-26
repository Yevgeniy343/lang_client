import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { sendMail } from "../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = ({ label, onClick }) => {
  const { currentEvent } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const checkboxHandler = () => {
    setActive(!active);
  };

  return (
    <Wrapper onClick={onClick}>
      <div
        className={active ? "checkbox active" : "checkbox"}
        onClick={checkboxHandler}
      >
        {active && <AiOutlineCheck />}
      </div>
      <p>{label}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .checkbox {
    margin: 0.5rem 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--main-0);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.7s;
    background-color: white;
    :hover {
      border: 2px solid var(--main-2);
      background: var(--main-3);
    }
    /* :active {
      border: 2px solid var(--main-0);
      background-color: var(--main-3);
    } */
  }
  .active {
    background-color: white;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    svg {
      color: green;
      font-size: 2rem;
      position: relative;
      bottom: 11px;
      right: 4px;
    }
  }
  p {
    letter-spacing: 0.08rem;
    margin: 0;
    margin-left: 0.5rem;
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
export default Checkbox;
