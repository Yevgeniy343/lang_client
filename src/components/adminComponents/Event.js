import React from "react";
import styled from "styled-components";
import Input from "../../components-special/Input";
import Button from "../../components-special/Button";

const Event = () => {
  return (
    <Wrapper>
      <div className="name">
        <label>
          <span>*</span>Название мероприятия
        </label>
        <Input />
      </div>
      <div className="date">
        <div className="date1">
          <label>
            <span>*</span>Дата начала
          </label>
          <Input type="date" />
        </div>
        <div className="date2">
          <label>
            <span>*</span>Дата окончания
          </label>
          <Input type="date" />
        </div>
      </div>
      <div className="description">
        <textarea rows="10"></textarea>
      </div>
      <div className="upload-pfd">
        <input type="file" style={{ display: "none" }} accept=".pdf" />
        <div className="actions">
          <Button text="добавить pdf" />
          <Button text="загрузить" />
        </div>
      </div>
      <div className="picture"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
      margin: 0 10px;
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
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    input,
    textarea {
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
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }

  textarea {
    box-sizing: border-box;
    padding: 1rem;
    border: none;
    background: var(--gray-0);
    border-radius: 5px;
    font-size: 100%;
    color: var(--main-0);
    resize: none;

    ::placeholder {
      color: var(--gray-1);
    }
    :focus-visible {
      outline: none;
    }

    :hover {
      ::placeholder {
        transition: 0.5s;
      }
    }
  }
`;
export default Event;
