import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components-special/Button";
import NavBar from "../components/Navigation/Navbar";
import SideBar from "../components/Navigation/Sidebar";
import SmallMenu from "../components/SmallMenu";
import RightHeader from "../components/RightHeader";
import Profile from "../components/Profile";
import UserEvents from "../components/UserEvents";
import {
  getEvent,
  getAllOrders,
  getCondition,
} from "../features/user/userSlise";
import UserModalOrder from "../components/userOrder/userModalOrder";
import UserOrders from "../components/userOrder/UserOrders";

const PersonamArea = () => {
  const { user, currentSmallMenu, events, isOrderModal } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllOrders(user._id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCondition());
  }, [dispatch]);

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
            <SmallMenu item="Профиль" />
            <SmallMenu item="Актуальные мероприятия" />
            <SmallMenu item="Мои заявки" />
            <SmallMenu item="Скачать дипломы" />
          </div>
          <div className="right">
            <RightHeader />
            {currentSmallMenu === "Профиль" && <Profile />}
            {currentSmallMenu === "Актуальные мероприятия" && <UserEvents />}
            {currentSmallMenu === "Мои заявки" && <UserOrders />}
            {isOrderModal && <UserModalOrder />}
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
      /* max-width: 400px; */
      height: max-content;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      /* background-color: var(--gray-0); */
      flex-wrap: wrap;
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
