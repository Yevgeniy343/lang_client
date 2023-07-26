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
import PhoneInput from "react-phone-input-2";

const ChildrenOrder = () => {
  const { user } = useSelector((store) => store.user);

  const initialState = {
    email: user.email,
    phone: user.phone,
  };

  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const filePickerRef2 = useRef();

  const [values, setValues] = useState(initialState);
  const [curatorsAmount, setCuratorsAmount] = useState(initialState);
  const [state, setState] = useState("");
  const [term, setTerm] = useState(false);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [file, setFile] = useState();
  const [file2, setFile2] = useState();

  const pickHandler = () => {
    filePickerRef.current.click();
  };

  const pickHandler2 = () => {
    filePickerRef2.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      return;
    }
  };

  const pickedHandler2 = (e) => {
    let pickedFile2;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile2 = e.target.files[0];
      setFile(pickedFile2);
      return;
    }
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
      <div className="in">
        <label>
          <span>*</span>Квитанция об оплате
        </label>
        <div className="in">
          <Button text="Загрузить" type="button" onClick={pickHandler} />
          <input
            type="file"
            style={{ display: "none" }}
            // accept=".pdf"
            ref={filePickerRef}
            onChange={pickedHandler}
          />
          {file && <p className="file-name">{file.name}</p>}
        </div>
      </div>
      <div className="in">
        <label>
          <span>*</span>Укажите, пожалуйста, вашу электронную почту
        </label>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
        />
      </div>
      <div className="in">
        <label>
          <span>*</span>Ваш номер телефона для связи
        </label>
        <PhoneInput
          className="i"
          value={initialState.phone}
          inputProps={{ name: "phone" }}
          country="ru"
          onChange={(phone) => setState({ phone })}
        />
      </div>
      <div className="in">
        <label>
          <span>*</span>Согласие с условиями конкурса
        </label>
        <p className="term-link" onClick={() => setTerm(!term)}>
          {!term ? "Развернуть условия конкурса" : "Свернуть условия конкурса"}
        </p>
        {term && (
          <div className="term">
            <p className="term-text">
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты. Коварных языком свой эта предупреждал рыбного
              за оксмокс толку всеми она но ipsum семь над рукописи составитель
              проектах, на берегу коварный? Пустился собрал живет скатился если,
              большого вершину, снова пояс букв агентство жаренные большой.
              Скатился, но текст которой прямо это наш ты вдали выйти! Эта пояс
              своих парадигматическая гор себя силуэт. Всеми, взгляд она оксмокс
              напоивший lorem, дороге себя возвращайся, несколько решила которое
              первую пустился переписали вдали до однажды большой буквоград на
              берегу назад подпоясал встретил ты своих вершину. Однажды, lorem!
              Силуэт? Грустный запятых жаренные решила речью, бросил
              безорфографичный, вершину заголовок безопасную своих толку
              предупреждал она? Знаках залетают толку ему, имени своих ее не
              составитель. Свой коварных силуэт диких выйти прямо до? Буквенных
              ее заглавных оксмокс диких от всех жаренные не власти даль силуэт
              первую вершину имеет своего правилами, мир снова всеми по всей
              страну над бросил переулка ручеек на берегу наш толку. Толку,
              журчит. Далеко-далеко за словесными горами в стране гласных и
              согласных живут рыбные тексты. Коварных языком свой эта
              предупреждал рыбного за оксмокс толку всеми она но ipsum семь над
              рукописи составитель проектах, на берегу коварный? Пустился собрал
              живет скатился если, большого вершину, снова пояс букв агентство
              жаренные большой. Скатился, но текст которой прямо это наш ты
              вдали выйти! Эта пояс своих парадигматическая гор себя силуэт.
              Всеми, взгляд она оксмокс напоивший lorem, дороге себя
              возвращайся, несколько решила которое первую пустился переписали
              вдали до однажды большой буквоград на берегу назад подпоясал
              встретил ты своих вершину. Однажды, lorem! Силуэт? Грустный
              запятых жаренные решила речью, бросил безорфографичный, вершину
              заголовок безопасную своих толку предупреждал она? Знаках залетают
              толку ему, имени своих ее не составитель. Свой коварных силуэт
              диких выйти прямо до? Буквенных ее заглавных оксмокс диких от всех
              жаренные не власти даль силуэт первую вершину имеет своего
              правилами, мир снова всеми по всей страну над бросил переулка
              ручеек на берегу наш толку. Толку, журчит. Далеко-далеко за
              словесными горами в стране гласных и согласных живут рыбные
              тексты. Коварных языком свой эта предупреждал рыбного за оксмокс
              толку всеми она но ipsum семь над рукописи составитель проектах,
              на берегу коварный? Пустился собрал живет скатился если, большого
              вершину, снова пояс букв агентство жаренные большой. Скатился, но
              текст которой прямо это наш ты вдали выйти! Эта пояс своих
              парадигматическая гор себя силуэт. Всеми, взгляд она оксмокс
              напоивший lorem, дороге себя возвращайся, несколько решила которое
              первую пустился переписали вдали до однажды большой буквоград на
              берегу назад подпоясал встретил ты своих вершину. Однажды, lorem!
              Силуэт? Грустный запятых жаренные решила речью, бросил
              безорфографичный, вершину заголовок безопасную своих толку
              предупреждал она? Знаках залетают толку ему, имени своих ее не
              составитель. Свой коварных силуэт диких выйти прямо до? Буквенных
              ее заглавных оксмокс диких от всех жаренные не власти даль силуэт
              первую вершину имеет своего правилами, мир снова всеми по всей
              страну над бросил переулка ручеек на берегу наш толку. Толку,
              журчит.
            </p>
          </div>
        )}
        <Checkbox label="Согласен с условиями конкурса" />
      </div>
      <div className="in">
        <label>
          <span>*</span>Согласие на обработку персональных данных
        </label>

        <Checkbox label="Согласен на обработку персональных данных" />
      </div>
      <div className="actions">
        <Button text="Отправить заявку" />
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
  .i {
    margin: 0;
  }
  .i > input {
    background: var(--gray-0);
    border: none;
    height: 50px;
  }
  .term {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--main-0);
    padding: 1rem;
    margin: auto auto;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--main-0);
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--main-2);
      border-radius: 10px;
    }
  }
  .term-link {
    color: var(--main-0);
    margin: 1rem;
    margin-top: 0.15rem;
    text-decoration: underline;
    transition: var(--transition2);
    cursor: pointer;
    :hover {
      color: var(--main-2);
    }
  }
  .term-text {
    font-size: 0.9rem;
    color: var(--gray2);
  }
  .actions {
    display: flex;
    justify-content: center;
    margin: ;
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
