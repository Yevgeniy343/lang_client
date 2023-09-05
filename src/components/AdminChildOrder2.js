import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import FileDownload from "js-file-download";
import Axios from "axios";
import moment from "moment";

const { REACT_APP_URL_API } = process.env;

const AdminChildOrder2 = ({
  id,
  eventId,
  name,
  subject,
  punct,
  nomPul,
  language,
  language2,
}) => {
  const { events } = useSelector((store) => store.admin);

  const thisEvent = events?.find((ev) => ev._id === eventId);

  return (
    <Wrapper>
      <div className="table">
        <p className="value">{id}</p>
        <p className="value">{name}</p>
        <p className="value">{subject}</p>
        <p className="value">{punct}</p>
        <p className="value">{nomPul}</p>
        {language && <p className="value">{language}</p>}
        {language2 && <p className="value">{language2}</p>}
      </div>
      <div className="element"></div>
      <div className="element"></div>

      <div className="element"></div>
      <div className="element"></div>
      <div className="element"></div>
      {language && <div className="element"></div>}
      {language2 && <div className="element"></div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .table {
    /* border-right: 1px solid gray; */
    display: flex;
    justify-content: space-between;
    /* overflow-x: auto; */
    width: 100%;

    align-items: center;
    p {
      padding: 0.5rem;
      width: 220px;
      min-width: 220px;
      /* border-right: 1px solid gray; */
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
export default AdminChildOrder2;