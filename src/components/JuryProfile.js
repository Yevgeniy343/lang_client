import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components-special/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components-special/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import copy from "copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import JuryChangePassword from "../components/JuryChangePassword";
import Select2 from "../components-special/Select2";
import { languages } from "../data/data-order";
import CheckboxJuryNoms from "../components-special/CheckboxJuryNoms";
import { editProfile } from "../features/jury/jurySlice";
import _ from "lodash";

const { REACT_APP_REF } = process.env;

const JuryProfile = () => {
  const { jury, isLoading, nominations } = useSelector((store) => store.jury);

  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const [lang, setLang] = useState();

  const initialState = {
    name: jury.name,
    email: jury.email,
    phone: jury.phone,
    sp: jury.sp,
    nomins: jury.nomins,
    subj: jury.subj,
    spOther: jury.spOther,
    oy: jury.oy,
    punct: jury.punct,
    lang: jury.leng,
    job_title: jury.job_title,
    kval: jury.kval,
    prof: jury.prof,
    place: jury.place,
    region: jury.region,
  };

  const [values, setValues] = useState(initialState);
  const [noms, setNoms] = useState(jury.nomins);
  console.log(noms);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editProfile({
        name: values.name,
        email: values.email,
        phone: state.phone,
        lang: lang,
        nomins: noms,
        id: jury._id,
        job_title: values.job_title,
        kval: values.kval,
        prof: values.prof,
        place: values.place,
        region: values.region,
        oy: values.oy,
        punct: values.punct,
      })
    );
  };

  const languageHandler = (d) => {
    setLang(d);
  };

  let data;
  const nomsHandler = (d) => {
    console.log(d);
    const includes = _.includes(noms, d);
    if (!includes) {
      data = [...noms, d];
      setNoms(data);
    }
    if (includes) {
      data = noms.filter((n) => n !== d);
      setNoms(data);
    }
  };

  return (
    <Wrapper>
      <h4>Мой профиль</h4>
      <form onSubmit={onSubmit}>
        <div className="name">
          <div className="first">
            <label>ФИО</label>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Должность</label>
            <Input
              type="text"
              name="job_title"
              value={values.job_title}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Квалификационная категория</label>
            <Input
              type="text"
              name="kval"
              value={values.kval}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Профессиональные регалии</label>
            <Input
              type="text"
              name="prof"
              value={values.prof}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Место работы</label>
            <Input
              type="text"
              name="place"
              value={values.place}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Название ОУ</label>
            <Input
              type="text"
              name="oy"
              value={values.oy}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Населенный пункт</label>
            <Input
              type="text"
              name="punct"
              value={values.punct}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="name">
          <div className="first">
            <label>Регион РФ</label>
            <Input
              type="text"
              name="region"
              value={values.region}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="contacts">
          <div className="firs">
            <label>
              <span>*</span>Email
            </label>
            <Input
              type="email"
              name="email"
              required={true}
              value={values.email}
              onChange={changeHandler}
            />
          </div>
          <div className="second">
            <label>Телефон</label>
            <PhoneInput
              className="i"
              value={initialState.phone}
              inputProps={{ name: "phone" }}
              country="ru"
              onChange={(phone) => setState({ phone })}
            />
          </div>
          <div className="in2">
            <h4>Выберете номинацию для проверки</h4>
            {nominations?.map((n) => (
              <CheckboxJuryNoms label={n.name} passState={nomsHandler} />
            ))}
          </div>
        </div>
        <div className="in2">
          <h4>Язык (языки) для проверки</h4>
          <Select2 passState={languageHandler} data={languages} />
        </div>
        <div className="actions">
          <Button text="Сохранить" type="submit" />
        </div>
      </form>
      <JuryChangePassword />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 2rem;
  h4 {
    margin-bottom: 2rem;
    color: var(--main-0);
  }
  label {
    font-size: 0.9rem;
    margin: 1rem;
    color: var(--clr-grey-5);
  }
  .name,
  .contacts,
  .contacts2,
  .place {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    input {
      width: 300px;
      margin: 0;
      margin-right: 1rem;
    }
  }
  .actions {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }
  span {
    color: var(--clr-red-dark);
  }
  .i > input {
    background: var(--gray-0);
    border: none;
    height: 50px;
  }
  .referal_link {
    color: var(--main-0);
    margin-right: 1rem;
    margin-top: 0.5rem;
  }
  .ref {
    display: flex;
    align-items: center;
    svg {
      font-size: 1.3rem;
      cursor: pointer;
      color: var(--main-0);
      transition: 0.6s;
      :hover {
        color: var(--main-1);
      }
    }
  }
  .in2 {
    margin-top: 50px;
  }
  @media (min-width: 576px) {
    .name,
    .contacts,
    .contacts2,
    .place {
      input {
        width: 400px;
      }
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .name,
    .contacts,
    .contacts2,
    .place {
      justify-content: space-between;
      input {
        width: 400px;
      }
    }
    .actions {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }
  @media (min-width: 1140px) {
    .name,
    .contacts,
    .contacts2,
    .place {
      justify-content: space-between;
      input {
        width: 400px;
      }
    }
  }
  @media (min-width: 1340px) {
    .name,
    .contacts,
    .contacts2,
    .place {
      input {
        width: 450px;
      }
    }
  }
  @media (min-width: 1540px) {
    .name,
    .contacts,
    .contacts2,
    .place {
      input {
        width: 550px;
      }
    }
  }
`;
export default JuryProfile;
