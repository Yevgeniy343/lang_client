import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, value, name, onChange, rows }) => {
  return (
    <Wrapper>
      <textarea
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        rows={rows}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  textarea {
    box-sizing: border-box;
    padding: 1rem;
    border: none;
    background: var(--gray-0);
    /* height: 35px; */
    width: 100%;
    height: 100%;
    font-size: 100%;
    border-radius: 5px;
    color: var(--blue-1);
    border: 1px solid var(--blue-1);
    resize: none;
    z-index: -1;
    color: var(--main-0);
    ::placeholder {
      color: var(--blue-05);
    }
    :focus-visible {
      outline: none;
    }

    :hover {
      ::placeholder {
        transition: 0.5s;
      }
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
export default Input;
