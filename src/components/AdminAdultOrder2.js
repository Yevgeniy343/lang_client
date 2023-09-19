import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import FileDownload from "js-file-download";
import Axios from "axios";
import moment from "moment";
import {
  isAdultOrderHandler,
  currentAdultOrderHandler,
} from "../features/adminSlice";

const { REACT_APP_URL_API } = process.env;

const AdminAdultOrder2 = ({
  id,
  eventId,
  name,
  subject,
  punct,
  nomPul,
  language,
  language2,
  number,
  status,
}) => {
  const { events } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(isAdultOrderHandler(true));
    dispatch(currentAdultOrderHandler(id));
  };

  const thisEvent = events?.find((ev) => ev._id === eventId);

  return (
    <Wrapper>
      <div
        className={status === "pending" ? "table blue" : "table"}
        onClick={modalHandler}
      >
        <p className="value">{number}</p>
        <p className="value">{name}</p>
        <p className="value">{subject}</p>
        <p className="value">{punct}</p>
        <p className="value">{nomPul}</p>
        {language && <p className="value">{language}</p>}
        {language2 && <p className="value">{language2}</p>}
      </div>
      {language && <div className="element"></div>}
      {language2 && <div className="element"></div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .table {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 50px;
    :hover {
      background-color: var(--main-3);
      cursor: pointer;
    }
    p {
      padding: 0.5rem;
      width: 220px;
      min-width: 220px;
    }
  }
  .blue {
    background: var(--pending-1);
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
export default AdminAdultOrder2;
