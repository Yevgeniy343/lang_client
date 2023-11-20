import React, { useEffect, useState } from "react";
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
      <div className="table" onClick={modalHandler}>
        <p
          className={
            status === "pending"
              ? "value pending"
              : status === "ok"
              ? "value ok"
              : status === "declined"
              ? "value declined"
              : status === "отредактировано владельцем"
              ? "value edited"
              : "value"
          }
        >
          {number}
        </p>
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
    height: 40px;
    :hover {
      background-color: var(--main-3);
      cursor: pointer;
    }
    p {
      padding: 0.3rem;
      width: 140px;
      min-width: 140px;
    }
  }
  .pending {
    background: var(--pending-1);
  }
  .ok {
    background: var(--ok-1);
  }
  .declined {
    background: var(--declined-1);
  }
  .edited {
    background-color: var(--edited-1);
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
