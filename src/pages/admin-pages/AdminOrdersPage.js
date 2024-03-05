import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";

import AdminChildOrder2 from "../../components/AdminChildOrder2";
import AdminAdultOrder2 from "../../components/AdminAdultOrder2";
import {
  getChildOrders,
  getAdultOrders,
  currentOrderTypeHandler,
} from "../../features/adminSlice";
import _ from "lodash";
import AdminEditChildOrder from "../../components/adminOrders/AdminEditChildOrder";
import AdminEditAdultOrder from "../../components/adminOrders/AdminEditAdultOrder";
import CheckboxAgreement from "../../components-special/CheckboxAgreement";
import SelectEvents from "../../components-special/SelectEvents";
import { MdOutlineAirlineSeatLegroomReduced } from "react-icons/md";
import { getEvents } from "../../features/adminSlice";

const AdminOrdersPage = () => {
  const dispatch = useDispatch();
  // window.location.reload();
  const {
    childOrders,
    adultOrders,
    isChildOrder,
    isAdultOrder,
    events,
    currentOrderType,
  } = useSelector((store) => store.admin);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    dispatch(getChildOrders());
  }, [childOrders._id]);

  useEffect(() => {
    dispatch(getChildOrders());
  }, [JSON.stringify(childOrders)]);

  // console.log(events);

  const [pending, setPending] = useState();
  const [child, setChild] = useState();
  const [adult, setAdult] = useState();
  // const [state, setState] = useState("child");
  const [sort, setSort] = useState("Child");
  const [data, setData] = useState(child);
  const [data2, setData2] = useState(adult);
  const [concurs, setConcurs] = useState();
  const [adult4, setAdult4] = useState();
  const [child4, setChild4] = useState();

  useEffect(() => {
    if (!concurs) {
      const adultOrders3 = adultOrders;
      setAdult4(adultOrders3);
    } else {
      const adultOrders3 = _.filter(adultOrders, { eventId: concurs });
      setAdult4(adultOrders3);
    }
  }, [concurs]);

  useEffect(() => {
    if (!concurs) {
      const childOrders3 = childOrders;
      setChild4(childOrders3);
    } else {
      const childOrders3 = _.filter(childOrders, { eventId: concurs });
      setChild4(childOrders3);
    }
  }, [concurs]);

  const eventHandler = (d) => {
    setConcurs(d._id);
  };

  useEffect(() => {
    if (pending) {
      const adultOrders2 = _.filter(adult4, { status: "pending" });
      setAdult(adultOrders2, adult4);
    } else {
      const adultOrders2 = adult4;
      setAdult(adultOrders2);
    }
  }, [pending, adultOrders, adult4]);

  useEffect(() => {
    if (pending) {
      const childOrders2 = _.filter(child4, { status: "pending" });
      setChild(childOrders2);
    } else {
      const childOrders2 = child4;
      setChild(childOrders2);
    }
  }, [pending, childOrders, child4]);

  useEffect(() => {
    dispatch(getChildOrders());
  }, [childOrders?._id]);

  useEffect(() => {
    dispatch(getAdultOrders());
  }, [adultOrders?._id]);

  useEffect(() => {
    setData2(adult);
  }, [pending, adult]);

  useEffect(() => {
    setData(child);
  }, [pending, child]);

  useEffect(() => {
    if (sort === "name") {
      const childOrders2 = _.sortBy(childOrders, "name");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "name");
      setData2(adultOrders2);
    }
    if (sort === "number") {
      const childOrders2 = _.sortBy(childOrders, "number");
      setData(childOrders2);
      const adultOrders2 = _.sortBy(adultOrders, "number");
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

  const statusHandler = (d) => {
    setPending(d);
  };

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
              className={
                currentOrderType === "child" ? "child active" : "child"
              }
              onClick={() => dispatch(currentOrderTypeHandler("child"))}
            >
              <p className="choose">дети</p>
            </div>
            <div
              className={
                currentOrderType === "adult" ? "adult active" : "adult"
              }
              onClick={() => dispatch(currentOrderTypeHandler("adult"))}
            >
              <p className="choose">взростые</p>
            </div>
            <div className="filter">
              <SelectEvents passState={eventHandler} data={events} />
              <CheckboxAgreement label="В ожидании" passState={statusHandler} />
            </div>
          </div>
        </div>

        <div className="t">
          <div className="header2">
            <p
              onClick={() => setSort("number")}
              className={sort === "number" ? "key key-active c1" : "key c1"}
            >
              id заявки
            </p>
            <p
              className={sort === "name" ? "key key-active c2" : "key c2"}
              onClick={() => setSort("name")}
            >
              ФИО участника
            </p>
            <p
              className={sort === "subject" ? "key key-active c3" : "key c3"}
              onClick={() => setSort("subject")}
            >
              Cубъект
            </p>
            <p
              className={sort === "punct" ? "key key-active c4" : "key c4"}
              onClick={() => setSort("punct")}
            >
              Населенный пункт
            </p>
            <p
              className={sort === "nomPul" ? "key key-active c5" : "key c5"}
              onClick={() => setSort("nomPul")}
            >
              Номинация
            </p>
            <p
              className={sort === "language" ? "key key-active c6" : "key c6"}
              onClick={() => setSort("language")}
            >
              Язык работы
            </p>
          </div>
          {currentOrderType === "child" && (
            <div className="child_orders">
              {data?.map((order) => (
                <AdminChildOrder2
                  key={order._id}
                  number={order.number}
                  id={order._id}
                  name={order.name}
                  subject={order.subject}
                  punct={order.punct}
                  language={order.language}
                  language2={order.language2}
                  nomPul={order.nomPul}
                  status={order.status}
                />
              ))}
            </div>
          )}
          {currentOrderType === "adult" && (
            <div className="child_orders">
              {data2?.map((order) => (
                <AdminAdultOrder2
                  key={order._id}
                  number={order.number}
                  name={order.name}
                  subject={order.subject}
                  punct={order.punct}
                  language={order.language}
                  language2={order.language2}
                  nomPul={order.nomPul}
                  id={order._id}
                  status={order.status}
                />
              ))}
            </div>
          )}
        </div>
      </Wrapper>
      {isChildOrder && <AdminEditChildOrder />}
      {isAdultOrder && <AdminEditAdultOrder />}
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
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin: 0 0.5rem;
    }
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
    justify-content: flex-start;
    /* width: 100%; */
    p {
      /* padding: 0.5rem; */
      /* width: 300px;
      min-width: 300px; */
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
  .c1 {
    max-width: 120px;
    min-width: 120px;
    margin: 0 10px;
  }
  .c2 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c3 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c4 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c5 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
  }
  .c6 {
    max-width: 300px;
    min-width: 300px;
    margin: 0 10px;
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
