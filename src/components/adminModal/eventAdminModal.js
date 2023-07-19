import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { eventModalHandler } from "../../features/adminSlice";

const EventAdminModal = () => {
  const { isEventModal } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="modal">
        <div
          className="close"
          onClick={() => dispatch(eventModalHandler(false))}
        >
          <AiOutlineClose />
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
    width: 90vw;
    height: 90vh;
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
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .modal {
      width: 700px;
      height: 90vh;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default EventAdminModal;
