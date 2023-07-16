import React from "react";
import logo from "../../images/esebb1n53kocs4kg80gw8owg8k4o80.webp";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  toggleHandler,
  logOutUser,
  smallMenuHandler,
  sidebarCloseHandler,
} from "../../features/user/userSlise";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(sidebarCloseHandler());
    dispatch(logOutUser());
  };

  const profileHandler = () => {
    dispatch(smallMenuHandler("Профиль"));
    dispatch(sidebarCloseHandler());
  };

  const { isSidebarOpen, user } = useSelector((store) => store.user);
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
          <li onClick={profileHandler}>
            <BiUser />
            <p>Профайл</p>
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
    font-size: 2rem;
    margin: 0;
    padding: 2rem;
    padding-left: 2rem;
    color: var(--color-4);
    display: flex;
    justify-content: flex-start;
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

export default SideBar;
