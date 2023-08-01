import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Select from "../../components-special/Select";
import Button from "../../components-special/Button";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../components-special/Checkbox";
import CheckboxNominations from "../../components-special/CheckboxNominations";
import CheckboxTarif from "../../components-special/CheckboxTarif";
import PhoneInput from "react-phone-input-2";
import CheckboxAgreement from "../../components-special/CheckboxAgreement";
import { subjects, languages, curators } from "../../data/data-order";

const ChildrenOrder = () => {
  const { user, currentOrder } = useSelector((store) => store.user);
  console.log(currentOrder);

  const initialState = {
    email: user.email,
    phone: user.phone,
    name: "",
    punct: "",
    graduate: "",
    language2: "",
    link: "",
  };

  const initialStateCurators = {
    cf1: "",
    cd1: "",
    cf2: "",
    cd2: "",
    cf3: "",
    cd3: "",
  };

  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const filePickerRef2 = useRef();

  const [term, setTerm] = useState(false);

  const [values, setValues] = useState(initialState);
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [nomination, setNomination] = useState("");
  const [tarif, setTarif] = useState("");
  const [curatorsAmount, setCuratorsAmount] = useState();
  const [cur, setCur] = useState(initialStateCurators);
  const [phone, setPhone] = useState(initialState.phone);
  const [agreement, setAgreement] = useState(false);
  const [condition, setCondition] = useState(false);
  console.log(agreement);
  console.log(condition);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const changeCuratorHandler = (e) => {
    setCur({ ...cur, [e.target.name]: e.target.value });
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
      setFile2(pickedFile2);
      return;
    }
  };

  const subjectHandler = (state) => {
    setSubject(state);
  };

  const ageHandler = (data) => {
    setAge(data);
  };

  const curatorsAmountHanler = (amount) => {
    if (amount !== curatorsAmount) {
      setCur(initialStateCurators);
    }
    setCuratorsAmount(amount);
  };

  const languageHandler = (lang) => {
    setLanguage(lang);
  };

  const nominationHandler = (data) => {
    setNomination(data);
  };

  const tarifHandler = (data) => {
    setTarif(data);
  };

  const agreementHandler = (data) => {
    setAgreement(data);
  };

  const conditionHandler = (data) => {
    setCondition(data);
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
    console.log("link = ", values.link);
    console.log("curatorsAmount = ", curatorsAmount);
    console.log("curators = ", cur);
    console.log("nomination = ", nomination);
    console.log("tarif = ", tarif);
    console.log("email = ", values.email);
    console.log("phone = ", phone);
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
            {currentOrder.childNom_1 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_1}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_2 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_2}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_3 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_3}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_4 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_4}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_5 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_5}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_6 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_6}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_7 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_7}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_8 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_8}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_9 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_9}
                  passState={nominationHandler}
                />
              </div>
            )}
            {currentOrder.childNom_10 !== "undefined" && (
              <div className="box">
                <CheckboxNominations
                  indicator={nomination}
                  label={currentOrder.childNom_10}
                  passState={nominationHandler}
                />
              </div>
            )}
          </div>
        </div>
        <div className="in">
          <label>
            Ссылка на работу в номинациях, предполагающих приложение ссылок
          </label>
          <Input
            type="text"
            name="link"
            value={values.link}
            onChange={changeHandler}
          />
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
        <div className="in curator">
          <label>
            <span>*</span>Количество кураторов
          </label>
          <Select passState={curatorsAmountHanler} data={curators} />
          {/* <Curators amount={curatorsAmount} passSet={curatorsHandler} /> */}
          {curatorsAmount === "1" && (
            <div className="curator-amount">
              <Input
                placeholder="ФИО куратора 1"
                type="text"
                name="cf1"
                value={cur.cf1}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="Должность куратора 1"
                type="text"
                name="cd1"
                onChange={changeCuratorHandler}
                value={cur.cd1}
              />
            </div>
          )}
          {curatorsAmount === "2" && (
            <div className="curator-amount">
              <Input
                placeholder="ФИО куратора 1"
                type="text"
                name="cf1"
                value={cur.cf1}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="Должность куратора 1"
                type="text"
                name="cd1"
                value={cur.cd1}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="ФИО куратора 2"
                type="text"
                name="cf2"
                value={cur.cf2}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="Должность куратора 2"
                type="text"
                name="cd2"
                value={cur.cd2}
                onChange={changeCuratorHandler}
              />
            </div>
          )}
          {curatorsAmount === "3" && (
            <div className="curator-amount">
              <Input
                placeholder="ФИО куратора 1"
                type="text"
                name="cf1"
                value={cur.cf1}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="Должность куратора 1"
                type="text"
                name="cd1"
                value={cur.cd1}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="ФИО куратора 2"
                type="text"
                name="cf2"
                value={cur.cf2}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="Должность куратора 2"
                type="text"
                name="cd2"
                value={cur.cd2}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="ФИО куратора 3"
                type="text"
                name="cf3"
                value={cur.cf3}
                onChange={changeCuratorHandler}
              />
              <Input
                placeholder="Должность куратора 3"
                type="text"
                name="cd3"
                value={cur.cd3}
                onChange={changeCuratorHandler}
              />
            </div>
          )}
        </div>
        <div className="in">
          <label>
            <span>*</span>Тариф
          </label>
          <div>
            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Одиночный участник"
            />
            <div className="about-tarif">
              <p className="include-about">
                Общий наградной пакет: "Одиночный участник". Оплачивается 450
                рублей. Включает:{" "}
              </p>
              <p className="include">● Диплом в электронном варианте</p>
              <p className="include">
                ● Благодарность куратору в электронном варианте
              </p>
            </div>
            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Соавторство"
            />
            <div className="about-tarif">
              <p className="include-about">
                Наградной пакет «Соавторство»: задействовано не более 3-х
                авторов. Оплачивается по 450 руб. за каждого участника.
                Включает:
              </p>
              <p className="include">
                ● Диплом в электронном варианте на каждого участника
              </p>
              <p className="include">
                ● Благодарность куратору в электронном варианте
              </p>
            </div>
            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Коллективный"
            />
            <div className="about-tarif">
              <p className="include-about">
                Наградной пакет «Коллективный»: задействован творческий
                коллектив более 3-х человек. Оплачивается 800 руб. Включает:
              </p>
              <p className="include">
                ● Коллективный диплом (победителя, лауреата или участника) в
                электронном варианте
              </p>
              <p className="include">
                ● Благодарность руководителю работы в электронном варианте – 1
                шт.
              </p>
            </div>
            <div className="about-tarif">
              <p className="include small">
                * Работы, в которых участвуют 2 и более руководителя,
                оплачиваются + 100 рублей к стоимости оргвзноса за каждого
                руководителя.
              </p>
            </div>
          </div>
        </div>
        <div className="in">
          <label>
            <span>*</span>Квитанция об оплате
          </label>
          <div className="in">
            <Button text="Загрузить" type="button" onClick={pickHandler2} />
            <input
              type="file"
              style={{ display: "none" }}
              // accept=".pdf"
              ref={filePickerRef2}
              onChange={pickedHandler2}
            />
            {file2 && <p className="file-name">{file2.name}</p>}
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
          <CheckboxAgreement
            passState={agreementHandler}
            label="Согласен с условияями конкурса"
          />
        </div>
        <div className="in">
          <label>
            <span>*</span>Согласие на обработку персональных данных
          </label>

          <CheckboxAgreement
            passState={conditionHandler}
            label="Согласен на обработку персональных данных"
          />
        </div>
        <div className="actions">
          <Button text="Отправить заявку" disabled={!agreement || !condition} />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;

  .in {
    margin: 1rem 0;
    margin-bottom: 2rem;
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
  .about-tarif {
    margin-bottom: 1rem;
    color: var(--clr-primary-4);
    font-style: italic;
    .include-about {
      margin-bottom: 1rem;
    }
    .include {
    }
  }
  .small {
    font-size: 0.8rem;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
  @media (min-width: 992px) {
    .about-tarif {
      margin-left: 2rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default ChildrenOrder;
