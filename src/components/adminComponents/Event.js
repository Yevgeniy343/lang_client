import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Button from "../../components-special/Button";
import { MdDelete } from "react-icons/md";
import { createEvent } from "../../features/adminSlice";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  date1: "",
  date2: "",
  description: "",
};

const Event = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [values, setValues] = useState(initialState);

  const [previewURL, setpreviewURL] = useState();

  const filePickerRef = useRef();
  const filePickerRefImage = useRef();

  const dispatch = useDispatch();

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

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formData = new FormData();
  formData.append("file", file);
  formData.append("image", image);
  formData.append("name", values.name);
  formData.append("date1", values.date1);
  formData.append("date2", values.date2);
  formData.append("description", values.description);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !file ||
      !image ||
      values.name ||
      values.date1 ||
      values.data2 ||
      values.description
    ) {
      toast.error("Введите все значения");
      return;
    } else {
      dispatch(createEvent(formData));
      // setTimeout(() => {
      //   setpreviewURL(null);
      //   setImage(null);
      //   setFile(null);
      //   setValues(initialState);
      // }, 500);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
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
        <div className="description">
          <label>
            <span>*</span>Положение
          </label>
          <textarea
            rows="10"
            name="description"
            type="text"
            value={values.description}
            onChange={changeHandler}
          ></textarea>
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
            <Button
              text="Загрузить pdf"
              type="button"
              onClick={pickImageHandler}
            />
            {file && <p className="file-name">{file.name}</p>}
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
              text="Загрузить картинку"
              type="button"
              onClick={pickImageHandler2}
            />
            <div className="picture">
              <img src={previewURL} alt="" />
              {image && <MdDelete onClick={imageRemoveHandler} />}
            </div>
          </div>
        </div>
        <div className="create">
          <Button text="Создать мероприятие" type="submit" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  span {
    color: var(--clr-red-dark);
  }
  label {
    font-size: 0.9rem;
    margin: 1rem;
    color: var(--clr-grey-5);
  }
  .date {
    display: flex;
    flex-direction: column;
    input {
      /* margin: 0 10px; */
      margin-bottom: 1rem;
    }
  }
  input,
  textarea {
    margin-bottom: 1rem;
    width: 300px;
  }
  .actions {
    width: 300px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      margin-right: 1rem;
    }
    .file-name {
      color: var(--clr-grey-5);
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
  .picture {
    img {
      width: 200px;
    }
  }
  .create {
    margin: 1rem 0;
    button {
      width: 100%;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    label {
      margin: 0 1rem;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    input,
    textarea {
      width: 500px;
    }
    .actions {
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
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
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
export default Event;
