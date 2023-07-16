import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components-special/Input";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);

  const initialState = {
    name: user.name,
    email: user.email,
    second_name: user.second_name,
  };

  const [values, setValues] = useState(initialState);
  return (
    <Wrapper>
      <h4>Мой профиль</h4>
      <div className="name">
        <div className="firs">
          <label>Фамилия</label>
          <Input type="text" name="second_name" value={values.second_name} />
        </div>
        <div className="second">
          <label>Имя</label>
          <Input type="text" name="name" value={values.name} />
        </div>
      </div>
      <div className="contacts">
        <div className="firs">
          <label>Email</label>
          <Input type="email" naame="email" value={values.email} />
        </div>
        <div className="second">
          <label>Телефон</label>
          <Input type="phone" name="phone" />
        </div>
      </div>
      <div className="contacts2">
        <div className="firs">
          <label>Дата рождения</label>
          <Input type="date" name="date" value={values.date} />
        </div>
        <div className="second">
          <label type="text" name="city" value={values.city}>
            Город
          </label>
          <Input />
        </div>
      </div>
      {/* <div className="description">description</div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  h4 {
    margin-bottom: 2rem;
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
    }
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
    .name,
    .contacts,
    .contacts2 {
      justify-content: space-between;
      input {
        width: 400px;
      }
    }
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
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
    .name,
    .contacts,
    .contacts2 {
      input {
        width: 450px;
      }
    }
  }
`;
export default Profile;
