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
import AdminChildOrder2 from "../../components/AdminChildOrder2";
import AdminAdultOrder2 from "../../components/AdminAdultOrder2";
import { getChildOrders, getAdultOrders } from "../../features/adminSlice";
import _ from "lodash";

const AdminOrdersPage = () => {
  const dispatch = useDispatch();
  const { childOrders, adultOrders } = useSelector((store) => store.admin);
  console.log("childOrdesr", childOrders);
  console.log("adultOrdesr", adultOrders);

  useEffect(() => {
    dispatch(getChildOrders());
  }, []);

  useEffect(() => {
    dispatch(getAdultOrders());
  }, []);

  const [state, setState] = useState("child");
  console.log(state);
  const [sort, setSort] = useState();
  const [data, setData] = useState(childOrders);
  const [data2, setData2] = useState(adultOrders);

  console.log(sort);

  useEffect(() => {
    if (sort === "name") {
      const childOrders2 = _.sortBy(childOrders, "name");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "name");
      setData2(adultOrders2);
    }
    if (sort === "id") {
      const childOrders2 = _.sortBy(childOrders, "_id");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "_id");
      setData2(adultOrders2);
    }
    if (sort === "subject") {
      const childOrders2 = _.sortBy(childOrders, "subject");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "subject");
      setData2(adultOrders2);
    }
    if (sort === "punct") {
      const childOrders2 = _.sortBy(childOrders, "punct");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "punct");
      setData2(adultOrders2);
    }
    if (sort === "nomPul") {
      const childOrders2 = _.sortBy(childOrders, "nomPul");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "nomPul");
      setData2(adultOrders2);
    }
    if (sort === "language") {
      const childOrders2 = _.sortBy(childOrders, "language");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "language");
      setData2(adultOrders2);
    }
  }, [sort]);

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
        {/* <AdminChildOrder
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
              /> */}
        <div className="t">
          <div className="header2">
            <p
              onClick={() => setSort("id")}
              className={sort === "id" ? "key key-active" : "key"}
            >
              id заявки
            </p>
            <p
              className={sort === "name" ? "key key-active" : "key"}
              onClick={() => setSort("name")}
            >
              ФИО участника
            </p>
            <p
              className={sort === "subject" ? "key key-active" : "key"}
              onClick={() => setSort("subject")}
            >
              Cубъект
            </p>
            <p
              className={sort === "punct" ? "key key-active" : "key"}
              onClick={() => setSort("punct")}
            >
              Населенный пункт
            </p>
            <p
              className={sort === "nomPul" ? "key key-active" : "key"}
              onClick={() => setSort("nomPul")}
            >
              Номинация
            </p>
            <p
              className={sort === "language" ? "key key-active" : "key"}
              onClick={() => setSort("language")}
            >
              Язык работы
            </p>
          </div>
          {state === "child" && (
            <div className="child_orders">
              {data?.map((order) => (
                <AdminChildOrder2
                  key={order._id}
                  id={order._id}
                  name={order.name}
                  subject={order.subject}
                  punct={order.punct}
                  language={order.language}
                  language2={order.language2}
                  nomPul={order.nomPul}
                />
              ))}
            </div>
          )}
          {state === "adult" && (
            <div className="child_orders">
              {data2?.map((order) => (
                <AdminAdultOrder2
                  key={order._id}
                  id={order._id}
                  name={order.name}
                  subject={order.subject}
                  punct={order.punct}
                  language={order.language}
                  language2={order.language2}
                  nomPul={order.nomPul}
                />
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  /* overflow: auto; */

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
  .t {
    /* min-width: 900px; */
    width: 100%;
    overflow: auto;
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  .header2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
      padding: 0.5rem;
      width: 220px;
      min-width: 220px;
    }
  }
  .key {
    :hover {
      background-color: var(--main-3);
      cursor: pointer;
    }
  }
  .key-active {
    background-color: var(--main-3);
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
