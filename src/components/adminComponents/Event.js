import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Button from "../../components-special/Button";
import { MdDelete } from "react-icons/md";
import { createEvent } from "../../features/adminSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AdminCheckboxNomination from "../../components-special/AdminCheckboxNomination";

const initialState = {
  name: "",
  date1: "",
  date2: "",
};

const Event = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [values, setValues] = useState(initialState);

  const [previewURL, setpreviewURL] = useState();

  const filePickerRef = useRef();
  const filePickerRefImage = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [childNom_1, setChildNom_1] = useState();
  console.log(childNom_1);
  const [childNom_2, setChildNom_2] = useState();
  const [childNom_3, setChildNom_3] = useState();
  const [childNom_4, setChildNom_4] = useState();
  const [childNom_5, setChildNom_5] = useState();
  const [childNom_6, setChildNom_6] = useState();
  const [childNom_7, setChildNom_7] = useState();
  const [childNom_8, setChildNom_8] = useState();
  const [childNom_9, setChildNom_9] = useState();
  const [childNom_10, setChildNom_10] = useState();

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

  const [adultNom_1, setAdultNom_1] = useState();
  const [adultNom_2, setAdultNom_2] = useState();
  const [adultNom_3, setAdultNom_3] = useState();
  const [adultNom_4, setAdultNom_4] = useState();
  const [adultNom_5, setAdultNom_5] = useState();
  const [adultNom_6, setAdultNom_6] = useState();
  const [adultNom_7, setAdultNom_7] = useState();

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

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formData = new FormData();
  formData.append("file", file);
  formData.append("image", image);
  formData.append("name", values.name);
  formData.append("date1", values.date1);
  formData.append("date2", values.date2);
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
    if (!file || !image || !values.name || !values.date1 || !values.date2) {
      toast.error("Введите все значения");
      return;
    } else {
      dispatch(createEvent(formData));
      console.log(childNom_1);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <div className="name">
          <label>
            <span>*</span>Название мероприятия111
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
        <div className="nominations">
          <label>
            <span>*</span>Список номинаций для детей
          </label>
          <div className="check-group">
            <div className="box">
              <AdminCheckboxNomination
                label="Изобразительное искусство"
                type="children"
                passState={childrenNominationHandler_1}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Декоративно-прикладное искусство"
                type="children"
                passState={childrenNominationHandler_2}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Фотография в национальном костюме"
                type="children"
                passState={childrenNominationHandler_3}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Хореографическое искусство (народные танцы)"
                type="children"
                passState={childrenNominationHandler_4}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Вокальное искусство (народные песни)"
                type="children"
                passState={childrenNominationHandler_5}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Театральное искусство (отрывок из постановки народных сказок, легенд и т.п.)"
                type="children"
                passState={childrenNominationHandler_6}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Литературно-музыкальная композиция"
                type="children"
                passState={childrenNominationHandler_7}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Художественное слово (декламация на родном языке)"
                type="children"
                passState={childrenNominationHandler_8}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Эссе"
                type="children"
                passState={childrenNominationHandler_9}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Презентация"
                type="children"
                passState={childrenNominationHandler_10}
              />
            </div>
          </div>
          <label>
            <span>*</span>Список номинаций для педагогов
          </label>
          <div className="check-group">
            <div className="box">
              <AdminCheckboxNomination
                label="Декламация литературных произведений по тематике конкурса (проза или стихи)"
                type="adult"
                passState={adultNominationHandler_1}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Фото в национальном костюме"
                type="adult"
                passState={adultNominationHandler_2}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Вокал – исполнение на родном языке"
                type="adult"
                passState={adultNominationHandler_3}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Научно-методическая разработка: конспект урока на родном языке, принятый и заверенный образовательной организацией"
                type="adult"
                passState={adultNominationHandler_4}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Передовой опыт — презентация: использование инновационных технологий обучения на уроках родного языка"
                type="adult"
                passState={adultNominationHandler_5}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Фрагмент внеклассного мероприятия по теме родного языка"
                type="adult"
                passState={adultNominationHandler_6}
              />
            </div>
            <div className="box">
              <AdminCheckboxNomination
                label="Изобразительное искусство"
                type="adult"
                passState={adultNominationHandler_7}
              />
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
