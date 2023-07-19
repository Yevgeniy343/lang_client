import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { eventModalHandler } from "../../features/adminSlice";
import Input from "../../components-special/Input";

const EventAdminModal = () => {
  const { isEventModal, currentEvent } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const initialState = {
    name: currentEvent.name,
    date1: currentEvent.date1,
    date2: currentEvent.date2,
    description: currentEvent.description,
  };

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div className="modal">
        <div
          className="close"
          onClick={() => dispatch(eventModalHandler(false))}
        >
          <AiOutlineClose />
        </div>
        <div className="content">
          <div className="name">
            <label>
              <span>*</span>Название мероприятия
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
          <div className="description">
            <label>
              <span>*</span>Положение
            </label>
            <textarea
              rows="10"
              name="description"
              type="text"
              value={values.description}
              onChange={changeHandler}
            ></textarea>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;
  .modal {
    background-color: white;
    width: 95vw;
    height: 95vh;
    border-radius: 10px;
  }
  .close {
    display: flex;
    justify-content: end;
    margin: 1rem;
    svg {
      font-size: 2rem;
      color: var(--main-0);
      transition: var(--transition2);
      cursor: pointer;
      :hover {
        color: var(--main-1);
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    p {
      color: var(--main-0);
      font-size: 1.3rem;
    }
  }
  input,
  textarea {
    margin-bottom: 1rem;
    width: 300px;
  }
  .date {
    display: flex;
    flex-direction: column;
    input {
      /* margin: 0 10px; */
      margin-bottom: 1rem;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    label {
      margin: 0 1rem;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    input,
    textarea {
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
    .modal {
      width: 580px;
      height: 90vh;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }

  span {
    color: var(--clr-red-dark);
  }
  label {
    font-size: 0.9rem;
    margin: 1rem;
    color: var(--clr-grey-5);
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
  button {
    width: 150px;
  }
`;
export default EventAdminModal;
