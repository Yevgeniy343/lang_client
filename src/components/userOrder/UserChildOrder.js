import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import FileDownload from "js-file-download";
import Axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { VscEdit } from "react-icons/vsc";
import { FcEditImage, FcCheckmark } from "react-icons/fc";
import Input from "../../components-special/Input";
import TextArea from "../../components/TextArea";
import { editChildrenOrder } from "../../features/user/userSlise";
import Button from "../../components-special/Button";
import Select2 from "../../components-special/Select2";
import { ages, subjects, languages } from "../../data/data-order";

const { REACT_APP_URL_API } = process.env;

const UserChildOrder = ({ orderId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { events, childOrders, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const thisOrder = childOrders.find((child) => child._id === orderId);

  const initialState = {
    name: thisOrder?.name,
    subject: thisOrder?.subject,
    phone: thisOrder?.phone,
    email: thisOrder?.email,
    tarif: thisOrder?.tarif,
    name2: thisOrder?.name2,
    name3: thisOrder?.name3,
    punct: thisOrder?.punct,
    graduate: thisOrder?.graduate,
    language: thisOrder?.language,
    language2: thisOrder?.language2,
    link: thisOrder?.link,
    extra1: thisOrder?.extra,
    extra2: thisOrder?.extra2,
    extra3: thisOrder?.extra3,
    cur: thisOrder?.cur,
    pert: thisOrder?.part,
    age: thisOrder?.age,
    curatorsAmount: thisOrder?.curatorsAmount,
    nomPul: thisOrder?.nomPul,
    number: thisOrder?.number,
  };

  const [age, setAge] = useState();
  const [subject, setSubject] = useState();
  const [language, setLanguage] = useState();
  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${thisOrder.file}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, thisOrder.file);
    });
  };

  const ageHandler = (a) => {
    setAge(a);
  };

  const subjectHandler = (a) => {
    setSubject(a);
  };

  const languageHandler = (a) => {
    setLanguage(a);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editChildrenOrder({
        orderId: orderId,
        name: values.name,
        name2: values.name2,
        name3: values.name3,
        tarif: values.tarif,
        part: values.part,
        curatorsAmount: values.curatorsAmount,
        cur: values.cur,
        // age: values.age,
        age: age,
        // subject: values.subject,
        subject: subject,
        punct: values.punct,
        graduate: values.graduate,
        nomPul: values.nomPul,
        // language: values.language,
        language: language,
        language2: values.language2,
        link: values.link,
        email: values.email,
        phone: values.phone,
        extra1: values.extra1,
        extra2: values.extra2,
        extra3: values.extra3,
        userId: user._id,
      })
    );
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {!isEdit && (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 1,
            }}
          >
            <div className="element">
              <p className="key">id</p>
              <p className="value">{initialState?.number}</p>
            </div>
            <div className="element">
              <p className="key">Фамилия и имя конкурсанта</p>
              <p className="value">{initialState?.name}</p>
            </div>
            {initialState?.name2 && (
              <div className="element">
                <p className="key">Фамилия и имя второго конкурсанта</p>
                <p className="value">{initialState?.name2}</p>
              </div>
            )}
            {initialState?.name3 && (
              <div className="element">
                <p className="key">Фамилия и имя третьего конкурсанта</p>
                <p className="value">{initialState?.name3}</p>
              </div>
            )}
            <div className="element">
              <p className="key">Номинация</p>
              <p className="value">{initialState?.nomPul}</p>
            </div>
            {initialState?.link && (
              <div className="element">
                <p className="key">Ссылка на работу</p>
                <p className="value">
                  <a href={initialState?.link} target="blank">
                    {initialState?.link}
                  </a>
                </p>
              </div>
            )}
            {thisOrder?.file && (
              <div className="element">
                <p className="key">Работа</p>
                <p className="value link" onClick={downloadHandler}>
                  скачать
                </p>
              </div>
            )}
            {thisOrder?.file2 && (
              <div className="element">
                <p className="key">Квитанция</p>
                <p className="value link" onClick={downloadHandler}>
                  скачать
                </p>
              </div>
            )}
            <div className="element">
              <p className="key">Возрастная категория</p>
              <p className="value">{initialState?.age}</p>
            </div>
            <div className="element">
              <p className="key">Субъект Российской Федерации</p>
              <p className="value">{initialState?.subject}</p>
            </div>
            <div className="element">
              <p className="key">Населенный пункт</p>
              <p className="value">{initialState?.punct}</p>
            </div>
            <div className="element">
              <p className="key">Наименование учебного заведения</p>
              <p className="value">{initialState?.graduate}</p>
            </div>
            {initialState?.language && (
              <div className="element">
                <p className="key">Язык работы</p>
                <p className="value">{initialState?.language}</p>
              </div>
            )}
            {initialState?.language2 && (
              <div className="element">
                <p className="key">Язык работы</p>
                <p className="value">{initialState?.language2}</p>
              </div>
            )}
            <div className="element">
              <p className="key">Количество кураторов</p>
              <p className="value">{initialState?.curatorsAmount}</p>
            </div>
            <div className="element">
              <p className="key">Информация по кураторам</p>
              <p className="value">{initialState?.cur}</p>
            </div>
            <div className="element">
              <p className="key">email</p>
              <p className="value">{initialState?.email}</p>
            </div>
            <div className="element">
              <p className="key">телефон</p>
              <p className="value">{initialState?.phone}</p>
            </div>
            <div className="element">
              <p className="key">Вариант участия</p>
              <p className="value">{initialState?.tarif}</p>
            </div>
            {initialState?.extra1 && (
              <div className="element">
                <p className="key">Дополнительное поле 1</p>
                <p className="value">{initialState?.extra1}</p>
              </div>
            )}
            {initialState?.extra2 && (
              <div className="element">
                <p className="key">Дополнительное поле 2</p>
                <p className="value">{initialState?.extra2}</p>
              </div>
            )}
            {initialState?.extra3 && (
              <div className="element">
                <p className="key">Дополнительное поле 3</p>
                <p className="value">{initialState?.extra3}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEdit && (
          <motion.form
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 1,
            }}
            className="content"
            onSubmit={onSubmit}
          >
            <div className="in">
              <label>Фамилия и имя конкурсанта</label>
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Возрастная категория</label>
              {/* <Input
                type="text"
                name="age"
                value={values.age}
                onChange={changeHandler}
              /> */}
              <Select2
                passState={ageHandler}
                data={ages}
                def={initialState.age}
              />
            </div>
            <div className="in">
              <label>Cубъект Российской Федерации</label>
              {/* <Input
                type="text"
                name="subject"
                value={values.subject}
                onChange={changeHandler}
              /> */}
              <Select2
                passState={subjectHandler}
                data={subjects}
                def={initialState.subject}
              />
            </div>
            <div className="in">
              <label>Населенный пункт</label>
              <Input
                type="text"
                name="punct"
                value={values.punct}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Наименование учебного заведения</label>
              <Input
                type="text"
                name="graduate"
                value={values.graduate}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Номинация</label>
              <Input
                type="text"
                name="nomPul"
                value={values.nomPul}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Язык работы</label>
              {/* <Input
                type="text"
                name="language"
                value={values.language}
                onChange={changeHandler}
              /> */}
              <Select2
                passState={languageHandler}
                data={languages}
                def={initialState.language}
              />
            </div>
            <div className="in">
              <label>Язык работы, если его нет в списке</label>
              <Input
                type="text"
                name="language2"
                value={values.language2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Ссылка на работу</label>
              <Input
                type="text"
                name="link"
                value={values.link}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Количество кураторов</label>
              <Input
                type="text"
                name="curatorsAmount"
                value={values.curatorsAmount}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Информация по кураторам</label>
              <TextArea
                type="text"
                name="cur"
                value={values.cur}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Телефон</label>
              <Input
                type="text"
                name="phone"
                value={values.phone}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Вариант участия</label>
              <Input
                type="text"
                name="tarif"
                value={values.tarif}
                onChange={changeHandler}
              />
            </div>
            {values.tarif !== "Коллективный" && (
              <div className="in">
                <label>Фамилия и имя второго конкурсанта</label>
                <Input
                  type="text"
                  name="name2"
                  value={values.name2}
                  onChange={changeHandler}
                />
              </div>
            )}
            {values.tarif !== "Коллективный" && (
              <div className="in">
                <label>Фамилия и имя третьего конкурсанта</label>
                <Input
                  type="text"
                  name="name3"
                  value={values.name3}
                  onChange={changeHandler}
                />
              </div>
            )}
            <div className="in">
              <label>Дополнительное поле 1</label>
              <Input
                type="text"
                name="extra1"
                value={values.extra1}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Дополнительное поле 2</label>
              <Input
                type="text"
                name="extra2"
                value={values.extra2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Дополнительное поле 3</label>
              <Input
                type="text"
                name="extra3"
                value={values.extra3}
                onChange={changeHandler}
              />
            </div>
            <div className="actions">
              <Button text="Сохранить" type="submit" />
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <motion.div className="edit">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{ duration: 3, delay: 1.5 }}
          className="icon"
          onClick={() => setIsEdit(!isEdit)}
        >
          <VscEdit />
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 410px;
  overflow-y: auto;
  margin: 1rem;
  position: relative;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--main-0);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--main-2);
    border-radius: 5px;
  }
  .info {
    margin: 1rem;
  }
  .element {
    display: flex;
    p {
      margin: 0.5rem 0.3rem;
    }
    .value {
      color: var(--main-0);
      word-break: break-all;
    }
  }
  .link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .curators {
    display: flex;
    flex-direction: column;
  }
  .edit {
    position: sticky;
    bottom: 40px;
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
    .icon {
      border: 1px solid var(--main-0);
      border-radius: 50%;
      box-shadow: var(--bsh-1);
      transition: box-shadow 0.6s;
      :hover {
        box-shadow: var(--bsh-2);
      }
      :active {
        box-shadow: var(--bsh-1);
      }
      svg {
        font-size: 1.2rem;
        cursor: pointer;
        color: var(--main-0);
        margin: 0.4rem;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .in {
    width: 300px;
    margin: 0.5rem;
  }
  label {
    margin-left: 1rem;
  }
  span {
    color: var(--clr-red-dark);
  }
  input {
    height: 40px;
    padding: 0;
  }
  .curators {
    display: flex;
    flex-direction: column;
  }
  .actions {
    margin: 2rem;
    width: 95%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .edit {
      bottom: 40px;
      margin-right: 4rem;
      .icon {
        svg {
          font-size: 2rem;
          margin: 0.7rem;
        }
      }
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default UserChildOrder;
