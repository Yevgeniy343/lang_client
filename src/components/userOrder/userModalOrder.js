import React from "react";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai";
import { orderModalHandler } from "../../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";

const UserModalOrder = () => {
  const { isOrderModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal">
        <div
          className="close"
          onClick={() => dispatch(orderModalHandler(false))}
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
    overflow-x: hidden;
    background-color: white;
    width: 95vw;
    height: 90%;
    overflow-y: auto;
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
      width: 580px;
      padding: 1rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default UserModalOrder;
