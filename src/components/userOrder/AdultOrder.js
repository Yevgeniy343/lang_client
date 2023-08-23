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
import { subjects, languages } from "../../data/data-order";

import _ from "lodash";

const data = [
  { id: 2, label: "2" },
  { id: 3, label: "3" },
];

const AdultOrder = () => {
  const { user, currentOrder, noms, nomPul, nomins } = useSelector(
    (store) => store.user
  );

  const initialState = {
    email: user.email,
    phone: user.phone,
    job_title: user.job_title,
    job: user.job,
    internship: "",
    job_title2: "",
    internship2: "",
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

  const [values, setValues] = useState(initialState);
  const [tarif, setTarif] = useState("");
  const [part, setPart] = useState("");
  const [subject, setSubject] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("--------------");
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
    setSubject(state);
  };

  const subjectHandler3 = (state) => {
    setSubject(state);
  };

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
                    <span>*</span>Стаж педагогичческой работы
                  </label>
                  <Input
                    type="text"
                    name="internship"
                    value={values.internship}
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
                    <span>*</span>Место работы
                  </label>
                  <Input
                    type="text"
                    name="job"
                    value={values.job}
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
                    <span>*</span>Фамилия и имя участника
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
                    <span>*</span>Стаж педагогичческой работы
                  </label>
                  <Input
                    type="text"
                    name="internship"
                    value={values.internship}
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
                    <span>*</span>Место работы
                  </label>
                  <Input
                    type="text"
                    name="job"
                    value={values.job}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            )}
            {(part === "2" || part === "3") && tarif === "Соавторство" && (
              <div>
                <div className="in">
                  <label>
                    <span>*</span>Фамилия и имя второго участника
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
                    <span>*</span>Стаж педагогичческой работы второго участника
                  </label>
                  <Input
                    type="text"
                    name="internship2"
                    value={values.internship2}
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
                    <span>*</span>Место работы второго участника
                  </label>
                  <Input
                    type="text"
                    name="job2"
                    value={values.job2}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            )}
            {part === "3" && tarif === "Соавторство" && (
              <div>
                <div className="in">
                  <label>
                    <span>*</span>Фамилия и имя третьего участника
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
                    name="job_title2"
                    value={values.job_title3}
                    onChange={changeHandler}
                  />
                </div>
                <div className="in">
                  <label>
                    <span>*</span>Стаж педагогичческой работы третьего участника
                  </label>
                  <Input
                    type="text"
                    name="internship2"
                    value={values.internship3}
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
                    <span>*</span>Населенный пункт третьего участника
                  </label>
                  <Input
                    type="text"
                    name="punct3"
                    value={values.punc3}
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
