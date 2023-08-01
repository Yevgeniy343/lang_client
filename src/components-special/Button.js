import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick, type, disabled }) => {
  return (
    <Wrapper>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={disabled ? "disabled" : ""}
      >
        {text}
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  button {
    font-family: "Philosopher", sans-serif;
    font-size: 1rem;
    color: var(--gray-2);
    padding: 0.3rem 0.6rem;
    background-color: transparent;
    transition: 0.8s;
    /* border-radius: 5px; */
    color: var(--main-0);
    border-color: var(--main-0);
    height: 44px;
    cursor: pointer;
    :hover {
      background-color: var(--main-0);
      color: white;
    }
    :active {
      background-color: var(--clr-grey-9);
    }
  }
  .disabled {
    cursor: not-allowed;
    background-color: var(--gray-0);
    color: var(--clr-grey-5);
    /* border: var(--clr-grey-5); */
    :hover {
      background-color: var(--gray-0);
      color: var(--clr-grey-5);
    }
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
export default Button;
