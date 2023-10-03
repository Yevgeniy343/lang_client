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

const { REACT_APP_REF } = process.env;

const JuryProfile = () => {
  const { jury, isLoading } = useSelector((store) => store.jury);
  const dispatch = useDispatch();
  const [state, setState] = useState("");

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
  };

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
              name="second_name"
              value={values.name}
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
              //   type="phone"
              //   name="phone"
              value={initialState.phone}
              //   onChange={changeHandler}
              inputProps={{ name: "phone" }}
              // onlyCountries={["ru"]}
              country="ru"
              onChange={(phone) => setState({ phone })}
            />
            {/* <Input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={changeHandler}
              pattern="[7]{3}-[0-9]{3}-[0-9]{4}"
            /> */}
          </div>
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
