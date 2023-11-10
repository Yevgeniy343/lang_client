import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FileDownload from "js-file-download";
import Axios from "axios";
import CVid from "../components-list/CVid";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const { REACT_APP_URL_API } = process.env;

const JuruOrders = ({
  id,
  number,
  age,
  link,
  file,
  nomPul,
  type,
  juryOrder,
}) => {
  const { jury } = useSelector((store) => store.jury);

  console.log(juryOrder);
  console.log(jury._id);
  const include = _.includes(_.map(juryOrder, "juryId"), jury._id);
  console.log(include);

  const [extra, setExtra] = useState(false);

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

  const closeExtra = (data) => {
    setExtra(data);
  };

  return (
    <Wrapper>
      <div className="header" onClick={() => setExtra(!extra)}>
        {include && <p>Проверено</p>}
        {!include && <p>Не проверено</p>}
        <p>id: {number}</p>
        <p>возраст: {age}</p>
        {
          <a href={link} target="blank">
            ссылка: {link}
          </a>
        }
        {file && (
          <p className="value link" onClick={downloadHandler}>
            скачать работу
          </p>
        )}
      </div>
      {extra && (
        <div className="extra">
          <CVid
            nomPul={nomPul}
            type={type}
            link={link}
            file={file}
            id={id}
            passState={closeExtra}
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    transition: 0.6s;
    cursor: pointer;
    border: 1px solid var(--main-0);
    margin: 0.5rem 0;
  }
  .panel {
    border: 1px dotted var(--main-0);
    padding: 0.5rem;
  }
  .link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .list2 {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }
  .in {
    display: flex;
  }
  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .amount {
      font-size: 2rem;
      color: var(--clr-green-dark);
    }
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
export default JuruOrders;
