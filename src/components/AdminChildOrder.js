import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import _ from "lodash";
import FileDownload from "js-file-download";
import Axios from "axios";
import moment from "moment";

const { REACT_APP_URL_API } = process.env;

const AdminChildOrder = ({
  id,
  eventId,
  name,
  name2,
  name3,
  part,
  curatorsAmount,
  cur,
  age,
  subject,
  punct,
  graduate,
  nomPul,
  language,
  language2,
  file,
  file2,
  email,
  link,
  phone,
  extra1,
  extra2,
  extra3,
  createdAt,
}) => {
  const { events } = useSelector((store) => store.admin);

  const thisEvent = events?.find((ev) => ev._id === eventId);

  const curatorsList = _.chain(cur)
    .replace(/["]/g, "")
    .split(",")
    .chunk(1)
    .value();

  const downloadHandler = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${file}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, file);
    });
  };

  const downloadHandler2 = (e) => {
    e.preventDefault();
    Axios({
      url: `${REACT_APP_URL_API}/${file2}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, file2);
    });
  };

  return (
    <>
      <Wrapper>
        <div className="element">
          <p className="key">id заявки</p>
          <p className="value">{id}</p>
        </div>
        <div className="element">
          <p className="key">конкурс</p>
          <p className="value">{thisEvent?.name}</p>
        </div>
        <div className="element">
          <p className="key">ФИО участника</p>
          <p className="value">{name}</p>
        </div>
        <div className="element">
          <p className="key">ФИО участника 2</p>
          <p className="value">{name2}</p>
        </div>
        <div className="element">
          <p className="key">ФИО участника 3</p>
          <p className="value">{name3}</p>
        </div>
        <div className="element">
          <p className="key">Колическво участников</p>
          <p className="value">{part}</p>
        </div>
        <div className="element">
          <p className="key">Колическво кураторов</p>
          <p className="value">{curatorsAmount}</p>
        </div>
        <div className="element">
          <p className="key">Список кураторов</p>
          <div className="curators">
            {curatorsList.map((list, index) => (
              <p key={index} className="value">
                {list}
              </p>
            ))}
          </div>
        </div>
        <div className="element">
          <p className="key">Возраст</p>
          <p className="value">{age}</p>
        </div>
        <div className="element">
          <p className="key">Cубъект</p>
          <p className="value">{subject}</p>
        </div>
        <div className="element">
          <p className="key">Населенный пункт</p>
          <p className="value">{punct}</p>
        </div>
        <div className="element">
          <p className="key">Наименование учебного заведения</p>
          <p className="value">{graduate}</p>
        </div>
        <div className="element">
          <p className="key">Номинация</p>
          <p className="value">{nomPul}</p>
        </div>
        {language && (
          <div className="element">
            <p className="key">Язык работы</p>
            <p className="value">{language}</p>
          </div>
        )}
        {language2 && (
          <div className="element">
            <p className="key">Язык работы</p>
            <p className="value">{language2}</p>
          </div>
        )}
        {file && (
          <div className="element">
            <p className="key">Работа</p>
            <p className="value link" onClick={downloadHandler}>
              скачать
            </p>
          </div>
        )}
        <div className="element">
          <p className="key">Ссылка на работу</p>
          <p className="value">{link}</p>
        </div>
        <div className="element">
          <p className="key">Email</p>
          <p className="value">{email}</p>
        </div>
        <div className="element">
          <p className="key">Телефон</p>
          <p className="value">{phone}</p>
        </div>
        <div className="element">
          <p className="key">Дополнительное поле 1</p>
          <p className="value">{extra1}</p>
        </div>
        <div className="element">
          <p className="key">Дополнительное поле 2</p>
          <p className="value">{extra2}</p>
        </div>
        <div className="element">
          <p className="key">Дополнительное поле 3</p>
          <p className="value">{extra3}</p>
        </div>
        {file2 && (
          <div className="element">
            <p className="key">Квитанция от оплате</p>
            <p className="value link" onClick={downloadHandler2}>
              скачать
            </p>
          </div>
        )}
        <div className="element">
          <p className="key">Дата/время создания</p>
          <p className="value">{moment(createdAt).format("lll")}</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border: 1px solid green;

  .element {
    display: flex;
    p {
      margin: 0.5rem 0.3rem;
    }
    .key {
      /* word-break: break-all; */
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
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdminChildOrder;
