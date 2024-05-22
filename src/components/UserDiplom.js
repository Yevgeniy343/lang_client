import React from "react";
import styled from "styled-components";
import FileDownload from "js-file-download";
import Axios from "axios";

const { REACT_APP_URL_API } = process.env;

function UserDiplom({ _id, userId, eventId, eventName, date1, date2, file }) {
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

  return (
    <Wrapper>
      <img src={`${REACT_APP_URL_API}/${file}`} alt="" />
      <div className="name">
        <p className="diplom-name">{eventName}</p>
        <p className="date">
          {date1} - {date2}
        </p>
        <p className="download" onClick={downloadHandler}>
          Скачать
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 90vw;
  }
  .name {
    margin: 20px;
    .diplom-name {
      font-size: 18px;
      color: var(--main-0);
    }
    .date {
      font-size: 16px;
      margin: 10px 0;
      color: var(--clr-grey-6);
    }
    .download {
      margin: 5px 0;
      cursor: pointer;
      color: var(--clr-grey-6);
      font-style: italic;
      font-size: 14px;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
    img {
      width: 200px;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default UserDiplom;
