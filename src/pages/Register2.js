import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
  remindUser,
} from "../features/user/userSlise";
import toast from "react-hot-toast";
import Input from "../components-special/Input";
import InputPass from "../components-special/InputPass";
import Button from "../components-special/Button";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  remind: "",
};

const Register = () => {
  const { ref } = useParams();
  const { user, isLoading } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  const [remind, setRemind] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Введите все значения");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password, ref }));
  };

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      navigate("/personal-area");
    }
  }, [user]);

  const onSubmitRemind = () => {
    const { remind } = values;
    if (!remind) {
      toast.error("Укажите Email");
      return;
    }
    dispatch(remindUser({ remind_email: remind }));
  };

  return (
    <div>
      {isLoading && <Loading />}

      <Wrapper>
        <form className="form" onSubmit={onSubmit}>
          <h3>{values.isMember ? "Авторизация" : "Регистрация"}</h3>
          <div className="input-content">
            {!values.isMember && (
              <Input
                placeholder="Name"
                type="text"
                name="name"
                value={values.name}
                onChange={changeHandler}
              />
            )}
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={values.email.toLowerCase()}
              onChange={changeHandler}
            />
            <InputPass
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />
          </div>
          <div className="actions">
            <Button
              type="submit"
              className="btn button-form"
              disabled={isLoading}
              text={isLoading ? "Думаю ..." : "Подтвердить"}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <p className="asq">
              {values.isMember ? "Нет регистрации? " : "Уже есть регистрация? "}
              <button
                type="button"
                onClick={toggleMemberHandler}
                className="member-btn"
              >
                {values.isMember ? " Регистрация" : "Авторизация"}
              </button>
            </p>
          </div>
          <div className="remind">
            <p onClick={() => setRemind(!remind)}>Восстановить пароль</p>
          </div>
        </form>
        {remind && (
          <div className="form">
            <h3>Восстановление пароля</h3>
            <div className="input-content">
              <p className="info">
                Укажите email, который Вы использовали при регистрации. На него
                будет высдан новый, сгенерированный пароль, который мы так же
                рекомендуем в дальнейшем изменить.{" "}
              </p>
              <Input
                type="email"
                name="remind"
                placeholder="Email"
                value={values.remind}
                onChange={changeHandler}
              />
              <div className="actions">
                <Button
                  type="button"
                  onClick={onSubmitRemind}
                  className="btn button-form"
                  disabled={isLoading}
                  text={isLoading ? "Думаю ..." : "Отправить пароль"}
                />
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.main`
  margin-top: 2rem;
  .form {
    width: 95vw;
    max-width: var(--fixed-width);
    padding: 1rem 2.5rem;
    margin: 1rem auto;
    transition: var(--transition);
  }
  input {
    margin: 0.5rem 0;
  }
  .header {
    text-align: center;
    margin: 1rem;
  }
  .input-content {
    text-align: center;
  }
  h3 {
    color: var(--main-0);
    text-align: center;
  }
  button {
    font-size: 1.3rem;
  }
  .actions {
    margin: 1rem;
    text-align: center;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--main-0);
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition2);
    :hover {
      text-decoration: underline;
    }
  }
  .asq {
    color: var(--clr-grey-4);
  }
  .remind {
    display: flex;
    justify-content: center;
    margin: 1rem;
    cursor: pointer;
    transition: var(--transition2);
    color: var(--main-0);
    :hover {
      text-decoration: underline;
    }
  }
  .info {
    text-indent: 1rem;
    text-align: left;
    /* margin: 1rem; */
    color: var(--clr-grey-4);
  }

  @media (min-width: 992px) {
  }
`;
export default Register;
