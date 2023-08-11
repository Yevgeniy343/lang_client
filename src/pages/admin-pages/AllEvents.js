import React, { useEffect } from "react";

import styled from "styled-components";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import EventItem from "../../components/adminComponents/EventItem";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../features/adminSlice";
import EventAdminModal from "../../components/adminModal/eventAdminModal";
import Loading from "../../components/Loading";

const AllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const { events, isEventModal, isLoading } = useSelector(
    (store) => store.admin
  );

  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      {isLoading && <Loading />}
      <Wrapper>
        {events.map((e) => (
          <EventItem
            key={e._id}
            name={e.name}
            date1={e.date1}
            date2={e.date2}
            image={e.image}
            id={e._id}
            pdf={e.pdf}
            extra1={e.extra1}
            extra2={e.extra2}
            extra3={e.extra3}
          />
        ))}
      </Wrapper>
      {isEventModal && <EventAdminModal />}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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
export default AllEvents;
