import React from "react";
import styled from "styled-components";
import InputPass from "../components-special/InputPass";
import Button from "../components-special/Button";

const ChangePassword = () => {
  const onSubmit = () => {};

  return (
    <Wrapper>
      <h4>Сменить пароль</h4>
      <form onSubmit={onSubmit}>
        <div className="password">
          <label>
            <span>*</span>Текущий пароль
          </label>
          <div>
            <InputPass />
          </div>
        </div>
        <div className="password">
          <label>
            <span>*</span>Новый пароль
          </label>
          <div>
            <InputPass />
          </div>
        </div>
        <div className="password">
          <label>
            <span>*</span>Повторите пароль
          </label>
          <div>
            <InputPass />
          </div>
        </div>
        <div className="actions">
          <Button text="Изменить пароль" type="submit" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  .password {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  input {
    width: 200px;
  }
  label {
    margin-left: 1rem;
    margin-bottom: 0;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .password {
      align-items: flex-start;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default ChangePassword;
