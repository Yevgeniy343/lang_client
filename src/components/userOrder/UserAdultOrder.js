import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import FileDownload from "js-file-download";
import Axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { VscEdit } from "react-icons/vsc";
import Input from "../../components-special/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components-special/Button";
import { editAdultOrder } from "../../features/user/userSlise";
import Select2 from "../../components-special/Select2";
import { subjects, languages } from "../../data/data-order";
import toast from "react-hot-toast";
import _ from "lodash";
import ButtonDark from "../../components-special/ButtonDark";

const { REACT_APP_URL_API } = process.env;

const UserAdultOrder = ({ orderId, passState }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { events, adultOrders, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const thisOrder = adultOrders.find((adult) => adult._id === orderId);

  const thisEvent = _.find(events, (ev) => ev._id === thisOrder.eventId);

  const today = new Date();
  const HoursAgo36 = new Date(today.getTime() - 36 * 60 * 60 * 1000); // Subtract 36 hours in milliseconds

  const initialState = {
    name: thisOrder?.name,
    name2: thisOrder?.name2,
    name3: thisOrder?.name3,
    subject: thisOrder?.subject,
    subject2: thisOrder?.subject2,
    subject3: thisOrder?.subject3,
    status: thisOrder?.status,
    job: thisOrder?.job,
    job2: thisOrder?.job2,
    job3: thisOrder?.job3,
    job_title: thisOrder?.job_title,
    job_title2: thisOrder?.job_title2,
    job_title3: thisOrder?.job_title3,
    internship: thisOrder?.internship,
    internship2: thisOrder?.internship2,
    internship3: thisOrder?.internship3,
    phone: thisOrder?.phone,
    email: thisOrder?.email,
    tarif: thisOrder?.tarif,
    punct: thisOrder?.punct,
    punct2: thisOrder?.punct2,
    punct3: thisOrder?.punct3,
    graduate: thisOrder?.graduate,
    language: thisOrder?.language,
    language2: thisOrder?.language2,
    link: thisOrder?.link,
    extra1: thisOrder?.extra1,
    extra2: thisOrder?.extra2,
    extra3: thisOrder?.extra3,
    cur: thisOrder?.cur,
    pert: thisOrder?.part,
    curatorsAmount: thisOrder?.curatorsAmount,
    nomPul: thisOrder?.nomPul,
    number: thisOrder?.number,
  };
  const [age, setAge] = useState();
  const [subject, setSubject] = useState();
  const [subject2, setSubject2] = useState();
  const [subject3, setSubject3] = useState();
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

  const subjectHandler = (a) => {
    setSubject(a);
  };
  const subject2Handler = (a) => {
    setSubject2(a);
  };
  const subject3Handler = (a) => {
    setSubject3(a);
  };

  const languageHandler = (a) => {
    setLanguage(a);
  };

  useEffect(() => {
    if (isEdit === true) {
      toast("После редактирования нажмите кнопку СОХРАНИТЬ");
    }
  }, [isEdit]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editAdultOrder({
        orderId: orderId,
        name: values.name,
        name2: values.name2,
        name3: values.name3,
        tarif: values.tarif,
        part: values.part,
        curatorsAmount: values.curatorsAmount,
        cur: values.cur,
        subject: subject,

        // subject2: values.subject2,

        subject2: subject2,
        // subject3: values.subject3,
        subject3: subject3,
        status:
          initialState.status === "declined"
            ? "отредактировано владельцем"
            : "pending",
        punct: values.punct,
        punct2: values.punct2,
        punct3: values.punct3,
        job: values.job,
        job2: values.job2,
        job3: values.job3,
        job_title: values.job_title,
        job_title2: values.job_title2,
        job_title3: values.job_title3,
        internship: values.internship,
        internship2: values.internship2,
        internship3: values.internship3,
        graduate: values.graduate,
        nomPul: values.nomPul,
        language: values.language,
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

  const curators = _.replace(
    initialState?.cur,
    /cf1|cd1|cf2|"|:|cf3|cd2|cf2|cd3|cf3|{|}|,/g,
    ""
  );

  return (
    <Wrapper>
      <ButtonDark text="Свернуть" onClick={() => passState(false)} />
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
            <div className="element">
              <p className="key">Номинация</p>
              <p className="value">{initialState?.nomPul}</p>
            </div>
            <div className="element">
              <p className="key">Ссылка на работу</p>
              <p className="value">
                <a href={initialState?.link} target="_blank">
                  {initialState?.link}
                </a>
              </p>
            </div>
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
              <p className="key">Занимаемая должность</p>
              <p className="value">{initialState?.job_title}</p>
            </div>
            <div className="element">
              <p className="key">Место работы</p>
              <p className="value">{initialState?.job}</p>
            </div>
            <div className="element">
              <p className="key">Населенный пункт</p>
              <p className="value">{initialState?.punct}</p>
            </div>
            <div className="element">
              <p className="key">Субъект Российской Федерации</p>
              <p className="value">{initialState?.subject}</p>
            </div>
            <div className="element">
              <p className="key">Стаж педагогичческой работы</p>
              <p className="value">{initialState?.internship}</p>
            </div>
            {initialState?.name2 && (
              <div className="element">
                <p className="key">Фамилия имя отчество второго участника</p>
                <p className="value">{initialState?.name2}</p>
              </div>
            )}
            {initialState?.job_title2 && (
              <div className="element">
                <p className="key">Занимаемая должность второго участника</p>
                <p className="value">{initialState?.job_title2}</p>
              </div>
            )}
            {initialState?.job2 && (
              <div className="element">
                <p className="key">Место работы второго участника</p>
                <p className="value">{initialState?.job2}</p>
              </div>
            )}
            {initialState?.punct2 && (
              <div className="element">
                <p className="key">Населенный пункт второго участника</p>
                <p className="value">{initialState?.punct2}</p>
              </div>
            )}
            {initialState?.subject2 && (
              <div className="element">
                <p className="key">
                  Cубъект Российской Федерации второго участника
                </p>
                <p className="value">{initialState?.subject2}</p>
              </div>
            )}
            {initialState?.internship2 && (
              <div className="element">
                <p className="key">
                  Стаж педагогической работы второго участника
                </p>
                <p className="value">{initialState?.internship2}</p>
              </div>
            )}
            {initialState?.name3 && (
              <div className="element">
                <p className="key">Фамилия имя отчество третьего участника</p>
                <p className="value">{initialState?.name3}</p>
              </div>
            )}
            {initialState?.job_title3 && (
              <div className="element">
                <p className="key">Занимаемая должность третьего участника</p>
                <p className="value">{initialState?.job_title3}</p>
              </div>
            )}
            {initialState?.job3 && (
              <div className="element">
                <p className="key">Место работы третьего участника</p>
                <p className="value">{initialState?.job3}</p>
              </div>
            )}
            {initialState?.punct3 && (
              <div className="element">
                <p className="key">Населенный пункт третьего участника</p>
                <p className="value">{initialState?.punct3}</p>
              </div>
            )}
            {initialState?.subject3 && (
              <div className="element">
                <p className="key">
                  Cубъект Российской Федерации третьего участника
                </p>
                <p className="value">{initialState?.subject3}</p>
              </div>
            )}
            {initialState?.internship3 && (
              <div className="element">
                <p className="key">
                  Стаж педагогической работы третьего участника
                </p>
                <p className="value">{initialState?.internship3}</p>
              </div>
            )}
            <div className="element">
              <p className="key">Наименование учебного заведения</p>
              <p className="value">{initialState?.graduate}</p>
            </div>
            {initialState.language && (
              <div className="element">
                <p className="key">Язык работы</p>
                <p className="value">{initialState?.language}</p>
              </div>
            )}
            {initialState.language2 && (
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
              <p className="value">{curators}</p>
            </div>
            <div className="element">
              <p className="key">Email</p>
              <p className="value">{initialState?.email}</p>
            </div>
            <div className="element">
              <p className="key">Телефон</p>
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
              <label>Номинация</label>
              <Input
                type="text"
                name="nomPul"
                value={values.nomPul}
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
              <label>Занимаемая должность</label>
              <Input
                type="text"
                name="job_title"
                value={values.job_title}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Место работы</label>
              <Input
                type="text"
                name="job"
                value={values.job}
                onChange={changeHandler}
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
              <label>Стаж педагогичческой работы</label>
              <Input
                type="text"
                name="internship"
                value={values.internship}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Фамилия имя отчество второго участника</label>
              <Input
                type="text"
                name="name2"
                value={values.name2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Занимаемая должность второго участника</label>
              <Input
                type="text"
                name="job_title2"
                value={values.job_title2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Место работы второго участника</label>
              <Input
                type="text"
                name="job2"
                value={values.job2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Населенный пункт второго участника</label>
              <Input
                type="text"
                name="punct2"
                value={values.punct2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Cубъект Российской Федерации второго участника</label>
              {/* <Input
                type="text"
                name="subject"
                value={values.subject2}
                onChange={changeHandler}
              /> */}
              <Select2
                passState={subject2Handler}
                data={subjects}
                def={initialState.subject2}
              />
            </div>
            <div className="in">
              <label>Стаж педагогической работы второго участника</label>
              <Input
                type="text"
                name="internship2"
                value={values.internship2}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Фамилия имя отчество третьего участника</label>
              <Input
                type="text"
                name="name3"
                value={values.name3}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Занимаемая должность третьего участника</label>
              <Input
                type="text"
                name="job_title3"
                value={values.job_title3}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Место работы третьего участника</label>
              <Input
                type="text"
                name="job3"
                value={values.job3}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Населенный пункт третьего участника</label>
              <Input
                type="text"
                name="punct3"
                value={values.punct3}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>Cубъект Российской Федерации третьего участника</label>
              {/* <Input
                type="text"
                name="subject3"
                value={values.subject3}
                onChange={changeHandler}
              /> */}
              <Select2
                passState={subject3Handler}
                data={subjects}
                def={initialState.subject3}
              />
            </div>
            <div className="in">
              <label>Стаж педагогической работы третьего участника</label>
              <Input
                type="text"
                name="internship3"
                value={values.internship3}
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
              <label>email</label>
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <label>телефон</label>
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
          </motion.form>
        )}
      </AnimatePresence>
      <motion.div className="edit">
        {HoursAgo36 > new Date(thisEvent?.date2) && (
          <p className="noedit">
            К сожалению, Вы не можете редактировать заявку. Конкурс окончен
          </p>
        )}
        {HoursAgo36 < new Date(thisEvent?.date2) && (
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
        )}
        <div className="actions">
          <Button text="Сохранить" type="submit" />
        </div>
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
    margin-right: 4rem;
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
        font-size: 2rem;
        cursor: pointer;
        color: var(--main-0);
        margin: 0.7rem;
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
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
    position: sticky;
    width: 95%;
    /* top: 200px; */
    /* bottom: 10px; */
    right: 100px;
  }
  .noedit {
    border: 1px solid var(--main-0);
    padding: 0.5rem;
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
export default UserAdultOrder;
