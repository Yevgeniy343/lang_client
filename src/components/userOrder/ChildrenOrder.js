import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Select from "../../components-special/Select";
import Button from "../../components-special/Button";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../components-special/Checkbox";
import CheckboxTarif from "../../components-special/CheckboxTarif";
import PhoneInput from "react-phone-input-2";
import CheckboxAgreement from "../../components-special/CheckboxAgreement";
import { subjects, languages, curators } from "../../data/data-order";
import _ from "lodash";
import CheckboxNomUser from "../../components-special/CheckboxNomUser";
import { createChildOrder } from "../../features/user/userSlise";

const data = [
  { id: 2, label: "2" },
  { id: 3, label: "3" },
];

const ChildrenOrder = ({ passCalculate }) => {
  const { user, currentOrder, noms, nomPul, nomins } = useSelector(
    (store) => store.user
  );

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  const randomNumber = _.random(100000, 999999);
  const number = currentMonth + "/" + currentDay + "/" + randomNumber + "-1";

  const thisNom = noms.find((n) => n.eventId === currentOrder.id);
  const thisNomLF = nomins.find((n) => n.name === nomPul);

  const array = _.split(thisNom.childNoms, ",");

  const initialState = {
    email: user.email,
    phone: user.phone,
    name: "",
    name2: "",
    name3: "",
    punct: "",
    graduate: "",
    language2: "",
    link: "",
    extra1: "",
    extra2: "",
    extra3: "",
  };

  const initialStateCurators = {
    cf1: "",
    cd1: "",
    cf2: "",
    cd2: "",
    cf3: "",
    cd3: "",
  };
  const defaultValue = 1;

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

  const [curatorsAmount, setCuratorsAmount] = useState(defaultValue);
  const [cur, setCur] = useState(initialStateCurators);
  const [phone, setPhone] = useState(initialState.phone);
  const [agreement, setAgreement] = useState(false);
  const [condition, setCondition] = useState(false);
  const [part, setPart] = useState("");

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

  const tarifHandler = (data) => {
    setTarif(data);
  };

  const agreementHandler = (data) => {
    setAgreement(data);
  };

  const conditionHandler = (data) => {
    setCondition(data);
  };

  const formData = new FormData();
  formData.append("file", file ? file : "false");
  formData.append("file2", file2 ? file2 : "false");
  formData.append("eventId", currentOrder.id);
  formData.append("tarif", tarif);
  formData.append("name", values.name);
  formData.append("name2", values.name2);
  formData.append("name3", values.name3);
  formData.append("part", part);
  formData.append("curatorsAmount", curatorsAmount);
  formData.append("cur", JSON.stringify(cur));
  formData.append("age", age);
  formData.append("subject", subject);
  formData.append("punct", values.punct);
  formData.append("graduate", values.graduate);
  formData.append("nomPul", nomPul);
  formData.append("language", language);
  formData.append("language2", values.language2);
  formData.append("link", values.link);
  formData.append("email", values.email);
  formData.append("phone", phone?.phone);
  formData.append("extra1", values.extra1);
  formData.append("extra2", values.extra2);
  formData.append("extra3", values.extra3);
  formData.append("number", number);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !values.name ||
      !subject ||
      !values.email ||
      !phone.phone ||
      !language
    ) {
      toast.error("Введите все значения");
      return;
    } else {
      dispatch(createChildOrder(formData));
    }
    // console.log("--------------");
    // console.log("tarif = ", tarif);
    // console.log("name = ", values.name);
    // console.log("name2 = ", values.name2);
    // console.log("name3 = ", values.name3);
    // console.log("part = ", part);
    // console.log("curatorsAmount = ", curatorsAmount);
    // console.log("curators = ", cur);
    // console.log("age = ", age);
    // console.log("subject = ", subject);
    // console.log("punct = ", values.punct);
    // console.log("graduate = ", values.graduate);
    // console.log("nomination = ", nomPul);
    // console.log("language = ", language);
    // console.log("language2 = ", values.language2);
    // console.log("link = ", values.link);
    // console.log("file 1 ", file);
    // console.log("file 2 ", file2);
    // console.log("email = ", values.email);
    // console.log("phone = ", phone);
    // console.log("extra1 = ", values.extra1);
    // console.log("extra2 = ", values.extra2);
    // console.log("extra3 = ", values.extra3);
  };

  const amountPartHandler = (part) => {
    setPart(part);
  };

  useEffect(() => {
    let calculate;
    const defaultAmount = curatorsAmount !== undefined ? curatorsAmount : 1;
    const defaultPart = part !== undefined ? part : 1;
    if (tarif === "Одиночный участник") {
      calculate =
        currentOrder.tarif_1 +
        (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
      passCalculate(calculate);
    } else if (tarif === "Соавторство") {
      calculate =
        currentOrder.tarif_2 * defaultPart +
        (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
      passCalculate(calculate);
    } else if (tarif === "Коллективный") {
      calculate =
        currentOrder.tarif_3 +
        (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
      passCalculate(calculate);
    } else if (!tarif) {
      calculate = 0;
      passCalculate(calculate);
    }
  }, [tarif, curatorsAmount, part]);

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <div className="in">
          <label>
            <span>*</span>Вариант участия
          </label>
          <div>
            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Одиночный участник"
            />
            <div className="about-tarif">
              <p className="include-about">
                Общий наградной пакет: "Одиночный участник". Оплачивается{" "}
                {currentOrder.tarif_1} руб. Включает:{" "}
              </p>
              <p className="include">● Диплом в электронном варианте</p>
              <p className="include">
                ● Благодарность куратору в электронном варианте
              </p>
              <p className="include small">
                * Работы, в которых участвуют 2 и более руководителя,
                оплачиваются + {currentOrder.supervisor} руб. к стоимости
                оргвзноса за каждого руководителя.
              </p>
            </div>
            {tarif === "Одиночный участник" && (
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
            )}

            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Соавторство"
            />
            <div className="about-tarif">
              <p className="include-about">
                Наградной пакет «Соавторство»: задействовано не более 3-х
                авторов. {currentOrder.tarif_2} руб. руб. за каждого участника.
                Включает:
              </p>
              <p className="include">
                ● Диплом в электронном варианте на каждого участника
              </p>
              <p className="include">
                ● Благодарность куратору в электронном варианте
              </p>
              <p className="include small">
                * Работы, в которых участвуют 2 и более руководителя,
                оплачиваются + {currentOrder.supervisor} руб. к стоимости
                оргвзноса за каждого руководителя.
              </p>
            </div>
            {tarif === "Соавторство" && (
              <div className="in">
                <label>
                  <span>*</span> Количество участников
                </label>
                <Select passState={amountPartHandler} data={data} />
              </div>
            )}
            {tarif === "Соавторство" && (
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
            )}
            {(part === "2" || part === "3") && tarif === "Соавторство" && (
              <div className="in">
                <label>
                  <span>*</span>Фамилия и имя второго конкурсанта
                </label>
                <Input
                  type="text"
                  name="name2"
                  value={values.name2}
                  onChange={changeHandler}
                />
              </div>
            )}
            {part === "3" && tarif === "Соавторство" && (
              <div className="in">
                <label>
                  <span>*</span>Фамилия и имя третьего конкурсанта
                </label>
                <Input
                  type="text"
                  name="name3"
                  value={values.name3}
                  onChange={changeHandler}
                />
              </div>
            )}
            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Коллективный"
            />
            <div className="about-tarif">
              <p className="include-about">
                Наградной пакет «Коллективный»: задействован творческий
                коллектив более 3-х человек. {currentOrder.tarif_3} руб.
                Включает:
              </p>
              <p className="include">
                ● Коллективный диплом (победителя, лауреата или участника) в
                электронном варианте
              </p>
              <p className="include">
                ● Благодарность руководителю работы в электронном варианте – 1
                шт.
              </p>
              <p className="include small">
                * Работы, в которых участвуют 2 и более руководителя,
                оплачиваются + {currentOrder.supervisor} руб. к стоимости
                оргвзноса за каждого руководителя.
              </p>
            </div>
          </div>
          {tarif === "Коллективный" && (
            <div className="in">
              <label>
                <span>*</span>Название коллектива
              </label>
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={changeHandler}
              />
            </div>
          )}
        </div>

        <div className="in curator">
          <label>
            <span>*</span>Количество кураторов
          </label>
          <Select passState={curatorsAmountHanler} data={curators} />
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
            <span>*</span>Выбор номинации
          </label>
          {array.map((n, index) => (
            <CheckboxNomUser key={index} label={n} indicator={nomPul} />
          ))}
        </div>

        {thisNomLF?.language && (
          <div>
            <div className="in">
              <label>
                <span>*</span>Язык работы
              </label>
              <Select passState={languageHandler} data={languages} />
            </div>
            {language === "нет в списке" && (
              <div className="in">
                <label>
                  <span>*</span>Укажите язык работы, если его не было в списке
                  выше
                </label>
                <Input
                  type="text"
                  name="language2"
                  value={values.language2}
                  onChange={changeHandler}
                />
              </div>
            )}
          </div>
        )}

        {thisNomLF?.link && (
          <div className="in">
            <label>
              <span>*</span>
              Ссылка на работу
            </label>
            <Input
              type="text"
              name="link"
              value={values.link}
              onChange={changeHandler}
            />
          </div>
        )}
        {thisNomLF?.file && (
          <div className="in">
            <label>
              <span>*</span>Прикрепить работу
            </label>
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
        )}
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
        {/* --------------------------------------------------------------------- */}
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
        {currentOrder.extra1 && (
          <div className="in">
            <label>
              <span>*</span>
              {currentOrder.extra1}
            </label>
            <Input
              type="text"
              name="extra1"
              value={values.extra1}
              onChange={changeHandler}
            />
          </div>
        )}
        {currentOrder.extra2 && (
          <div className="in">
            <label>
              <span>*</span>
              {currentOrder.extra2}
            </label>
            <Input
              type="text"
              name="extra2"
              value={values.extra2}
              onChange={changeHandler}
            />
          </div>
        )}
        {currentOrder.extra3 && (
          <div className="in">
            <label>
              <span>*</span>
              {currentOrder.extra3}
            </label>
            <Input
              type="text"
              name="extra3"
              value={values.extra3}
              onChange={changeHandler}
            />
          </div>
        )}
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
      <div className="pay"></div>
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
    margin-top: 1rem;
  }
  form {
    margin-bottom: 2rem;
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
