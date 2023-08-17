import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Button from "../../components-special/Button";
import { MdDelete } from "react-icons/md";
import {
  createEvent,
  getNom,
  childNominationHandlerClean,
  adultNominationHandlerClean,
} from "../../features/adminSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CheckboxChild from "../../components-special/Checkbox-child";
import CheckboxAdult from "../../components-special/Checkbox-adult";

const initialState = {
  name: "",
  date1: "",
  date2: "",
};

const Event = () => {
  useEffect(() => {
    dispatch(getNom());
  }, []);

  useEffect(() => {
    dispatch(childNominationHandlerClean());
    dispatch(adultNominationHandlerClean());
  }, []);

  const { nominations, childNominations, adultNominations } = useSelector(
    (store) => store.admin
  );
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [values, setValues] = useState(initialState);

  const [previewURL, setpreviewURL] = useState();

  const filePickerRef = useRef();
  const filePickerRefImage = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  formData.append("childNom", childNominations);
  formData.append("adultNom", adultNominations);
  formData.append("tarif_1", values.tarif_1);
  formData.append("tarif_2", values.tarif_2);
  formData.append("tarif_3", values.tarif_3);
  formData.append("supervisor", values.supervisor);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !file ||
      !image ||
      !values.name ||
      !values.date1 ||
      !values.date2 ||
      !values.tarif_1 ||
      !values.tarif_2 ||
      !values.tarif_3 ||
      !values.supervisor
    ) {
      toast.error("Введите все значения");
      return;
    } else {
      dispatch(createEvent(formData));
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
        {nominations && (
          <div className="nominations">
            <label>
              <span>*</span>Список номинаций для детей
            </label>
            {nominations.map((n) => (
              <CheckboxChild key={n._id} label={n.name} />
            ))}
            <div className="check-group"></div>
            <label>
              <span>*</span>Список номинаций для педагогов
            </label>
            {nominations.map((n) => (
              <CheckboxAdult key={n._id} label={n.name} />
            ))}
            <div className="check-group"></div>
          </div>
        )}
        {/* ___________________________________________________________ */}
        <div className="extra">
          <label>
            <span>*</span>Стоимость тарифа "Одиночный участник"
          </label>
          <Input
            type="text"
            name="tarif_1"
            value={values.tarif_1}
            onChange={changeHandler}
          />
          <label>
            <span>*</span>Стоимость тарифа "Соавторство"
          </label>
          <Input
            type="text"
            name="tarif_2"
            value={values.tarif_2}
            onChange={changeHandler}
          />
          <label>
            <span>*</span>Стоимость тарифа "Коллективный"
          </label>
          <Input
            type="text"
            name="tarif_3"
            value={values.tarif_3}
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
        </div>
        {/* ___________________________________________________________ */}

        <div className="create">
          <Button text="Создать мероприятие" type="submit" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
    flex-wrap: wrap;
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
  .check-group {
    margin-bottom: 1rem;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    input {
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

  button {
    width: 150px;
  }
`;
export default Event;
