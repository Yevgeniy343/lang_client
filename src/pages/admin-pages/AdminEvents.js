import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import Event from "../../components/adminComponents/Event";
import EventItem from "../../components/adminComponents/EventItem";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";

const AdminEvents = () => {
  const { events } = useSelector((store) => store.admin);
  console.log(events);
  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper>
        <div className="content">
          <div className="event-header">
            <p>Новое мероприятие</p>
          </div>
          <Event />
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    box-shadow: var(--dark-shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-width: 600px;
    margin: 2rem;
    padding: 2rem;
    /* width: 300px; */
    .event-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      p {
        color: var(--main-0);
        font-size: 1.5rem;
      }
    }
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
export default AdminEvents;
