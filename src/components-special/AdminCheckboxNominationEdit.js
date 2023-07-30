import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = ({ label, onClick, passState, type, indicator }) => {
  console.log(label);
  const [active, setActive] = useState(
    true ? indicator !== "undefined" : false
  );

  const checkboxHandler = () => {
    if (!active) {
      passState(label);
    } else {
      // passState({ label: label, value: false, type: type });
      passState("");
    }
    setActive(!active);
  };

  return (
    <Wrapper onClick={onClick}>
      <div
        className={active ? "checkbox active1" : "checkbox"}
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
    min-width: 20px;
    max-width: 20px;
    height: 20px;
    border: 2px solid var(--main-0);
    cursor: pointer;
    transition: 0.7s;
    background-color: white;
    svg {
      display: none;
    }
    :hover {
      background: var(--main-3);
    }
  }
  .active1 {
    background-color: white;
    svg {
      display: block;
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
