import React, { useState, useEffect } from "react";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Checkbox from "../../components-special/Checkbox";
import Button from "../../components-special/Button";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createNom } from "../../features/adminSlice";

const initialState = [
  {
    nom: "",
  },
];
const Nominations = () => {
  const [nom, setNom] = useState(initialState);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const nomHandler = (data) => {
    setNom(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!values.name || !nom) {
      toast.error("Введите все значения");
      return;
    }

    dispatch(createNom({ name: values.name, condition: nom }));
  };

  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper>
        <div className="header">
          <h4>Управление номинациями</h4>
        </div>
        <form onSubmit={onSubmit}>
          <div className="add">
            <p>Новая номинация</p>
            <Input
              type="text"
              name="name"
              placeholder="название номинации"
              value={values.name}
              onChange={changeHandler}
            />
            <Checkbox
              passState={nomHandler}
              label="доступно прикрепление ссылки"
              indicator={nom}
            />
            <Checkbox
              passState={nomHandler}
              label="доступно прикрепление файла"
              indicator={nom}
            />
          </div>

          <div className="actions">
            <Button type="submit" text="Сохранить" />
          </div>
        </form>
        <div className="header">
          <h4>Созданные номинации</h4>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    justify-content: center;
    margin: 1rem;
    h4 {
      color: var(--main-0);
    }
  }
  .add {
    width: 300px;
    p {
      margin-left: 1rem;
    }
  }
  .actions {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  @media (min-width: 576px) {
    .add {
      width: 400px;
    }
  }
  @media (min-width: 768px) {
    .add {
      width: 700px;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
  @media (min-width: 1540px) {
  }
`;
export default Nominations;
