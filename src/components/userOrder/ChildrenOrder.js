import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Select from "../../components-special/Select";
import Button from "../../components-special/Button";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../components-special/Checkbox";
import CheckboxNominations from "../../components-special/CheckboxNominations";

import Curators from "./Curators";
import PhoneInput from "react-phone-input-2";
import { subjects, languages } from "../../data/data-order";

const ChildrenOrder = () => {
  const { user } = useSelector((store) => store.user);

  const initialState = {
    email: user.email,
    phone: user.phone,
    name: "",
    punct: "",
    graduate: "",
    language2: "",
  };

  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const filePickerRef2 = useRef();

  const [term, setTerm] = useState(false);

  const [values, setValues] = useState(initialState);
  const [curatorsAmount, setCuratorsAmount] = useState(initialState);
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [nomination, setNomination] = useState("");
  const [phone, setPhone] = useState(initialState.phone);

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

  const emptyHandler = () => {};

  const subjectHandler = (state) => {
    setSubject(state);
  };

  const ageHandler = (data) => {
    setAge(data);
  };
  const curatorsAmountHanler = (amount) => {
    setCuratorsAmount(amount);
  };

  const languageHandler = (lang) => {
    setLanguage(lang);
  };

  const nominationHandler = (data) => {
    setNomination(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("--------------");
    console.log("name = ", values.name);
    console.log("age = ", age);
    console.log("subject = ", subject);
    console.log("punct = ", values.punct);
    console.log("graduate = ", values.graduate);
    console.log("language = ", language);
    console.log("language2 = ", values.language2);
    console.log("nomination = ", nomination);
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
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
          <div className="check-group">
            <div className="box">
              <Checkbox
                indicator={age}
                passState={ageHandler}
                label="3-5 лет"
              />
            </div>

            <div className="box">
              <Checkbox
                indicator={age}
                passState={ageHandler}
                label="6-8 лет"
              />
            </div>
            <div className="box">
              <Checkbox
                indicator={age}
                passState={ageHandler}
                label="9-12 лет"
              />
            </div>
            <div className="box">
              <Checkbox
                indicator={age}
                passState={ageHandler}
                label="13-15 лет"
              />
            </div>
            <div className="box">
              <Checkbox
                indicator={age}
                passState={ageHandler}
                label="16-18 лет"
              />
            </div>
            <div className="box">
              <Checkbox
                indicator={age}
                passState={ageHandler}
                label="19-22 лет"
              />
            </div>
          </div>
        </div>
        <div className="in">
          <label>
            <span>*</span>Субъект Российской Федерации
          </label>
          <Select passState={subjectHandler} data={subjects} />
        </div>
        <div className="in">
          <label>
            <span>*</span>Населенный пункт
          </label>
          <Input
            type="text"
            name="punct"
            value={values.punct}
            onChange={changeHandler}
          />
        </div>
        <div className="in">
          <label>
            <span>*</span>Наименование учебного заведения
          </label>
          <Input
            type="text"
            name="graduate"
            value={values.graduate}
            onChange={changeHandler}
          />
        </div>

        <div className="in">
          <label>
            <span>*</span>Язык работы
          </label>
          <Select passState={languageHandler} data={languages} />
        </div>
        {language === "нет в списке" && (
          <div className="in">
            <label>
              <span>*</span>Укажите язык работы, если его не было в списке выше
            </label>
            <Input
              type="text"
              name="language2"
              value={values.language2}
              onChange={changeHandler}
            />
          </div>
        )}
        <div className="in">
          <label>
            <span>*</span>Выбор номинации
          </label>
          <div className="check-box">
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Изобразительное искусство"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Декоративно-прикладное искусство"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Фотография в национальном костюме"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Хореографическое искусство (народные танцы)"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Вокальное искусство (народные песни)"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Театральное искусство (отрывок из постановки народных сказок, легенд и т.п.)"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Литературно-музыкальная композиция"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Художественное слово (декламация на родном языке)"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Эссе"
                passState={nominationHandler}
              />
            </div>
            <div className="box">
              <CheckboxNominations
                indicator={nomination}
                label="Презентация"
                passState={nominationHandler}
              />
            </div>
          </div>
        </div>
        <div className="in">
          <label>
            Ссылка на работу в номинациях, предполагающих приложение ссылок
          </label>
          <Input />
        </div>
        <div className="in">
          <Button
            text="Прикрепить работу"
            type="button"
            onClick={pickHandler}
          />
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
            {/* <Checkbox passState={emptyHandler} label="один вариант" /> */}
          </div>
        </div>
        <div className="in curator">
          <label>
            <span>*</span>Количество кураторов
          </label>
          {/* <Select passState={curatorsAmountHanler} /> */}
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
            onChange={(phone) => setPhone({ phone })}
          />
        </div>
        <div className="in">
          <label>
            <span>*</span>Согласие с условиями конкурса
          </label>
          <p className="term-link" onClick={() => setTerm(!term)}>
            {!term
              ? "Развернуть условия конкурса"
              : "Свернуть условия конкурса"}
          </p>
          {term && (
            <div className="term">
              <p className="term-text">
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Коварных языком свой эта предупреждал
                рыбного за оксмокс толку всеми она но ipsum семь над рукописи
                составитель проектах, на берегу коварный? Пустился собрал живет
                скатился если, большого вершину, снова пояс букв агентство
                жаренные большой. Скатился, но текст которой прямо это наш ты
                вдали выйти! Эта пояс своих парадигматическая гор себя силуэт.
                Всеми, взгляд она оксмокс напоивший lorem, дороге себя
                возвращайся, несколько решила которое первую пустился переписали
                вдали до однажды большой буквоград на берегу назад подпоясал
                встретил ты своих вершину. Однажды, lorem! Силуэт? Грустный
                запятых жаренные решила речью, бросил безорфографичный, вершину
                заголовок безопасную своих толку предупреждал она? Знаках
                залетают толку ему, имени своих ее не составитель. Свой коварных
                силуэт диких выйти прямо до? Буквенных ее заглавных оксмокс
                диких от всех жаренные не власти даль силуэт первую вершину
                имеет своего правилами, мир снова всеми по всей страну над
                бросил переулка ручеек на берегу наш толку. Толку, журчит.
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Коварных языком свой эта предупреждал
                рыбного за оксмокс толку всеми она но ipsum семь над рукописи
                составитель проектах, на берегу коварный? Пустился собрал живет
                скатился если, большого вершину, снова пояс букв агентство
                жаренные большой. Скатился, но текст которой прямо это наш ты
                вдали выйти! Эта пояс своих парадигматическая гор себя силуэт.
                Всеми, взгляд она оксмокс напоивший lorem, дороге себя
                возвращайся, несколько решила которое первую пустился переписали
                вдали до однажды большой буквоград на берегу назад подпоясал
                встретил ты своих вершину. Однажды, lorem! Силуэт? Грустный
                запятых жаренные решила речью, бросил безорфографичный, вершину
                заголовок безопасную своих толку предупреждал она? Знаках
                залетают толку ему, имени своих ее не составитель. Свой коварных
                силуэт диких выйти прямо до? Буквенных ее заглавных оксмокс
                диких от всех жаренные не власти даль силуэт первую вершину
                имеет своего правилами, мир снова всеми по всей страну над
                бросил переулка ручеек на берегу наш толку. Толку, журчит.
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Коварных языком свой эта предупреждал
                рыбного за оксмокс толку всеми она но ipsum семь над рукописи
                составитель проектах, на берегу коварный? Пустился собрал живет
                скатился если, большого вершину, снова пояс букв агентство
                жаренные большой. Скатился, но текст которой прямо это наш ты
                вдали выйти! Эта пояс своих парадигматическая гор себя силуэт.
                Всеми, взгляд она оксмокс напоивший lorem, дороге себя
                возвращайся, несколько решила которое первую пустился переписали
                вдали до однажды большой буквоград на берегу назад подпоясал
                встретил ты своих вершину. Однажды, lorem! Силуэт? Грустный
                запятых жаренные решила речью, бросил безорфографичный, вершину
                заголовок безопасную своих толку предупреждал она? Знаках
                залетают толку ему, имени своих ее не составитель. Свой коварных
                силуэт диких выйти прямо до? Буквенных ее заглавных оксмокс
                диких от всех жаренные не власти даль силуэт первую вершину
                имеет своего правилами, мир снова всеми по всей страну над
                бросил переулка ручеек на берегу наш толку. Толку, журчит.
              </p>
            </div>
          )}
          {/* <Checkbox
          passState={emptyHandler}
          label="Согласен с условиями конкурса"
        /> */}
        </div>
        <div className="in">
          <label>
            <span>*</span>Согласие на обработку персональных данных
          </label>

          {/* <Checkbox
          passState={emptyHandler}
          label="Согласен на обработку персональных данных"
        /> */}
        </div>
        <div className="actions">
          <Button text="Отправить заявку" />
        </div>
      </form>
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
  }
  .check-group {
    display: flex;
    flex-wrap: wrap;
    .box {
      width: 140px;
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
