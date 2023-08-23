import React, { useState, useEffect } from "react";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Checkbox from "../../components-special/Checkbox";
import Button from "../../components-special/Button";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createNom, getNom } from "../../features/adminSlice";
import Nomination from "../../components/Nomination";

const initialState = [
  {
    nom1: "",
    nom2: "",
    nom3: "",
  },
];
const Nominations = () => {
  const { nominations } = useSelector((store) => store.admin);
  const [nom1, setNom1] = useState(initialState);
  const [nom2, setNom2] = useState(initialState);
  const [nom3, setNom3] = useState(initialState);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  console.log(nom1);
  console.log(nom2);
  console.log(nom3);

  useEffect(() => {
    dispatch(getNom());
  }, []);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const nomHandler1 = (data) => {
    setNom1(data);
  };
  const nomHandler2 = (data) => {
    setNom2(data);
  };
  const nomHandler3 = (data) => {
    setNom3(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!values.name) {
      toast.error("Введите все значения");
      return;
    }

    dispatch(
      createNom({
        name: values.name,
        condition1: nom1,
        condition2: nom2,
        condition3: nom3,
      })
    );
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
              passState={nomHandler1}
              label="доступно прикрепление ссылки"
              indicator={nom1}
            />
            <Checkbox
              passState={nomHandler2}
              label="доступно прикрепление файла"
              indicator={nom2}
            />
            <Checkbox
              passState={nomHandler3}
              label="доступен выбор языка"
              indicator={nom3}
            />
          </div>

          <div className="actions">
            <Button type="submit" text="Сохранить" />
          </div>
        </form>
        <div className="header">
          <h4>Созданные номинации</h4>
        </div>
        {nominations.map((n) => (
          <Nomination
            key={n._id}
            name={n.name}
            link={n.link}
            file={n.file}
            language={n.language}
            id={n._id}
          />
        ))}
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
