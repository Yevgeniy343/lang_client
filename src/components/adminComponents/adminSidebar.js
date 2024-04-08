import React from "react";
import logo from "../../images/esebb1n53kocs4kg80gw8owg8k4o80.webp";
import {
  AiOutlineClose,
  AiOutlineUnorderedList,
  AiOutlineTeam,
  AiFillDatabase,
  AiFillFolderOpen,
  AiOutlineAliwangwang,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarCloseHandler } from "../../features/user/userSlise";
import { logOutAdmin } from "../../features/adminSlice";

const AdminSideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(sidebarCloseHandler());
    dispatch(logOutAdmin());
  };

  const allEventsHandler = () => {
    navigate("/all-events");
    dispatch(sidebarCloseHandler());
  };

  const allUsersHandler = () => {
    navigate("/all-users");
    dispatch(sidebarCloseHandler());
  };

  const newEventHandler = () => {
    navigate("/new-event");
    dispatch(sidebarCloseHandler());
  };

  const nominationsHandler = () => {
    navigate("/nominations");
    dispatch(sidebarCloseHandler());
  };

  const ordersHandler = () => {
    navigate("/orders");
    dispatch(sidebarCloseHandler());
  };

  const diplomHandler = () => {
    navigate("/diploms");
    dispatch(sidebarCloseHandler());
  };
  const refsHandler = () => {
    navigate("/refs");
    dispatch(sidebarCloseHandler());
  };

  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <div></div>
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(sidebarCloseHandler())}
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          <li onClick={ordersHandler}>
            <AiOutlineAliwangwang />
            <p>Заявки</p>
          </li>
          <li onClick={nominationsHandler}>
            <AiFillDatabase />
            <p>Номинации</p>
          </li>
          <li onClick={newEventHandler}>
            <MdEventAvailable />
            <p>Новое мероприятие</p>
          </li>
          <li onClick={allEventsHandler}>
            <AiOutlineUnorderedList />
            <p>Все мероприятия</p>
          </li>
          <li onClick={allUsersHandler}>
            <AiOutlineTeam />
            <p>Все пользователи</p>
          </li>
          <li onClick={diplomHandler}>
            <AiFillFolderOpen />
            <p>Грамоты</p>
          </li>
          <li onClick={refsHandler}>
            <AiOutlineShareAlt />
            <p>Рефералы</p>
          </li>
          <li onClick={logOutHandler}>
            <GiExitDoor />
            <p>Выйти</p>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  background-color: white;
  .links {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    margin: auto;
  }
  li {
    font-size: 1.5rem;
    margin: 0;
    padding: 2rem;
    padding-left: 2rem;
    color: var(--color-4);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: var(--transition2);
    width: 100%;
    p {
      color: var(--main-0);
      margin-left: 1rem;
    }
    :hover {
      padding-left: 2.5rem;
      background-color: var(--main-2);
    }
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-4);
    transition: var(--transition);
    cursor: pointer;

    margin-top: 0.2rem;
  }
  .close-btn:hover {
  }
  .logo {
    justify-self: center;
    height: 60px;
  }
  .links {
    margin-bottom: 2rem;
    margin: auto;
  }
  li {
    cursor: pointer;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .logo {
    cursor: pointer;
  }
  button {
    float: right;
  }
  svg {
    font-size: 2.3rem;
    color: var(--main-0);
    transition: var(--transition2);
    :hover {
      color: var(--main-1);
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default AdminSideBar;
