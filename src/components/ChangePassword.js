import React, { useState } from "react";
import styled from "styled-components";
import InputPass from "../components-special/InputPass";
import Button from "../components-special/Button";
import { changeUserPass } from "../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

const initialState = {
  pass: "",
  pass1: "",
  pass2: "",
};

const ChangePassword = () => {
  const { user, isLoading } = useSelector((store) => store.user);

  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { pass, pass1, pass2 } = values;
    if (!pass || !pass1 || !pass2) {
      toast.error("Введите все значения");
      return;
    }
    if (pass1 !== pass2) {
      toast.error("Введенные пароли не совпадают !");
      return;
    }
    dispatch(
      changeUserPass({ pass: pass, pass1: pass1, pass2: pass2, id: user._id })
    );
    setValues(initialState);
  };

  return (
    <Wrapper>
      <h4>Сменить пароль</h4>
      <form onSubmit={onSubmit}>
        <div className="password">
          <label>
            <span>*</span>Текущий пароль
          </label>
          <div>
            <InputPass
              name="pass"
              type="password"
              value={values.pass}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="password">
          <label>
            <span>*</span>Новый пароль
          </label>
          <div>
            <InputPass
              name="pass1"
              type="password"
              value={values.pass1}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="password">
          <label>
            <span>*</span>Повторите пароль
          </label>
          <div>
            <InputPass
              name="pass2"
              type="password"
              value={values.pass2}
              onChange={changeHandler}
            />
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
    margin-bottom: 0.5rem;
  }
  input {
    width: 200px;
  }
  label {
    margin-left: 1rem;
    margin-bottom: 0;
  }
  .actions {
    margin-top: 1rem;
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
