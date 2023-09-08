import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { isChildOrderHandler } from "../../features/adminSlice";
import { useDispatch } from "react-redux";

const AdminEditChildOrder = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="modal">
        <div className="close">
          <div
            className="close"
            onClick={() => dispatch(isChildOrderHandler(false))}
          >
            <AiOutlineClose />
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
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;
  .modal {
    background-color: white;
    width: 95vw;
    height: 90%;
    overflow-y: auto;
    border-radius: 10px;
    padding: 0 2rem;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--main-0);
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--main-2);
      border-radius: 10px;
    }
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
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdminEditChildOrder;
