import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  eventModalHandler,
  editEvents,
  deleteEvents,
} from "../../features/adminSlice";
import Input from "../../components-special/Input";
import Button from "../../components-special/Button";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Axios from "axios";
import FileDownload from "js-file-download";
import Loading from "../Loading";
import AdminCheckboxNominationEdit from "../../components-special/AdminCheckboxNominationEdit";

const { REACT_APP_URL_API } = process.env;

const EventAdminModal = () => {
  const { isEventModal, currentEvent, isLoading } = useSelector(
    (store) => store.admin
  );

  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const filePickerRefImage = useRef();

  const initialState = {
    name: currentEvent.name,
    date1: currentEvent.date1,
    date2: currentEvent.date2,
    pdf: currentEvent.pdf,
    image: currentEvent.image,
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

  const [childNom_1, setChildNom_1] = useState(currentEvent.childNom_1);
  console.log(childNom_1);
  const [childNom_2, setChildNom_2] = useState(currentEvent.childNom_2);
  console.log(childNom_2);
  const [childNom_3, setChildNom_3] = useState(currentEvent.childNom_3);
  console.log(childNom_3);
  const [childNom_4, setChildNom_4] = useState(currentEvent.childNom_4);
  console.log(childNom_4);
  const [childNom_5, setChildNom_5] = useState(currentEvent.childNom_5);
  console.log(childNom_5);
  const [childNom_6, setChildNom_6] = useState(currentEvent.childNom_6);
  console.log(childNom_6);
  const [childNom_7, setChildNom_7] = useState(currentEvent.childNom_7);
  console.log(childNom_7);
  const [childNom_8, setChildNom_8] = useState(currentEvent.childNom_8);
  console.log(childNom_8);
  const [childNom_9, setChildNom_9] = useState(currentEvent.childNom_9);
  console.log(childNom_9);
  const [childNom_10, setChildNom_10] = useState(currentEvent.childNom_10);
  console.log(childNom_10);

  const childrenNominationHandler_1 = (data) => {
    setChildNom_1(data);
  };
  const childrenNominationHandler_2 = (data) => {
    setChildNom_2(data);
  };
  const childrenNominationHandler_3 = (data) => {
    setChildNom_3(data);
  };
  const childrenNominationHandler_4 = (data) => {
    setChildNom_4(data);
  };
  const childrenNominationHandler_5 = (data) => {
    setChildNom_5(data);
  };
  const childrenNominationHandler_6 = (data) => {
    setChildNom_6(data);
  };
  const childrenNominationHandler_7 = (data) => {
    setChildNom_7(data);
  };
  const childrenNominationHandler_8 = (data) => {
    setChildNom_8(data);
  };
  const childrenNominationHandler_9 = (data) => {
    setChildNom_9(data);
  };
  const childrenNominationHandler_10 = (data) => {
    setChildNom_10(data);
  };

  const [adultNom_1, setAdultNom_1] = useState(currentEvent.adultNom_1);

  const [adultNom_2, setAdultNom_2] = useState(currentEvent.adultNom_2);

  const [adultNom_3, setAdultNom_3] = useState(currentEvent.adultNom_);

  const [adultNom_4, setAdultNom_4] = useState(currentEvent.adultNom_4);

  const [adultNom_5, setAdultNom_5] = useState(currentEvent.adultNom_5);

  const [adultNom_6, setAdultNom_6] = useState(currentEvent.adultNom_6);

  const [adultNom_7, setAdultNom_7] = useState(currentEvent.adultNom_7);

  const adultNominationHandler_1 = (data) => {
    setAdultNom_1(data);
  };
  const adultNominationHandler_2 = (data) => {
    setAdultNom_2(data);
  };
  const adultNominationHandler_3 = (data) => {
    setAdultNom_3(data);
  };
  const adultNominationHandler_4 = (data) => {
    setAdultNom_4(data);
  };
  const adultNominationHandler_5 = (data) => {
    setAdultNom_5(data);
  };
  const adultNominationHandler_6 = (data) => {
    setAdultNom_6(data);
  };
  const adultNominationHandler_7 = (data) => {
    setAdultNom_7(data);
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
  formData.append("childNom_1", childNom_1);
  formData.append("childNom_2", childNom_2);
  formData.append("childNom_3", childNom_3);
  formData.append("childNom_4", childNom_4);
  formData.append("childNom_5", childNom_5);
  formData.append("childNom_6", childNom_6);
  formData.append("childNom_7", childNom_7);
  formData.append("childNom_8", childNom_8);
  formData.append("childNom_9", childNom_9);
  formData.append("childNom_10", childNom_10);
  formData.append("adultNom_1", adultNom_1);
  formData.append("adultNom_2", adultNom_2);
  formData.append("adultNom_3", adultNom_3);
  formData.append("adultNom_4", adultNom_4);
  formData.append("adultNom_5", adultNom_5);
  formData.append("adultNom_6", adultNom_6);
  formData.append("adultNom_7", adultNom_7);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.date1 || !values.date2) {
      toast.error("Введите все значения");
      return;
    } else {
      dispatch(editEvents(formData));
      setTimeout(() => {
        dispatch(eventModalHandler(false));
      }, 1000);
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
            <div className="check-group">
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Изобразительное искусство"
                  type="children"
                  indicator={currentEvent.childNom_1}
                  passState={childrenNominationHandler_1}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Декоративно-прикладное искусство"
                  type="children"
                  indicator={currentEvent.childNom_2}
                  passState={childrenNominationHandler_2}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Фотография в национальном костюме"
                  type="children"
                  indicator={currentEvent.childNom_3}
                  passState={childrenNominationHandler_3}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Хореографическое искусство (народные танцы)"
                  type="children"
                  indicator={currentEvent.childNom_4}
                  passState={childrenNominationHandler_4}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Вокальное искусство (народные песни)"
                  type="children"
                  indicator={currentEvent.childNom_5}
                  passState={childrenNominationHandler_5}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Театральное искусство (отрывок из постановки народных сказок, легенд и т.п.)"
                  type="children"
                  indicator={currentEvent.childNom_6}
                  passState={childrenNominationHandler_6}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Литературно-музыкальная композиция"
                  type="children"
                  indicator={currentEvent.childNom_7}
                  passState={childrenNominationHandler_7}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Художественное слово (декламация на родном языке)"
                  type="children"
                  indicator={currentEvent.childNom_8}
                  passState={childrenNominationHandler_8}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Эссе"
                  type="children"
                  indicator={currentEvent.childNom_9}
                  passState={childrenNominationHandler_9}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Презентация"
                  type="children"
                  indicator={currentEvent.childNom_10}
                  passState={childrenNominationHandler_10}
                />
              </div>
            </div>
            <label>
              <span>*</span>Список номинаций для педагогов
            </label>
            <div className="check-group">
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Декламация литературных произведений по тематике конкурса (проза или стихи)"
                  type="adult"
                  indicator={currentEvent.adultNom_1}
                  passState={adultNominationHandler_1}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Фото в национальном костюме"
                  type="adult"
                  indicator={currentEvent.adultNom_2}
                  passState={adultNominationHandler_2}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Вокал – исполнение на родном языке"
                  type="adult"
                  indicator={currentEvent.adultNom_3}
                  passState={adultNominationHandler_3}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Научно-методическая разработка: конспект урока на родном языке, принятый и заверенный образовательной организацией"
                  type="adult"
                  indicator={currentEvent.adultNom_4}
                  passState={adultNominationHandler_4}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Передовой опыт — презентация: использование инновационных технологий обучения на уроках родного языка"
                  type="adult"
                  indicator={currentEvent.adultNom_5}
                  passState={adultNominationHandler_5}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Фрагмент внеклассного мероприятия по теме родного языка"
                  type="adult"
                  indicator={currentEvent.adultNom_6}
                  passState={adultNominationHandler_6}
                />
              </div>
              <div className="box">
                <AdminCheckboxNominationEdit
                  label="Изобразительное искусство"
                  type="adult"
                  indicator={currentEvent.adultNom_7}
                  passState={adultNominationHandler_7}
                />
              </div>
            </div>
          </div>
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
    margin: 1rem;
    .check-group {
      margin-bottom: 1rem;
    }
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
