import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerJury,
  loginJury,
  remindJury,
} from "../../features/jury/jurySlice";
import toast from "react-hot-toast";
import Input from "../../components-special/Input";
import InputPass from "../../components-special/InputPass";
import Button from "../../components-special/Button";
import Loading from "../../components/Loading";
import CheckboxSp from "../../components-special/CheckboxSp";
import {
  specialization,
  languages,
  nom,
  subjects,
} from "../../data/data-order";
import Select from "../../components-special/Select";
import PhoneInput from "react-phone-input-2";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  remind: "",
  other: "",
  other2: "",
  oy: "",
  punct: "",
  phone: "",
};

const JuryRegister = () => {
  const { jury, isLoading } = useSelector((store) => store.jury);
  const [values, setValues] = useState(initialState);
  const [remind, setRemind] = useState(false);
  const [phone, setState] = useState("");
  const [sp, setSp] = useState();
  // console.log(sp);
  const [lang, setLang] = useState();
  // console.log(lang);
  const [nomins, setNom] = useState();
  console.log(nomins);
  const [subj, setSubj] = useState();
  // console.log(subj);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values.other);
  // console.log(values.oy);
  // console.log(values.punct);
  // console.log(values.phone);

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Введите все значения");
      return;
    }
    if (isMember) {
      dispatch(loginJury({ email: email, password: password }));
      return;
    }
    dispatch(
      registerJury({
        name,
        email,
        password,
        sp,
        lang,
        nomins,
        subj,
        spOther: values.other,
        oy: values.oy,
        punct: values.punct,
        phone: phone.phone,
      })
    );
  };

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (jury) {
      navigate("/jury-area");
    }
  }, [jury]);

  const onSubmitRemind = () => {
    const { remind } = values;
    if (!remind) {
      toast.error("Укажите Email");
      return;
    }
    dispatch(remindJury({ remind_email: remind }));
  };

  const spHandler = (d) => {
    setSp(d);
  };

  const languageHandler = (d2) => {
    setLang(d2);
  };

  const nomHandler = (d3) => {
    setNom(d3);
  };

  const subjectHandler = (d3) => {
    setSubj(d3);
  };

  return (
    <div>
      {isLoading && <Loading />}

      <Wrapper>
        <form className="form" onSubmit={onSubmit}>
          <h3>
            {values.isMember ? "Авторизация (жюри)" : "Регистрация (жюри)"}
          </h3>
          <div className="input-content">
            {!values.isMember && (
              <div>
                <Input
                  placeholder="ФИО"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={changeHandler}
                />
                {specialization.map((s) => (
                  <CheckboxSp
                    key={s.id}
                    label={s.sp}
                    indicator={sp}
                    passState={spHandler}
                  />
                ))}
                <div className="in">
                  {sp === "Другое" && (
                    <Input
                      placeholder="Другое"
                      type="text"
                      name="other"
                      value={values.other}
                      onChange={changeHandler}
                    />
                  )}
                </div>
                {sp === "Учитель родного языка" && (
                  <div className="in">
                    <label>
                      Выберите родной язык, учителем которого Вы являетесь
                    </label>
                    <Select passState={languageHandler} data={languages} />
                  </div>
                )}
                <div className="in">
                  <label>
                    <span>*</span>
                    Какие номинации Вы компетентны жюрировать
                  </label>
                  {nom.map((n) => (
                    <CheckboxSp
                      key={n.id}
                      label={n.nomination}
                      indicator={nomins}
                      passState={nomHandler}
                    />
                  ))}
                </div>
                {nomins === "Другое" && (
                  <div className="in">
                    <Input
                      placeholder="Другое"
                      type="text"
                      name="other2"
                      value={values.other2}
                      onChange={changeHandler}
                    />
                  </div>
                )}
                <div className="in">
                  <Input
                    placeholder="Название ОУ, должность"
                    type="text"
                    name="oy"
                    value={values.oy}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>Регион</label>
                  <Select passState={subjectHandler} data={subjects} />
                </div>
                <div className="in">
                  <label>Населенный пункт</label>
                  <Input
                    placeholder="Населенный пункт"
                    type="text"
                    name="punct"
                    value={values.punct}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in2">
                  <label>Номер телефона для звонков</label>
                  <PhoneInput
                    className="i"
                    value={initialState.phone}
                    inputProps={{ name: "phone" }}
                    country="ru"
                    onChange={(phone) => setState({ phone })}
                  />
                </div>
              </div>
            )}

            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={values.email.toLowerCase()}
              onChange={changeHandler}
            />
            <InputPass
              placeholder="Пароль"
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
  .in {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .in2 {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  label {
    font-size: 0.9rem;
    margin-left: 1rem;
    color: var(--clr-grey-5);
  }
  span {
    color: var(--clr-red-dark);
  }
  .i {
    display: flex;
  }
  .i > input {
    background: var(--gray-0);
    border: none;
    height: 50px;
  }
  @media (min-width: 992px) {
  }
`;
export default JuryRegister;
