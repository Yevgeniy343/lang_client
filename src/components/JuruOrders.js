import React from "react";
import styled from "styled-components";
import FileDownload from "js-file-download";
import Axios from "axios";

const { REACT_APP_URL_API } = process.env;

const JuruOrders = ({ id, number, age, link, file }) => {
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
      <div className="header">
        <p>id: {number}</p>
        <p>возраст: {age}</p>
        <a href={link} target="blank">
          ссылка: {link}
        </a>
        {file && (
          <p className="value link" onClick={downloadHandler}>
            скачать паботу
          </p>
        )}
      </div>
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
  .link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
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
