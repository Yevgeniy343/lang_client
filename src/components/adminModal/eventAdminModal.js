import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  eventModalHandler,
  editEvents,
  deleteEvents,
  getNom,
  childNominationHandlerClean,
  adultNominationHandlerClean,
} from "../../features/adminSlice";
import Input from "../../components-special/Input";
import Button from "../../components-special/Button";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Axios from "axios";
import FileDownload from "js-file-download";
import Loading from "../Loading";
import CheckboxChild from "../../components-special/Checkbox-child";
import CheckboxAdult from "../../components-special/Checkbox-adult";

const { REACT_APP_URL_API } = process.env;

const EventAdminModal = () => {
  useEffect(() => {
    dispatch(getNom());
  }, []);
  useEffect(() => {
    dispatch(childNominationHandlerClean());
    dispatch(adultNominationHandlerClean());
  }, []);

  const {
    currentEvent,
    isLoading,
    nominations,
    nomE,
    childNominations,
    adultNominations,
  } = useSelector((store) => store.admin);

  const thisNom = nomE.find((n) => n.eventId === currentEvent.id);

  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const filePickerRefImage = useRef();

  const initialState = {
    name: currentEvent.name,
    date1: currentEvent.date1,
    date2: currentEvent.date2,
    tarif_1: currentEvent.tarif_1,
    tarif_2: currentEvent.tarif_2,
    tarif_3: currentEvent.tarif_3,
    tarif_1a: currentEvent.tarif_1a,
    tarif_2a: currentEvent.tarif_2a,
    tarif_3a: currentEvent.tarif_3a,
    supervisor: currentEvent.supervisor,
    diplom: currentEvent.diplom,
    pdf: currentEvent.pdf,
    image: currentEvent.image,
    extra1: currentEvent.extra1 ? currentEvent.extra1 : "",
    extra2: currentEvent.extra2 ? currentEvent.extra2 : "",
    extra3: currentEvent.extra3 ? currentEvent.extra3 : "",
  };

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${initialState.pdf}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, initialState.pdf);
    });
  };

  const [values, setValues] = useState(initialState);
  const [file, setFile] = useState();
  const [previewURL, setpreviewURL] = useState();
  const [image, setImage] = useState();
  const [del, setDel] = useState(false);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickImageHandler2 = () => {
    filePickerRefImage.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      return;
    }
  };

  const pickedHandlerImage = (e) => {
    let pickedFileImage;
    if (e.target.files && e.target.files.length === 1) {
      pickedFileImage = e.target.files[0];
      setImage(pickedFileImage);
      return;
    }
  };

  useEffect(() => {
    if (!image) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setpreviewURL(fileReader.result);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  const imageRemoveHandler = () => {
    setImage(null);
    setpreviewURL(null);
  };

  const formData = new FormData();
  formData.append("file", file ? file : "false");
  formData.append("image", image ? image : "false");
  formData.append("name", values.name);
  formData.append("date1", values.date1);
  formData.append("date2", values.date2);
  formData.append("id", currentEvent.id);
  formData.append("childNoms", childNominations);
  formData.append("adultNoms", adultNominations);
  formData.append("nomId", thisNom._id);
  formData.append("extra1", values.extra1);
  formData.append("extra2", values.extra2);
  formData.append("extra3", values.extra3);
  formData.append("tarif_1", values.tarif_1);
  formData.append("tarif_2", values.tarif_2);
  formData.append("tarif_3", values.tarif_3);
  formData.append("tarif_1a", values.tarif_1a);
  formData.append("tarif_2a", values.tarif_2a);
  formData.append("tarif_3a", values.tarif_3a);
  formData.append("supervisor", values.supervisor);
  formData.append("diplom", values.diplom);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !values.name ||
      !values.date1 ||
      !values.date2 ||
      !values.tarif_1 ||
      !values.tarif_2 ||
      !values.tarif_3 ||
      !values.tarif_1a ||
      !values.tarif_2a ||
      !values.tarif_3a ||
      !values.supervisor ||
      !values.diplom
    ) {
      toast.error("Введите все значения");
      return;
    } else {
      dispatch(editEvents(formData));
      // setTimeout(() => {
      //   dispatch(eventModalHandler(false));
      // }, 1000);
    }
  };

  const deleteEnentHandler = () => {
    dispatch(deleteEvents({ id: currentEvent.id }));
    dispatch(eventModalHandler(false));
  };

  return (
    <Wrapper>
      <div className="modal">
        <div
          className="close"
          onClick={() => dispatch(eventModalHandler(false))}
        >
          <AiOutlineClose />
        </div>
        <form className="content" onSubmit={onSubmit}>
          <div className="name">
            <label>
              <span>*</span>Название мероприятия
            </label>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={changeHandler}
            />
          </div>
          <div className="date">
            <div className="date1">
              <label>
                <span>*</span>Дата начала
              </label>
              <Input
                type="date"
                name="date1"
                value={values.date1}
                onChange={changeHandler}
              />
            </div>
            <div className="date2">
              <label>
                <span>*</span>Дата окончания
              </label>
              <Input
                type="date"
                name="date2"
                value={values.date2}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="upload-pfd">
            <input
              type="file"
              style={{ display: "none" }}
              accept=".pdf"
              ref={filePickerRef}
              onChange={pickedHandler}
            />
            <div className="actions">
              <p className="file-name">
                <span className="notice">загруженный файл</span>{" "}
                <div onClick={downloadHandler}>
                  <AiOutlineFilePdf />
                </div>
              </p>
              <Button
                text="Заменить pdf"
                type="button"
                onClick={pickImageHandler}
              />
              {file && (
                <p className="file-name">
                  <span className="notice">новый файл:</span>
                  {file.name}
                </p>
              )}
              {file && <MdDelete onClick={() => setFile(null)} />}
            </div>
          </div>
          <div className="upload-picture">
            <input
              type="file"
              accept=".jpeg,.jpg,.png"
              style={{ display: "none" }}
              ref={filePickerRefImage}
              onChange={pickedHandlerImage}
            />
            <div className="actions">
              <Button
                text="Заменить картинку"
                type="button"
                onClick={pickImageHandler2}
              />
              <div className="picture">
                {isLoading && <Loading />}
                <img
                  src={`${REACT_APP_URL_API}/${initialState.image}`}
                  alt=""
                />

                <img src={previewURL} alt="" />
                {image && <MdDelete onClick={imageRemoveHandler} />}
              </div>
            </div>
          </div>

          <div className="nominations">
            <label>
              <span>*</span>Список номинаций для детей
            </label>
            {nominations?.map((n) => (
              <CheckboxChild key={n._id} label={n.name} />
            ))}

            <label>
              <span>*</span>Список номинаций для педагогов
            </label>
            {nominations.map((n) => (
              <CheckboxAdult key={n._id} label={n.name} />
            ))}
          </div>

          <div className="extra">
            <label>Дополнительные поля</label>
            <Input
              type="text"
              name="extra1"
              value={values.extra1}
              onChange={changeHandler}
              placeholder="Название поля"
            />
            <Input
              type="text"
              name="extra2"
              value={values.extra2}
              onChange={changeHandler}
              placeholder="Название поля"
            />
            <Input
              type="text"
              name="extra3"
              value={values.extra3}
              onChange={changeHandler}
              placeholder="Название поля"
            />
          </div>

          {/* ___________________________________________________________ */}

          <div className="extra">
            <label>
              <span>*</span>Стоимость тарифа "Одиночный участник" (для детей)
            </label>
            <Input
              type="text"
              name="tarif_1"
              value={values.tarif_1}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость тарифа "Соавторство" (для детей)
            </label>
            <Input
              type="text"
              name="tarif_2"
              value={values.tarif_2}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость тарифа "Коллективный" (для детей)
            </label>
            <Input
              type="text"
              name="tarif_3"
              value={values.tarif_3}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость тарифа "Одиночный участник" (для взрослых)
            </label>
            <Input
              type="text"
              name="tarif_1a"
              value={values.tarif_1a}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость тарифа "Соавторство" (для взрослых)
            </label>
            <Input
              type="text"
              name="tarif_2a"
              value={values.tarif_2a}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость тарифа "Коллективный" (для взрослых)
            </label>
            <Input
              type="text"
              name="tarif_3a"
              value={values.tarif_3a}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость дополнительного руководителя
            </label>
            <Input
              type="text"
              name="supervisor"
              value={values.supervisor}
              onChange={changeHandler}
            />
            <label>
              <span>*</span>Стоимость диплома для куратора (руководителя)
            </label>
            <Input
              type="text"
              name="diplom"
              value={values.diplom}
              onChange={changeHandler}
            />
          </div>
          {/* ___________________________________________________________ */}

          <div className="create">
            <Button text="Сохраниить изменения" type="submit" />
          </div>
        </form>
        <div className="delete">
          <p onClick={() => setDel(!del)}>удалить мероприятие</p>
          {del && <p onClick={deleteEnentHandler}>подтверждаю</p>}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;
  .modal {
    overflow-x: hidden;
    background-color: white;
    width: 95vw;
    height: 90%;
    overflow-y: auto;
    border-radius: 10px;
  }
  .close {
    display: flex;
    justify-content: end;
    margin: 1rem;
    svg {
      font-size: 2rem;
      color: var(--main-0);
      transition: var(--transition2);
      cursor: pointer;
      :hover {
        color: var(--main-1);
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    p {
      color: var(--main-0);
      font-size: 1.3rem;
    }
  }
  input {
    margin-bottom: 1rem;
    width: 300px;
  }
  .date {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    width: 300px;
    button {
      margin: 1rem 0;
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
    svg {
      font-size: 1.5rem;
      cursor: pointer;
      transition: var(--transition2);
      color: var(--main-0);

      :hover {
        color: var(--clr-red-dark);
      }
    }
  }
  .notice {
    color: var(--main-0);
    font-size: 1rem;
  }
  .picture {
    img {
      width: 200px;
      height: 150px;
      margin-right: 1rem;
    }
  }
  .create {
    margin: 1rem 0;
    button {
      width: 100%;
    }
  }
  .delete {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;
    margin-bottom: 2rem;
    p {
      transition: var(--transition2);
      cursor: pointer;
      :hover {
        color: var(--clr-red-light);
      }
    }
  }
  .nominations {
    align-self: flex-start;
    margin: 1rem;
    .check-group {
      margin-bottom: 1rem;
    }
  }
  .extra {
    align-self: flex-start;
    margin: 1rem;
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    input,
    textarea {
      width: 500px;
    }
    .date {
      flex-direction: row;
      input {
        width: 240px;
      }
    }
    .date2 {
      input {
        margin-left: 20px;
      }
    }
    .actions {
      width: 500px;
    }
  }
  @media (min-width: 992px) {
    .modal {
      width: 580px;
      padding: 1rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }

  span {
    color: var(--clr-red-dark);
  }
  label {
    font-size: 0.9rem;
    margin: 1rem;
    color: var(--clr-grey-5);
  }
  textarea {
    box-sizing: border-box;
    padding: 1rem;
    border: none;
    background: var(--gray-0);
    border-radius: 5px;
    font-size: 100%;
    color: var(--main-0);
    resize: none;

    ::placeholder {
      color: var(--gray-1);
    }
    :focus-visible {
      outline: none;
    }

    :hover {
      ::placeholder {
        transition: 0.5s;
      }
    }
  }
  button {
    width: 150px;
  }
`;
export default EventAdminModal;
