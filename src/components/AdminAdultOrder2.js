import styled from "styled-components";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(isAdultOrderHandler(true));
    dispatch(currentAdultOrderHandler(id));
  };

  return (
    <Wrapper>
      <div className="table" onClick={modalHandler}>
        <p
          className={
            status === "pending"
              ? "value c1 pending"
              : status === "ok"
              ? "value ok c1"
              : status === "declined"
              ? "value declined c1"
              : status === "отредактировано владельцем"
              ? "value edited c1"
              : "value c1"
          }
        >
          {number}
        </p>
        <p className="c2">{name}</p>
        <p className="c3">{subject}</p>
        <p className="c4">{punct}</p>
        <p className="c5">{nomPul}</p>
        {language && <p className="c6">{language}</p>}
        {language2 && <p className="c6">{language2}</p>}
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
  .c1 {
    max-width: 120px;
    min-width: 120px;
    margin: 0 10px;
  }
  .c2 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c3 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c4 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c5 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c6 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
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
