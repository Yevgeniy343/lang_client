import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Select from "../../components-special/Select";
import Button from "../../components-special/Button";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../components-special/Checkbox";
import { curatorHandler } from "../../features/user/userSlise";
import Curators from "./Curators";

const ChildrenOrder = () => {
  const dispatch = useDispatch();
  const filePickerRef = useRef();

  const [inputList, setInputList] = useState([]);
  const [inputList2, setInputList2] = useState([]);

  const initialState = {};

  const [values, setValues] = useState(initialState);
  const [curatorsAmount, setCuratorsAmount] = useState(initialState);
  console.log(curatorsAmount);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [file, setFile] = useState();

  const pickHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      return;
    }
  };

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <Input
          key={inputList.length}
          placeholder="ФИО куратора"
          type="text"
          name={inputList.length}
          onChange={changeHandler}
        />
      )
    );
    setInputList2(
      inputList2.concat(
        <Input
          key={inputList2.length + 1000}
          placeholder="Должность куратора"
          type="text"
          name={inputList2.length + 1000}
          onChange={changeHandler}
        />
      )
    );
  };

  const emptyHandler = () => {
    console.log(values);
  };

  const curatorsAmountHanler = (amount) => {
    setCuratorsAmount(amount);
  };

  return (
    <Wrapper>
      <div className="in">
        <label>
          <span>*</span>Фамилия и имя конкурсанта
        </label>
        <Input
          type="text"
          name="name"
          value={values.name}
          onChange={changeHandler}
        />
      </div>
      <div className="in">
        <label>
          <span>*</span>Возрастная категория
        </label>
        <div>
          <Checkbox label="один вариант" />
        </div>
      </div>
      <div className="in">
        <label>
          <span>*</span>Субъект Российской Федерации
        </label>
        <Select passState={emptyHandler} />
      </div>
      <div className="in">
        <label>
          <span>*</span>Населенный пункт
        </label>
        <Input />
      </div>
      <div className="in">
        <label>
          <span>*</span>Наименование учебного заведения
        </label>
        <Input />
      </div>
      <div className="in">
        <label>
          <span>*</span>Выбор номинации
        </label>
        <div>
          <Checkbox label="один вариант" />
        </div>
      </div>
      <div className="in">
        <label>
          <span>*</span>Язык работы
        </label>
        <Select passState={emptyHandler} />
      </div>
      <div className="in">
        <label>Укажите язык работы, если его не было в списке выше</label>
        <Input />
      </div>
      <div className="in">
        <label>
          Ссылка на работу в номинациях, предполагающих приложение ссылок
        </label>
        <Input />
      </div>
      <div className="in">
        <Button text="Прикрепить работу" type="button" onClick={pickHandler} />
        <input
          type="file"
          style={{ display: "none" }}
          // accept=".pdf"
          ref={filePickerRef}
          onChange={pickedHandler}
        />
        {file && <p className="file-name">{file.name}</p>}
      </div>
      <div className="in">
        <label>
          <span>*</span>Тариф
        </label>
        <div>
          <Checkbox label="один вариант" />
        </div>
      </div>

      <div className="in curator">
        <label>
          <span>*</span>Количество кураторов
        </label>
        <Select passState={curatorsAmountHanler} />
        <Curators amount={curatorsAmount} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 5rem;

  .in {
    margin: 1rem 0;
  }
  .i {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  label {
    font-size: 0.9rem;
    margin-left: 1rem;
    color: var(--clr-grey-5);
  }
  span {
    color: var(--clr-red-dark);
  }
  .file-name {
    color: var(--clr-grey-5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      font-size: 2rem;
    }
  }
  .curator {
    input {
      margin: 0.5rem 0;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default ChildrenOrder;
