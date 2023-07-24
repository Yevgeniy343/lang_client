import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components-special/Input";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components-special/Button";
import { editUser } from "../features/user/userSlise";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ChangePassword from "./ChangePassword";

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
    job: user.job,
    job_title: user.job_title,
  };

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, second_name, date, city, job, job_title, phone } =
      values;
    dispatch(
      editUser({
        name: name,
        email: email,
        second_name: second_name,
        phone: state.phone,
        // phone: phone,
        date: date,
        city: city,
        job: job,
        job_title: job_title,
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
        <div className="place">
          <div className="firs">
            <label>Место работы</label>
            <Input
              type="text"
              name="job"
              value={values.job}
              onChange={changeHandler}
            />
          </div>
          <div className="second">
            <label type="text" name="city" value={values.city}>
              Должность
            </label>
            <Input
              type="text"
              name="job_title"
              value={values.job_title}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* <div className="description">description</div> */}
        <div className="actions">
          <Button text="Сохранить" type="submit" />
        </div>
      </form>
      <ChangePassword />
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
export default Profile;
