import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components-special/Button";
import NavBar from "../components/Navigation/Navbar";
import SideBar from "../components/Navigation/Sidebar";
import SmallMenu from "../components/SmallMenu";
import RightHeader from "../components/RightHeader";
import Profile from "../components/Profile";

const PersonamArea = () => {
  const { user, currentSmallMenu } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <NavBar />
      <SideBar />
      <div className="main">
        <div className="lk">
          <h2>Личный кабинет</h2>
        </div>
        <div className="container">
          <div className="left">
            <SmallMenu item="Мои заказы" />
            <SmallMenu item="Профиль" />
            <SmallMenu item="Мои курсы" />
          </div>
          <div className="right">
            <RightHeader />
            {currentSmallMenu === "Профиль" && <Profile />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    margin: 2rem;
  }
  h2 {
    color: var(--main-0);
  }
  .container {
    display: flex;
    flex-direction: column;
    .left {
      width: 100%;
      margin-top: 1rem;
      max-width: 400px;
      height: max-content;
      display: flex;
      flex-direction: row;
      justify-content: center;
      background-color: var(--gray-0);
    }
    .right {
      width: 100%;
      height: 300px;
      margin: 1rem;
      margin-left: 0;
    }
  }
  .active {
    background-color: var(--main-0);
    color: white;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .main {
      margin: 4rem;
    }
    .container {
      display: flex;
      flex-direction: row;
      .left {
        width: 300px;
        margin-top: 1rem;
        flex-direction: column;
      }
      .right {
        margin-left: 1rem;
      }
    }
    h2 {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default PersonamArea;
