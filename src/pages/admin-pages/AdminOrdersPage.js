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
  const { childOrders } = useSelector((store) => store.admin);

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
            {childOrders?.map((order) => (
              <AdminChildOrder
                key={order._id}
                id={order._id}
                eventId={order.eventId}
                name={order.name}
                name2={order.name2}
                name3={order.name3}
                part={order.part}
                curatorsAmount={order.curatorsAmount}
                cur={order.cur}
                age={order.age}
                subject={order.subject}
                punct={order.punct}
                graduate={order.graduate}
                nomPul={order.nomPul}
                language={order.language}
                language2={order.language2}
                file={order.file}
                link={order.link}
                file2={order.file2}
                email={order.email}
                phone={order.phone}
                extra1={order.extra1}
                extra2={order.extra2}
                extra3={order.extra3}
                createdAt={order.createdAt}
              />
            ))}
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
  .child_orders {
    width: 100%;
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
