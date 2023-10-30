import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components-special/Button";
import NavBar from "../../components/juryNavigations/NavBar";
import SideBar from "../../components/juryNavigations/SideBar";
import JurySmallMenu from "../../components/JurySmallMenu";
import Stars from "./Stars";
import JuryProfile from "../../components/JuryProfile";
import Actual from "../../components/Actual";
import Works from "../../components/Works";
import { getOrders, getEvents } from "../../features/jury/jurySlice";

const JuryArea = () => {
  const { jury, currentSmallMenu } = useSelector((store) => store.jury);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ id: jury._id }));
  }, []);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <SideBar />
      <div className="main">
        <div className="lk">
          <h2>Личный кабинет члена жюри</h2>
        </div>
        <div className="container">
          <div className="left">
            <JurySmallMenu item="Профиль" />
            <JurySmallMenu item="Актуальные мероприятия" />
            <JurySmallMenu item="Работы для проверки" />
            <JurySmallMenu item="Диплом" />
          </div>
          <div className="right">
            <Stars />
            {currentSmallMenu === "Профиль" && <JuryProfile />}
            {currentSmallMenu === "Актуальные мероприятия" && <Actual />}
            {currentSmallMenu === "Работы для проверки" && <Works />}
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
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default JuryArea;
