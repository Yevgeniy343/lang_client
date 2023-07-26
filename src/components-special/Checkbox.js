import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { sendMail } from "../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = ({ label, onClick }) => {
  const { currentEvent } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const checkboxHandler = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      console.log("true");
      dispatch(
        sendMail({
          email: currentEvent.email,
          name: currentEvent.name,
          date: currentEvent.date,
          time: currentEvent.time,
          location: currentEvent.location,
        })
      );
    }
  }, [active]);

  return (
    <Wrapper onClick={onClick}>
      <div
        className={active ? "checkbox active" : "checkbox"}
        onClick={checkboxHandler}
      >
        {active && <AiOutlineCheck />}
      </div>
      <p>{label}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--lilac-1);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.7s;
    :hover {
      border: 2px solid var(--lilac-2);
      background-color: var(--lilac-2);
    }
    :active {
      border: 2px solid var(--lilac-1);
      background-color: var(--lilac-1);
    }
  }
  .active {
    background-color: var(--lilac-1);
    svg {
      color: white;
      font-size: 1.1rem;
    }
  }
  p {
    letter-spacing: 0.08rem;
    margin: 0;
    margin-left: 0.5rem;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default Checkbox;
