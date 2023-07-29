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
  input,
  textarea {
    margin-bottom: 1rem;
    width: 300px;
  }
  .date {
    display: flex;
    flex-direction: column;
    input {
      /* margin: 0 10px; */
      margin-bottom: 1rem;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    label {
      margin: 0 1rem;
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
