import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sidebarOpenHandler, logOutUser } from "../../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";
import { GiExitDoor } from "react-icons/gi";
import { logOutAdmin } from "../../features/adminSlice";
import {
  AiOutlineMenu,
  AiOutlineUnorderedList,
  AiOutlineTeam,
  AiFillDatabase,
  AiOutlineAliwangwang,
  AiFillFolderOpen,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";

const AdminNavBar = () => {
  const { user, isModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <div>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <button
              type="button"
              className="nav-toggle"
              onClick={() => dispatch(sidebarOpenHandler())}
            >
              <AiOutlineMenu />
            </button>
          </div>
          <ul className="nav-links">
            <li onClick={() => navigate("/orders")}>
              <AiOutlineAliwangwang />
              <p>Заявки</p>
            </li>
            <li onClick={() => navigate("/nominations")}>
              <AiFillDatabase />
              <p>Номинации</p>
            </li>
            <li onClick={() => navigate("/new-event")}>
              <MdEventAvailable />
              <p>Новое мероприятие</p>
            </li>
            <li onClick={() => navigate("/all-events")}>
              <AiOutlineUnorderedList />
              <p>Все мероприятия</p>
            </li>
            <li onClick={() => navigate("/all-users")}>
              <AiOutlineTeam />
              <p>Все пользователи</p>
            </li>
            <li onClick={() => navigate("/diploms")}>
              <AiFillFolderOpen />
              <p>Грамоты</p>
            </li>
            <li onClick={() => navigate("/refs")}>
              <AiOutlineShareAlt />
              <p>Рефералы</p>
            </li>
            <li onClick={() => dispatch(logOutAdmin())}>
              <GiExitDoor />
              <p>Выйти</p>
            </li>
          </ul>
        </div>
      </NavContainer>
    </div>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    /* margin-top: 1.5rem; */
    background: transparent;
    border: transparent;
    transition: var(--transition2);
    color: var(--color-4);
    :hover {
      color: var(--main-0);
    }
    cursor: pointer;
  }
  .nav-links {
    display: none;
    align-items: center;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 15px;
    :hover {
      svg {
        color: var(--main-1);
      }
      p {
        color: var(--main-1);
      }
    }
    p {
      transition: var(--transition2);
      color: var(--main-0);
      font-size: 1rem;
    }
  }
  .name {
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid var(--color-3);
    box-shadow: var(--shadow-4);
    cursor: pointer;
    transition: 1s;

    p {
      font-size: 1.3rem;
    }
  }
  svg {
    font-size: 2.3rem;
    color: var(--main-0);
    transition: var(--transition2);
  }
  @media (min-width: 992px) {
    height: 150px;

    .nav-center {
      width: 100vw;
      margin: 0;
      max-width: 100%;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0.5rem;
        font-size: 1.2rem;
        border: 4px solid transparent;
      }
      .cart-btn-wrapper {
        display: grid;
      }
    }
  }
  @media (min-width: 1050px) {
    height: 100px;
  }
`;

export default AdminNavBar;
