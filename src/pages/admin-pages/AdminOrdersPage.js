import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import AdminEvents from "./AdminEvents";
import Event from "../../components/adminComponents/Event";
import EventAdminModal from "../../components/adminModal/eventAdminModal";
import AdminChildOrder from "../../components/AdminChildOrder";
import { getChildOrders } from "../../features/adminSlice";

const AdminOrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChildOrders());
  }, []);

  const [state, setState] = useState("child");

  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper>
        <div className="header">
          <h4>Заявки</h4>
        </div>
        <div className="panel">
          <div className="category">
            <div
              className={state === "child" ? "child active" : "child"}
              onClick={() => setState("child")}
            >
              <p className="choose">дети</p>
            </div>
            <div
              className={state === "adult" ? "adult active" : "adult"}
              onClick={() => setState("adult")}
            >
              <p className="choose">взростые</p>
            </div>
          </div>
        </div>
        {state === "child" && (
          <div className="child_orders">
            <AdminChildOrder />
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  .header {
    display: flex;
    justify-content: center;
    margin: 1rem;
    h4 {
      color: var(--main-0);
    }
  }
  .panel {
    display: flex;
    border: 1px solid gray;
    width: 100%;
  }
  .category {
    display: flex;
    justify-content: start;
    width: 100%;
  }
  .child,
  .adult {
    background-color: var(--main-1);
    width: 100px;
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.7s;
    :hover {
      background-color: var(--main-0);
    }
    .choose {
      font-size: 1.3rem;
      color: white;
      padding: 0.5rem;
    }
  }
  .active {
    background-color: var(--main-0);
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

export default AdminOrdersPage;
