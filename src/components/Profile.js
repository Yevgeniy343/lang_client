import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components-special/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components-special/Button";
import { editUser } from "../features/user/userSlise";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const initialState = {
    name: user.name,
    email: user.email,
    second_name: user.second_name,
    phone: user.phone,
    date: user.date,
    city: user.city,
  };

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, second_name, phone, date, city } = values;
    dispatch(
      editUser({
        name: name,
        email: email,
        second_name: second_name,
        phone: state.phone,
        date: date,
        city: city,
        id: user._id,
      })
    );
  };

  return (
    <Wrapper>
      <h4>Мой профиль</h4>
      <form onSubmit={onSubmit}>
        <div className="name">
          <div className="firs">
            <label>Фамилия</label>
            <Input
              type="text"
              name="second_name"
              value={values.second_name}
              onChange={changeHandler}
            />
          </div>
          <div className="second">
            <label>
              <span>*</span>Имя
            </label>
            <Input
              type="text"
              name="name"
              required={true}
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
              value={values.phone}
              //   onChange={changeHandler}
              inputProps={{ name: "phone" }}
              onlyCountries={["ru", "kz", "by", "uz"]}
              onChange={(phone) => setState({ phone })}
            />
          </div>
        </div>
        <div className="contacts2">
          <div className="firs">
            <label>Дата рождения</label>
            <Input
              type="date"
              name="date"
              value={values.date}
              onChange={changeHandler}
            />
          </div>
          <div className="second">
            <label type="text" name="city" value={values.city}>
              Город
            </label>
            <Input
              type="text"
              name="city"
              value={values.city}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* <div className="description">description</div> */}
        <div className="actions">
          <Button text="Сохранить" type="submit" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  h4 {
    margin-bottom: 2rem;
    color: var(--main-0);
    /* text-align: center; */
  }
  label {
    font-size: 0.9rem;
    margin: 1rem;
    color: var(--clr-grey-5);
  }
  .name,
  .contacts,
  .contacts2 {
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
    /* width: 100%; */
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

  @media (min-width: 576px) {
    .name,
    .contacts,
    .contacts2 {
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
    .contacts2 {
      justify-content: space-between;
      input {
        width: 400px;
      }
    }
    .actions {
      /* width: 100%; */
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }
  @media (min-width: 1140px) {
    .name,
    .contacts,
    .contacts2 {
      justify-content: space-between;
      input {
        width: 500px;
      }
    }
  }
  @media (min-width: 1340px) {
    .name,
    .contacts,
    .contacts2 {
      input {
        width: 550px;
      }
    }
  }
`;
export default Profile;
