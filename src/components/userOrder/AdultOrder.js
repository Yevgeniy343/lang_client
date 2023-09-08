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
import CheckboxNomUser from "../../components-special/CheckboxNomUser2";
import { createAdultOrder } from "../../features/user/userSlise";

import _ from "lodash";

const data = [
  { id: 2, label: "2" },
  { id: 3, label: "3" },
];

const AdultOrder = ({ passCalculate }) => {
  const { user, currentOrder, noms, nomPul, nomins } = useSelector(
    (store) => store.user
  );

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  const randomNumber = _.random(100000, 999999);
  const number = currentMonth + "/" + currentDay + "/" + randomNumber + "-2";

  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const filePickerRef2 = useRef();

  const thisNom = noms.find((n) => n.eventId === currentOrder.id);
  const thisNomLF = nomins.find((n) => n.name === nomPul);

  const array = _.split(thisNom.adultNoms, ",");

  const initialState = {
    email: user.email,
    phone: user.phone,
    job_title: user.job_title,
    job: user.job,
    job_title2: "",
    job_title3: "",
    internship: "",
    internship2: "",
    internship3: "",
    job2: "",
    job3: "",
    name: "",
    name2: "",
    name3: "",
    punct: "",
    punct2: "",
    punct3: "",
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

  const [values, setValues] = useState(initialState);
  const [tarif, setTarif] = useState("");
  const [part, setPart] = useState("");
  const [subject, setSubject] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [extraDiplom, setExtraDiplom] = useState(false);
  const [curatorsAmount, setCuratorsAmount] = useState(defaultValue);

  const [cur, setCur] = useState(initialStateCurators);
  const [phone, setPhone] = useState(initialState.phone);
  const [agreement, setAgreement] = useState(false);
  const [term, setTerm] = useState(false);
  const [condition, setCondition] = useState(false);
  const [language, setLanguage] = useState("");
  const [file, setFile] = useState();
  const [file2, setFile2] = useState();

  console.log(extraDiplom);

  useEffect(() => {
    if (!extraDiplom) {
      setCuratorsAmount(1);
    }
  }, [extraDiplom]);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const changeCuratorHandler = (e) => {
    setCur({ ...cur, [e.target.name]: e.target.value });
  };

  const tarifHandler = (data) => {
    setTarif(data);
  };

  const amountPartHandler = (part) => {
    setPart(part);
  };

  const subjectHandler = (state) => {
    setSubject(state);
  };

  const subjectHandler2 = (state) => {
    setSubject2(state);
  };

  const subjectHandler3 = (state) => {
    setSubject3(state);
  };

  const extraDiplomHandler = (data) => {
    setExtraDiplom(data);
  };

  const curatorsAmountHanler = (amount) => {
    if (amount !== curatorsAmount) {
      setCur(initialStateCurators);
    }
    setCuratorsAmount(amount);
  };

  const agreementHandler = (data) => {
    setAgreement(data);
  };

  const conditionHandler = (data) => {
    setCondition(data);
  };

  const languageHandler = (lang) => {
    setLanguage(lang);
  };

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

  useEffect(() => {
    let calculate;
    const defaultAmount = curatorsAmount !== undefined ? curatorsAmount : 1;
    const defaultCurators = curatorsAmount !== undefined ? curatorsAmount : 1;
    const defaultPart = part !== undefined ? part : 1;
    if (extraDiplom) {
      if (tarif === "Одиночный участник") {
        calculate =
          defaultCurators * currentOrder.diplom +
          currentOrder.tarif_1a +
          (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
        passCalculate(calculate);
      } else if (tarif === "Соавторство") {
        calculate =
          defaultCurators * currentOrder.diplom +
          currentOrder.tarif_2a * defaultPart +
          (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
        passCalculate(calculate);
      } else if (tarif === "Коллективный") {
        calculate =
          defaultCurators * currentOrder.diplom +
          currentOrder.tarif_3a +
          (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
        passCalculate(calculate);
        console.log(calculate);
      } else if (!tarif) {
        calculate = 0;
        passCalculate(calculate);
      }
    } else {
      if (tarif === "Одиночный участник") {
        calculate =
          currentOrder.tarif_1a +
          (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
        passCalculate(calculate);
      } else if (tarif === "Соавторство") {
        calculate =
          currentOrder.tarif_2a * defaultPart +
          (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
        passCalculate(calculate);
      } else if (tarif === "Коллективный") {
        calculate =
          currentOrder.tarif_3a +
          (defaultAmount * currentOrder.supervisor - currentOrder.supervisor);
        console.log(calculate);
        passCalculate(calculate);
      } else if (!tarif) {
        calculate = 0;
        passCalculate(calculate);
      }
    }
  }, [tarif, curatorsAmount, part, extraDiplom]);

  // ___________________________________________________________________________

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
  formData.append("subject", subject);
  formData.append("subject2", subject2);
  formData.append("subject3", subject3);
  formData.append("punct", values.punct);
  formData.append("punct2", values.punct2);
  formData.append("punct3", values.punct3);
  formData.append("job", values.job);
  formData.append("job2", values.job2);
  formData.append("job3", values.job3);
  formData.append("job_title", values.job_title);
  formData.append("job_title2", values.job_title2);
  formData.append("job_title3", values.job_title3);
  formData.append("internship", values.internship);
  formData.append("internship2", values.internship2);
  formData.append("internship3", values.internship3);
  formData.append("graduate", values.graduate);
  formData.append("nomPul", nomPul);
  formData.append("language", language);
  formData.append("language2", values.language2);
  formData.append("link", values.link);
  formData.append("email", values.email);
  formData.append("phone", phone);
  formData.append("extra1", values.extra1);
  formData.append("extra2", values.extra2);
  formData.append("extra3", values.extra3);
  formData.append("number", number);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createAdultOrder(formData));
    console.log("--------------");
  };

  // ___________________________________________________________________________

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
                Оплата {currentOrder.tarif_1} руб.
              </p>
              <p className="include">● Диплом в электронном варианте</p>

              <p className="include small">
                * Работы, в которых участвуют 2 и более руководителя,
                оплачиваются + {currentOrder.supervisor} руб. к стоимости
                оргвзноса за каждого руководителя.
              </p>
            </div>
            {tarif === "Одиночный участник" && (
              <div>
                <div className="in">
                  <label>
                    <span>*</span>Фамилия имя отчество участника
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
                    <span>*</span>Занимаемая должность
                  </label>
                  <Input
                    type="text"
                    name="job_title"
                    value={values.job_title}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Место работы
                  </label>
                  <Input
                    type="text"
                    name="job"
                    value={values.job}
                    onChange={changeHandler}
                  />
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
                    <span>*</span>Субъект Российской Федерации
                  </label>
                  <Select passState={subjectHandler} data={subjects} />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Стаж педагогичческой работы
                  </label>
                  <Input
                    type="text"
                    name="internship"
                    value={values.internship}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            )}
            <CheckboxTarif
              indicator={tarif}
              passState={tarifHandler}
              label="Соавторство"
            />
            <div className="about-tarif">
              <p className="include-about">
                Оплата по {currentOrder.tarif_2} руб. за каждого участника.
              </p>
              <p className="include">
                ● Для работ не более 2-х авторов: входит диплом в электронном
                варианте на каждого участника
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
              <div>
                <div className="in">
                  <label>
                    <span>*</span>Фамилия имя отчество участника
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
                    <span>*</span>Занимаемая должность
                  </label>
                  <Input
                    type="text"
                    name="job_title"
                    value={values.job_title}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Место работы
                  </label>
                  <Input
                    type="text"
                    name="job"
                    value={values.job}
                    onChange={changeHandler}
                  />
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
                    <span>*</span>Субъект Российской Федерации
                  </label>
                  <Select passState={subjectHandler2} data={subjects} />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Стаж педагогической работы
                  </label>
                  <Input
                    type="text"
                    name="internship"
                    value={values.internship}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            )}
            {(part === "2" || part === "3") && tarif === "Соавторство" && (
              <div>
                <div className="in">
                  <label>
                    <span>*</span>Фамилия имя отчество второго участника
                  </label>
                  <Input
                    type="text"
                    name="name2"
                    value={values.name2}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Занимаемая должность второго участника
                  </label>
                  <Input
                    type="text"
                    name="job_title2"
                    value={values.job_title2}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Место работы второго участника
                  </label>
                  <Input
                    type="text"
                    name="job2"
                    value={values.job2}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Населенный пункт второго участника
                  </label>
                  <Input
                    type="text"
                    name="punct2"
                    value={values.punct2}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Субъект Российской Федерации второго участника
                  </label>
                  <Select passState={subjectHandler2} data={subjects} />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Стаж педагогической работы второго участника
                  </label>
                  <Input
                    type="text"
                    name="internship2"
                    value={values.internship2}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            )}
            {part === "3" && tarif === "Соавторство" && (
              <div>
                <div className="in">
                  <label>
                    <span>*</span>Фамилия имя отчество третьего участника
                  </label>
                  <Input
                    type="text"
                    name="name3"
                    value={values.name3}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Занимаемая должность третьего участника
                  </label>
                  <Input
                    type="text"
                    name="job_title3"
                    value={values.job_title3}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Место работы третьего участника
                  </label>
                  <Input
                    type="text"
                    name="job3"
                    value={values.job3}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Населенный пункт третьего участника
                  </label>
                  <Input
                    type="text"
                    name="punct3"
                    value={values.punct3}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Субъект Российской Федерации третьего
                    участника
                  </label>
                  <Select passState={subjectHandler3} data={subjects} />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Стаж педагогической работы третьего участника
                  </label>
                  <Input
                    type="text"
                    name="internship2"
                    value={values.internship3}
                    onChange={changeHandler}
                  />
                </div>
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
                коллектив от 3-х и более человек. {currentOrder.tarif_3} руб.
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
            <div>
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
                  <span>*</span>Субъект Российской Федерации
                </label>
                <Select passState={subjectHandler} data={subjects} />
              </div>
            </div>
          )}
        </div>
        <div className="in">
          <label>
            <span>*</span>Нужен ли дополнительный диплом для куратора
            (руководителя) работы?
          </label>
          <CheckboxAgreement passState={extraDiplomHandler} label="Да" />
        </div>
        {extraDiplom && (
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
                  placeholder="Должность и место работы куратора 1"
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
                  placeholder="Должность и место работы куратора 1"
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
                  placeholder="Должность и место работы куратора 2"
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
                  placeholder="Должность и место работы куратора 1"
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
                  placeholder="Должность и место работы куратора 2"
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
                  placeholder="Должность и место работы куратора 3"
                  type="text"
                  name="cd3"
                  value={cur.cd3}
                  onChange={changeCuratorHandler}
                />
              </div>
            )}
          </div>
        )}

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
          <Button
            text="Отправить заявку"
            type="submit"
            disabled={!agreement || !condition}
          />
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
export default AdultOrder;
